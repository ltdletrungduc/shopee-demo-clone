import { purchaseStatus } from 'constants/status'
import http from 'utils/http'

const URL = 'purchases'

const purchaseApi = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data)
  },
  getProductInCart() {
    return http.get(URL, {
      params: {
        status: purchaseStatus.inCart
      }
    })
  },
  getPurchases(status) {
    return http.get(URL, {
      params: {
        status
      }
    })
  },
  updatePurchase(data) {
    return http.put(`${URL}/update-purchase`, data)
  },
  deletePurchase(data) {
    return http.delete(`${URL}`, data)
  },
  confirmPurchase(data) {
    return http.post(`${URL}/buy-products`, data)
  }
}

export default purchaseApi
