import React from 'react'
import mockProductImage from 'assets/images/Peak.jpg'

import * as Styled from './styled'
import RatingStars from 'components/RatingStars'
import ProductRating from 'components/ProductRating'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { path } from 'constants/path'
import { generateNameId } from 'utils/helper'

function MiniProduct({ product }) {
  // RANDOM RATE FOR TESTING
  // let randomStar = Math.random() * 5

  return (
    <Styled.MiniProduct>
      <Link to={path.product + `/${generateNameId(product)}`}>
        <Styled.MiniProductContainer>
          <Styled.MiniProductImage src={product.image} />
          <Styled.MinProductInfo>
            <Styled.MiniProductName>{product.name}</Styled.MiniProductName>
            <Styled.MiniProductPrice>
              <Styled.OriginalPrice>
                <span>đ</span>
                <span>{product.price_before_discount}</span>
              </Styled.OriginalPrice>
              <Styled.SalePrice>
                <span>đ</span>
                <span>{product.price}</span>
              </Styled.SalePrice>
            </Styled.MiniProductPrice>
            <Styled.MiniProductMetadata>
              <Styled.LikeButton>
                <LikeIcon />
              </Styled.LikeButton>
              <Styled.Rating>
                <ProductRating rating={product.rating} />
              </Styled.Rating>
              <Styled.SoldNumber>
                <span>{product.sold}</span>
                <span>Đã bán</span>
              </Styled.SoldNumber>
            </Styled.MiniProductMetadata>
            <Styled.SellerLocation>TP. Hồ Chí Minh</Styled.SellerLocation>
          </Styled.MinProductInfo>
        </Styled.MiniProductContainer>
      </Link>
    </Styled.MiniProduct>
  )
}
const LikeIcon = () => {
  return (
    <svg height={16} viewBox="0 0 16 16" width={16} version="1.1">
      <path
        d="m7.251221 4.2145388c-.549143-.4552525-1.2488781-.7145388-1.951221-.7145388-1.5719593 0-2.8 1.2269253-2.8 2.7970027 0 .5878515.158291 1.1598348.483492 1.7618948.6414654 1.1875754 1.5644044 2.1358244 4.4829309 4.7799304l.5348542.4864596.5326254-.4807607c2.9306205-2.660747 3.8471674-3.6039919 4.486777-4.7931984.3223805-.5993922.4793205-1.1689848.4793205-1.7543257 0-1.5700774-1.2280407-2.7970027-2.8-2.7970027-.7029148 0-1.4032175.2597087-1.9497845.7133288l-.0367779.0309601c-.1203966.1029087-.2318185.2143106-.3329071.3329122l-.3805305.4464557-.3805305-.4464557c-.1010886-.1186016-.2125105-.2300035-.3301434-.3305672z"
        fill="none"
        stroke="#000"
        strokeOpacity=".54"
      />
    </svg>
  )
}

MiniProduct.propTypes = {
  product: PropTypes.object
}
export default MiniProduct
