import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import purchaseApi from 'api/purchase.api'
import { logout } from 'pages/auth/auth.slice'
import { payloadCreator } from 'utils/helper'

export const getProductInCart = createAsyncThunk(
  'cart/getProductInCart',
  payloadCreator(purchaseApi.getProductInCart)
)

export const updatePurchase = createAsyncThunk(
  'cart/updatePurchase',
  payloadCreator(purchaseApi.updatePurchase)
)

export const deletePurchases = createAsyncThunk(
  'cart/deletePurchases',
  payloadCreator(purchaseApi.deletePurchase)
)

export const confirmPurchases = createAsyncThunk(
  'cart/confirmPurchases',
  payloadCreator(purchaseApi.confirmPurchase)
)

const cart = createSlice({
  name: 'cart',
  initialState: {
    purchases: []
  },
  extraReducers: {
    [getProductInCart.fulfilled]: (state, action) => {
      state.purchases = action.payload.data
    },
    [logout.fulfilled]: state => {
      state.purchases = []
    }
  }
})

const cartReducer = cart.reducer
export default cartReducer
