import { createNextState, unwrapResult } from '@reduxjs/toolkit'
import CustomCheckbox from 'components/CustomCheckbox'
import ProductQuantityController from 'components/ProductQuantityController'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatMoney } from 'utils/helper'
import {
  confirmPurchases,
  deletePurchases,
  getProductInCart,
  updatePurchase
} from './cart.slice'
import * as Styled from './styled'
import keyBy from 'lodash/keyBy'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet'

function Cart() {
  const purchases = useSelector(state => state.cart.purchases)
  const [localPurchases, setLocalPurchases] = useState(() =>
    createNextState(purchases, draft => {
      draft.forEach(purchase => {
        purchase.disabled = false
        purchase.checked = false
      })
    })
  )
  const dispatch = useDispatch()
  const isCheckedAll = localPurchases.every(purchase => purchase.checked)
  const checkedPurchases = localPurchases.filter(purchase => purchase.checked)
  const totalCheckedPurchases = checkedPurchases.length
  const totalCheckedPurchasesPrice = checkedPurchases.reduce(
    (result, current) => {
      return result + current.product.price * current.buy_count
    },
    0
  )
  const totalCheckedPurchasesSavingPrice = checkedPurchases.reduce(
    (result, current) => {
      return (
        result +
        (current.product.price_before_discount - current.product.price) *
          current.buy_count
      )
    },
    0
  )
  useEffect(() => {
    setLocalPurchases(localPurchases => {
      const localPurchasesObject = keyBy(localPurchases, '_id ')
      return createNextState(purchases, draft => {
        draft.forEach(purchase => {
          purchase.disabled = false
          purchase.checked = Boolean(
            localPurchasesObject[purchase._id]?.checked
          )
        })
      })
    })
  }, [purchases])

  const handleInputQuantity = indexPurchase => value => {
    const newLocalPurchases = createNextState(localPurchases, draft => {
      draft[indexPurchase].buy_count = value
    })
    setLocalPurchases(newLocalPurchases)
  }

  const handleBlurQuantity = indexPurchase => async value => {
    const purchase = localPurchases[indexPurchase]
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = true
      })
    )
    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    await dispatch(getProductInCart()).then(unwrapResult)
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = false
      })
    )
  }

  const handleIncreaseAndDecrease = indexPurchase => async value => {
    const purchase = localPurchases[indexPurchase]
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = true
        draft[indexPurchase].buy_count = value
      })
    )
    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    await dispatch(getProductInCart()).then(unwrapResult)
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = false
      })
    )
  }

  const handleCheck = indexPurchase => value => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].checked = value
      })
    )
  }

  const handleCheckAll = () => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft.forEach(purchase => {
          purchase.checked = !isCheckedAll
        })
      })
    )
  }

  const handleRemove = indexPurchase => async () => {
    const purchase_id = localPurchases[indexPurchase]._id
    await dispatch(deletePurchases([purchase_id])).then(unwrapResult)
    await dispatch(getProductInCart()).then(unwrapResult)
    toast.success('Xo?? s???n ph???m th??nh c??ng', {
      position: 'top-center',
      autoClose: 3000
    })
  }

  const handleRemoveChecked = async () => {
    const purchase_ids = checkedPurchases.map(purchase => purchase._id)
    await dispatch(deletePurchases(purchase_ids)).then(unwrapResult)
    await dispatch(getProductInCart()).then(unwrapResult)
    toast.success('Xo?? s???n ph???m th??nh c??ng', {
      position: 'top-center',
      autoClose: 3000
    })
  }

  const handleConfirmPurchases = async () => {
    if (checkedPurchases.length > 0) {
      const body = checkedPurchases.map(purchase => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count
      }))
      await dispatch(confirmPurchases(body)).then(unwrapResult)
      await dispatch(getProductInCart()).then(unwrapResult)
      toast.success('?????t ????n h??ng th??nh c??ng', {
        position: 'top-center',
        autoClose: 3000
      })
    }
  }
  return (
    <Styled.Cart>
      <Helmet>
        <title>Gi??? h??ng</title>
      </Helmet>
      <div className="container">
        <div>
          <Styled.ProductHeader>
            <Styled.ProductHeaderCheckbox>
              <CustomCheckbox
                onChange={handleCheckAll}
                checked={isCheckedAll}
              />
            </Styled.ProductHeaderCheckbox>
            <Styled.ProductHeaderName>S???n ph???m</Styled.ProductHeaderName>
            <Styled.ProductHeaderUnitPrice>
              ????n gi??
            </Styled.ProductHeaderUnitPrice>
            <Styled.ProductHeaderQuantity>
              S??? l?????ng
            </Styled.ProductHeaderQuantity>
            <Styled.ProductHeaderTotalPrice>
              S??? ti???n
            </Styled.ProductHeaderTotalPrice>
            <Styled.ProductHeaderAction>Thao t??c</Styled.ProductHeaderAction>
          </Styled.ProductHeader>
          <Styled.ProductSection>
            {localPurchases.map((purchase, index) => (
              <Styled.CartItem key={purchase._id}>
                <Styled.CartItemCheckbox>
                  <CustomCheckbox
                    checked={purchase.checked}
                    onChange={handleCheck(index)}
                  />
                </Styled.CartItemCheckbox>
                <Styled.CartItemOverview>
                  <Styled.CartItemOverviewImage to="">
                    <img src={purchase.product.image} alt="" />
                  </Styled.CartItemOverviewImage>
                  <Styled.CartItemOverviewNameWrapper>
                    <Styled.CartItemOverviewName to="">
                      {purchase.product.name}
                    </Styled.CartItemOverviewName>
                  </Styled.CartItemOverviewNameWrapper>
                </Styled.CartItemOverview>
                <Styled.CartItemUnitPrice>
                  <span>
                    {formatMoney(purchase.product.price_before_discount)}
                  </span>
                  <span>{formatMoney(purchase.product.price)}</span>
                </Styled.CartItemUnitPrice>
                <Styled.CartItemQuantity>
                  <ProductQuantityController
                    maxValue={purchase.product.quantity}
                    value={purchase.buy_count}
                    disabled={purchase.disabled}
                    onInput={handleInputQuantity(index)}
                    onBlur={handleBlurQuantity(index)}
                    onIncrease={handleIncreaseAndDecrease(index)}
                    onDecrease={handleIncreaseAndDecrease(index)}
                  />
                </Styled.CartItemQuantity>
                <Styled.CartItemTotalPrice>
                  <span>
                    {formatMoney(purchase.product.price * purchase.buy_count)}
                  </span>
                </Styled.CartItemTotalPrice>
                <Styled.CartItemAction>
                  <Styled.CartItemActionButton onClick={handleRemove(index)}>
                    Xo??
                  </Styled.CartItemActionButton>
                </Styled.CartItemAction>
              </Styled.CartItem>
            ))}
          </Styled.ProductSection>
        </div>
        <Styled.CartFooter>
          <Styled.CartFooterCheckbox>
            <CustomCheckbox onChange={handleCheckAll} checked={isCheckedAll} />
          </Styled.CartFooterCheckbox>
          <Styled.CartFooterButton onClick={handleCheckAll}>
            Ch???n t???t c??? ({purchases.length})
          </Styled.CartFooterButton>
          <Styled.CartFooterButton onClick={handleRemoveChecked}>
            Xo??
          </Styled.CartFooterButton>
          <Styled.CartFooterSpaceBetween />
          <Styled.CartFooterPrice>
            <Styled.CartFooterPriceTop>
              <div>T???ng thanh to??n ({totalCheckedPurchases} s???n ph???m): </div>
              <div>{formatMoney(totalCheckedPurchasesPrice)}</div>
            </Styled.CartFooterPriceTop>
            <Styled.CartFooterPriceBot>
              <div>Ti???t ki???m</div>
              <div>{formatMoney(totalCheckedPurchasesSavingPrice)}</div>
            </Styled.CartFooterPriceBot>
          </Styled.CartFooterPrice>
          <Styled.CartFooterCheckout onClick={handleConfirmPurchases}>
            Mua h??ng
          </Styled.CartFooterCheckout>
        </Styled.CartFooter>
      </div>
    </Styled.Cart>
  )
}

export default Cart
