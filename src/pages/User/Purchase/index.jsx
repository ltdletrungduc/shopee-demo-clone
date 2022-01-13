import React, { useState, useEffect, useMemo } from 'react'
import { formatMoney, generateNameId } from 'utils/helper'
import useQuery from 'hooks/useQuery'
import * as S from './styled'
import { useDispatch } from 'react-redux'
import { purchaseStatus } from 'constants/status'
import { getPurchases } from '../user.slice'
import { unwrapResult } from '@reduxjs/toolkit'
import { path } from 'constants/path'
import qs from 'query-string'
function Purchase() {
  const [purchases, setPurchases] = useState([])
  const dispatch = useDispatch()
  const query = useQuery()
  const status = useMemo(() => query.status || purchaseStatus.all, [query])

  useEffect(() => {
    dispatch(getPurchases(status))
      .then(unwrapResult)
      .then(res => {
        setPurchases(res.data)
      })
  }, [dispatch, status])

  return (
    <S.Purchase>
      <S.PurchaseTabs>
        <S.PurchaseTabItem activeClassName="actived" to={path.userPurchase}>
          Tất cả
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          activeClassName="actived"
          to={{
            pathname: path.userPurchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForConfirmation
            })}`
          }}
        >
          Chờ xác nhận
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          activeClassName="actived"
          to={{
            pathname: path.userPurchase,
            search: `?${qs.stringify({
              status: purchaseStatus.waitForPickup
            })}`
          }}
        >
          Chờ lấy hàng
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          activeClassName="actived"
          to={{
            pathname: path.userPurchase,
            search: `?${qs.stringify({
              status: purchaseStatus.inProgress
            })}`
          }}
        >
          Đang giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          activeClassName="actived"
          to={{
            pathname: path.userPurchase,
            search: `?${qs.stringify({
              status: purchaseStatus.delivered
            })}`
          }}
        >
          Đã giao
        </S.PurchaseTabItem>
        <S.PurchaseTabItem
          activeClassName="actived"
          to={{
            pathname: path.userPurchase,
            search: `?${qs.stringify({
              status: purchaseStatus.cancelled
            })}`
          }}
        >
          Đã huỷ
        </S.PurchaseTabItem>
      </S.PurchaseTabs>
      <S.PurchaseList>
        <S.PurchaseFilter></S.PurchaseFilter>
        {purchases.map(purchase => (
          <S.OrderCard key={purchase._id}>
            <S.OrderCardContent>
              <S.OrderCardDetail>
                <S.OrderCardInfo>
                  <img src={purchase.product.image} alt="" />
                  <S.OrderContent>
                    <S.OrderName>{purchase.product.name}</S.OrderName>
                    <S.OrderQuantity>x {purchase.buy_count}</S.OrderQuantity>
                  </S.OrderContent>
                </S.OrderCardInfo>
                <S.OrderPrice>
                  <S.OriginalPrice>
                    {formatMoney(purchase.product.price_before_discount)}
                  </S.OriginalPrice>
                  <S.SalePrice>
                    {formatMoney(purchase.product.price)}
                  </S.SalePrice>
                </S.OrderPrice>
              </S.OrderCardDetail>
            </S.OrderCardContent>
            <S.OrderCardSplit />
            <S.OrderCardPrice>
              <span>Tổng số tiền:</span>
              <span>
                {formatMoney(purchase.product.price * purchase.buy_count)}
              </span>
            </S.OrderCardPrice>
            <S.OrderCardFooter>
              <S.RatingStatus></S.RatingStatus>
              <S.OrderCardActions>
                <S.PurchaseAgain
                  to={`${path.product}/${generateNameId(purchase.product)}`}
                >
                  Mua lại
                </S.PurchaseAgain>
                <S.ContactSeller to="#">Liên hệ người bán</S.ContactSeller>
                {/* <S.MoreActions>Thêm</S.MoreActions> */}
              </S.OrderCardActions>
            </S.OrderCardFooter>
          </S.OrderCard>
        ))}
      </S.PurchaseList>
    </S.Purchase>
  )
}

export default Purchase
