import styled from 'styled-components'
import { RatingStars, StarContainer } from 'components/RatingStars/styled'

export const MiniProduct = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 5px;
  margin: 5px 0;
`
export const MiniProductContainer = styled.div`
  color: rgba(0, 0, 0, 0.8);
  background: #fff;
  box-shadow: 0 0.1rem 0.25rem 0 rgb(0 0 0 /10%);
  border-radius: 0.25rem;
  transition: all 0.1s ease;
  &:hover {
    box-shadow: 0 0.1rem 2rem 0 rgb(0 0 0/ 5%);
    transform: translateY(-0.0625rem);
  }
`
export const MiniProductImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-image: url(${props => props.src});
  background-size: cover;
`
export const MinProductInfo = styled.div`
  padding: 0.5rem;
`
export const MiniProductName = styled.div`
  display: inline-block;
  display: -webkit-box;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
`
export const MiniProductPrice = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
`
export const OriginalPrice = styled.div`
  flex-shrink: 1;
  max-width: 45%;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: line-through;
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 5px;
`
export const SalePrice = styled.div`
  flex-grow: 1;
  color: #ee4d2d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    color: #ee4d2d;
    &:first-child {
      font-size: 1.2rem;
    }
    &:last-child {
      font-size: 1.6rem;
    }
  }
`
export const MiniProductMetadata = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`
export const LikeButton = styled.div`
  display: flex;
  align-items: center;
`
export const Rating = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: auto;
  ${RatingStars} {
    margin-top: 0;
  }
  ${StarContainer} {
    height: 100%;
    padding: 0;
    svg {
      margin-right: 0;
      width: 1rem;
      height: 1rem;
    }
  }
`
export const SoldNumber = styled.div`
  color: rgba(0, 0, 0, 0.87);
  margin-left: 0.5rem;
  font-size: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  span:first-child {
    margin-right: 3px;
  }
`
export const SellerLocation = styled.div`
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: 1.2rem;
  line-height: 1.4rem;
  min-height: 1.6em;
  text-align: right;
  font-weight: 200;
`
