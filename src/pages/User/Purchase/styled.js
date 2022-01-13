import styled from 'styled-components'
import { ButtonLink } from 'components/Button/styled'
import CustomNavLink from 'components/CustomNavLink'

export const Purchase = styled.div``
export const PurchaseTabs = styled.div`
  display: flex;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  background: #fff;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 1.2rem;
`
export const PurchaseTabItem = styled(CustomNavLink)`
  display: block;
  font-size: 1.4rem;
  padding: 1.7rem 0;
  cursor: pointer;
  user-select: none;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  transition: color 0.2s;
  &.actived {
    color: #ee4d2d;
    border-bottom: 2px solid #ee4d2d;
  }
  &:hover {
    color: #ee4d2d;
  }
`

export const PurchaseList = styled.div``
export const PurchaseFilter = styled.div``
export const OrderCard = styled.div`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  background-color: #fff;
  margin-bottom: 1.5rem;
`
export const OrderCardContent = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.2rem 2.4rem;
`
export const OrderCardDetail = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const OrderCardInfo = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  > img {
    width: 8rem;
    height: 8rem;
    border: 1px solid rgb(0 0 0 / 9%);
  }
`
export const OrderCardSplit = styled.div`
  width: 100%;
  height: 0;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.09);
`
export const OrderCardPrice = styled.div`
  text-align: right;
  padding: 24px 24px 12px;
  background: #fffefb;
  span {
    &:nth-child(2) {
      color: #ee4d2d;
      font-size: 3rem;
      margin-left: 1rem;
    }
  }
`
export const OrderContent = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`
export const OrderName = styled.div`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-wrap: break-word;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  line-height: 22px;
  max-height: 48px;
`
export const OrderQuantity = styled.div``
export const OrderPrice = styled.div`
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  font-size: 14px;
  line-height: 16px;
`
export const OriginalPrice = styled.span`
  margin-right: 4px;
  text-decoration-line: line-through;
  color: rgb(0, 0, 0);
  opacity: 0.26;
`
export const SalePrice = styled.span`
  color: rgb(238, 77, 45);
`
export const OrderCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 24px;
  background: #fffefb;
`
export const OrderCardActions = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 1rem;
  }
`
export const RatingStatus = styled.div``
export const PurchaseAgain = styled(ButtonLink)`
  min-width: 150px;
  min-height: 40px;
  padding: 8px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  border-radius: 2px;
  outline: 0px;
`
export const ContactSeller = styled(ButtonLink)`
  min-width: 150px;
  min-height: 40px;
  padding: 8px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  border-radius: 2px;
  outline: 0px;
  color: rgb(85, 85, 85);
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const MoreActions = styled.div``
