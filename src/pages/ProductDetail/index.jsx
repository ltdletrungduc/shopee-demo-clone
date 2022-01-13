import { unwrapResult } from '@reduxjs/toolkit'
import Button from 'components/Button'
import ProductQuantityController from 'components/ProductQuantityController'
import ProductRating from 'components/ProductRating'
import DOMPurify from 'dompurify'
import { getProductInCart } from 'pages/Cart/cart.slice'
import React, { useMemo } from 'react'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  formatK,
  formatMoney,
  getIdProductFromURL,
  rateSale
} from 'utils/helper'
import { getProductDetail, addToCart } from './productDetail.slice'
import * as Styled from './styled'

function ProductDetail() {
  const [product, setProduct] = useState(null)
  const [currentImage, setCurrentImage] = useState({})
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [quantity, setQuantity] = useState(1)

  const productDispatch = useDispatch()
  const { idProduct } = useParams()

  const currentImages = useMemo(() => {
    if (product) {
      return product.images.slice(...currentIndexImages)
    }
    return []
  }, [product, currentIndexImages])
  // console.log( getIdProductFromURL( idProduct ) )

  const changeCurrentImage = image => {
    setCurrentImage(image)
  }

  const handleChangeQuantity = value => setQuantity(value)

  const handleAddToCart = async () => {
    const body = {
      product_id: product._id,
      buy_count: quantity
    }
    const res = await productDispatch(addToCart(body)).then(unwrapResult)
    await productDispatch(getProductInCart()).then(unwrapResult)
    toast.success(res.message, {
      position: 'top-center',
      autoClose: 4000
    })
  }

  const choosePrev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages(currentState => {
        return [currentState[0] - 1, currentState[1] - 1]
      })
    }
  }

  const chooseNext = () => {
    if (currentIndexImages[1] < product.images.length) {
      setCurrentIndexImages(currentState => {
        return [currentState[0] + 1, currentState[1] + 1]
      })
    }
  }

  useEffect(() => {
    const _id = getIdProductFromURL(idProduct)
    productDispatch(getProductDetail(_id))
      .then(unwrapResult)
      .then(response => {
        response.data.images = response.data.images.map((image, index) => {
          return {
            url: image,
            id: index
          }
        })
        setCurrentImage(response.data.images[0])
        setProduct(response.data)
      })
  }, [idProduct, productDispatch])

  return (
    <Styled.ProductDetail>
      <Helmet>
        <title>{product?.name}</title>
      </Helmet>
      <div className="container">
        {product && (
          <>
            <Styled.ProductBriefing>
              <Styled.ProductImages>
                <Styled.ProductImageActive>
                  <img src={currentImage.url} alt={product.name} />
                </Styled.ProductImageActive>
                <Styled.ProductImagesSlider>
                  <Styled.SliderButtonPrev onClick={choosePrev}>
                    <LeftArrowIcon />
                  </Styled.SliderButtonPrev>
                  {currentImages.map(image => (
                    <Styled.ProductImage
                      key={image.id}
                      active={currentImage.id === image.id}
                    >
                      <img
                        src={image.url}
                        alt="Product"
                        onMouseEnter={() => changeCurrentImage(image)}
                      />
                    </Styled.ProductImage>
                  ))}
                  <Styled.SliderButtonNext onClick={chooseNext}>
                    <RightArrowIcon />
                  </Styled.SliderButtonNext>
                </Styled.ProductImagesSlider>
              </Styled.ProductImages>
              <Styled.ProductMeta>
                <Styled.ProductName>{product.name}</Styled.ProductName>
                <Styled.ProductMeta1>
                  <Styled.ProductRating>
                    <span>{product.rating}</span>
                    <ProductRating rating={product.rating} />
                  </Styled.ProductRating>
                  <Styled.ProductSold>
                    <span>{formatK(product.sold)}</span>
                    <span>Đã bán</span>
                  </Styled.ProductSold>
                </Styled.ProductMeta1>
                <Styled.ProductPrice>
                  <Styled.ProductPriceOriginal>
                    <span>{formatMoney(product.price_before_discount)}</span>
                  </Styled.ProductPriceOriginal>
                  <Styled.ProductPriceSale>
                    <span>{formatMoney(product.price)}</span>
                  </Styled.ProductPriceSale>
                  <Styled.ProductSalePercent>
                    {rateSale(product.price_before_discount, product.price)}{' '}
                    giảm
                  </Styled.ProductSalePercent>
                </Styled.ProductPrice>
                <Styled.ProductOptions>
                  <Styled.ProductOption>
                    <Styled.ProductOptionLabel>
                      Mã giảm giá của shop
                    </Styled.ProductOptionLabel>
                    <Styled.ProductOptionContent>
                      <Styled.MiniVoucher>
                        <span>Giảm đ5k</span>
                      </Styled.MiniVoucher>
                    </Styled.ProductOptionContent>
                  </Styled.ProductOption>
                  <Styled.ProductOption>
                    <Styled.ProductOptionLabel>
                      Vận chuyển
                    </Styled.ProductOptionLabel>
                    <Styled.ProductOptionContent>
                      <span>SOME TEXT</span>
                    </Styled.ProductOptionContent>
                  </Styled.ProductOption>
                  <Styled.ProductOption>
                    <Styled.ProductOptionLabel>
                      User Choice
                    </Styled.ProductOptionLabel>
                    <Styled.ProductOptionContent>
                      <span>Black</span>
                      <span>Red</span>
                      <span>Blue</span>
                    </Styled.ProductOptionContent>
                  </Styled.ProductOption>
                  <Styled.ProductOption>
                    <Styled.ProductOptionLabel>
                      Số lượng
                    </Styled.ProductOptionLabel>
                    <Styled.ProductOptionContent>
                      <Styled.ProductQuantityController>
                        <ProductQuantityController
                          value={quantity}
                          maxValue={product.quantity}
                          onChange={handleChangeQuantity}
                        />
                        <Styled.ProductQuantityInStock>
                          <span>{product.quantity}</span>
                          <span>sản phẩm có sẵn</span>
                        </Styled.ProductQuantityInStock>
                      </Styled.ProductQuantityController>
                    </Styled.ProductOptionContent>
                  </Styled.ProductOption>
                </Styled.ProductOptions>
                <Styled.ProductButtons>
                  <Button className="add-to-cart" onClick={handleAddToCart}>
                    <AddToCartIcon />
                    <span>Thêm vào giỏ hàng</span>
                  </Button>
                  <Button>Mua ngay</Button>
                </Styled.ProductButtons>
              </Styled.ProductMeta>
            </Styled.ProductBriefing>
            <Styled.ProductInfo>
              <Styled.ProductInfoBlock>
                <h3>Mô tả sản phẩm</h3>
                <Styled.ProductInfoContent
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description)
                  }}
                />
              </Styled.ProductInfoBlock>
              {/* <Styled.ProductInfoBlock></Styled.ProductInfoBlock> */}
            </Styled.ProductInfo>
          </>
        )}
      </div>
    </Styled.ProductDetail>
  )
}

const LeftArrowIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 13 20"
      viewBox="0 0 13 20"
      x={0}
      y={0}
      className="icon-arrow-left-bold"
    >
      <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9" />
    </svg>
  )
}

const RightArrowIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 13 21"
      viewBox="0 0 13 21"
      x={0}
      y={0}
      className="icon-arrow-right-bold"
    >
      <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11" />
    </svg>
  )
}

const AddToCartIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x={0}
      y={0}
      className="icon-add-to-cart"
    >
      <g>
        <g>
          <polyline
            fill="none"
            points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
          />
          <circle cx={6} cy="13.5" r={1} stroke="none" />
          <circle cx="11.5" cy="13.5" r={1} stroke="none" />
        </g>
        <line
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit={10}
          x1="7.5"
          x2="10.5"
          y1={7}
          y2={7}
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeMiterlimit={10}
          x1={9}
          x2={9}
          y1="8.5"
          y2="5.5"
        />
      </g>
    </svg>
  )
}
export default ProductDetail
