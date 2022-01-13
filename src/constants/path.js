// export const path = {
//   home: '/',
//   login: '/login',
//   register: '/register',
//   user: '/user',
//   get userProfile() {
//     return this.user + '/profile'
//   },
//   get userPurchase() {
//     return this.user + '/purchase'
//   },
//   get userPassword() {
//     return this.user + '/password'
//   },
//   product: '/product',
//   productDetail: '/product/:idProduct',
//   cart: '/cart',
//   notFound: '*'
// }

class Path {
  constructor() {
    this.home = '/'
    this.login = '/login'
    this.register = '/register'
    this.user = '/user'
    this.userProfile = this.user + '/profile'
    this.userPurchase = this.user + '/purchase'
    this.userPassword = this.user + '/password'
    this.product = '/product'
    this.productDetail = '/product/:idProduct'
    this.cart = '/cart'
    this.notFound = '*'
  }
}

export const path = new Path()
