import styled from 'styled-components'
import { Button } from 'components/Button/styled'
import { StarContainer, StarPercent } from 'components/ProductRating/styled'
export const ProductDetail = styled.div``
export const ProductBriefing = styled.div`
  display: flex;
  background: #ffffff;
`
export const ProductImages = styled.div`
  width: 480px;
  padding: 1.5rem;
`
export const ProductImageActive = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  img {
    max-width: 100%;
    min-width: 100%;
  }
`
export const ProductImagesSlider = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`
export const SliderButton = styled.button`
  position: absolute;
  width: 2rem;
  height: 4rem;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffff;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
`
export const SliderButtonPrev = styled(SliderButton)`
  left: 0.5rem;
  /* left: 0; */
`
export const SliderButtonNext = styled(SliderButton)`
  right: 0.5rem;
  /* right: 0; */
`
export const ProductImage = styled.div`
  padding: 0.5rem;
  height: 92px;
  width: 92px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    border: 2px solid ${({ active }) => (active ? '#ee4d2d' : 'transparent')};
    box-sizing: content-box;
  }
`
export const ProductMeta = styled.div`
  flex: 1;
  padding: 1.5rem;
`
export const ProductName = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`
export const ProductMeta1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const ProductMeta1Item = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    border-right: 0;
  }
`
export const ProductRating = styled(ProductMeta1Item)`
  span {
    color: #ee4d2d;
    border-bottom: 1px solid #ee4d2d;
    font-size: 1.6rem;
    margin-right: 0.5rem;
  }
  ${StarContainer} svg {
    width: 1.6rem;
    height: 1.5rem;
  }
  ${StarPercent} svg {
    * {
      color: #ee4d2d;
      fill: #ee4d2d;
      stroke: #ee4d2d;
    }
  }
`
export const ProductSold = styled(ProductMeta1Item)`
  span:first-child {
    font-size: 1.6rem;
    color: #222;
    margin-right: 5px;
    padding-bottom: 1px;
  }
  span:last-child {
    font-size: 1.4rem;
    color: #767676;
    text-transform: capitalize;
  }
`
export const ProductPrice = styled.div`
  padding: 1.5rem 2rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`
export const ProductPriceOriginal = styled.div`
  font-size: 1.6rem;
  text-decoration: line-through;
  color: #929292;
  margin-right: 10px;
`
export const ProductPriceSale = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: #ee4d2d;
`
export const ProductSalePercent = styled.div`
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
  background: #ee4d2d;
  border-radius: 2px;
  padding: 2px 4px;
  font-weight: 600;
  line-height: 1;
  margin-left: 15px;
  white-space: nowrap;
`
export const ProductOptions = styled.div``
export const ProductOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const ProductOptionLabel = styled.div`
  color: #757575;
  width: 110px;
  text-transform: capitalize;
  flex-shrink: 0;
  align-items: center;
`
export const ProductOptionContent = styled.div``
export const MiniVoucher = styled.div`
  background-color: rgb(255, 238, 232);
  color: #ee4d2d;
  padding: 3px 7px;
  border: 0;
  white-space: nowrap;
`
export const ProductButtons = styled.div`
  display: flex;
  align-items: center;
  ${Button} {
    padding: 0 1.2rem;
    font-size: 1.4rem;
    text-transform: capitalize;
    height: 48px;
    min-width: 180px;
    &.add-to-cart {
      background-color: rgb(255, 238, 232);
      transition: background-color 0.4s;
      color: #ee4d2d;
      border: solid 1px #ee4d2d;
      display: flex;
      margin-right: 1.5rem;
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      svg {
        margin-right: 10px;
        font-size: 2rem;
        color: #ee4d2d;
        stroke: #ee4d2d;
        width: 2rem;
        height: 2rem;
      }
    }
  }
`
export const ProductQuantityController = styled.div`
  display: flex;
  align-items: center;
`
export const ProductQuantityInStock = styled.div`
  color: #757575;
  margin-left: 1.5rem;
  font-size: 1.4rem;
`

// PRODUCT DETAIL
export const ProductInfo = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  overflow: hidden;
  background: #fff;
  margin-top: 1.5rem;
  padding: 1rem;
`
export const ProductInfoBlock = styled.div`
  padding: 1.5rem 1.5rem 0;
  h3 {
    background: rgba(0, 0, 0, 0.02);
    color: rgba(0, 0, 0, 0.87);
    font-size: 1.8rem;
    padding: 1.4rem;
    text-transform: uppercase;
    font-weight: 400;
  }
`
export const ProductInfoContent = styled.div`
  margin: 3rem 1.5rem 1.5rem;
`
