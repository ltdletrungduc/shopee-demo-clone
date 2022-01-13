import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Redirect from 'components/Redirect'
import { path } from 'constants/path'
import {
  Home,
  Login,
  Register,
  NotFound,
  User,
  ProductDetail,
  Cart
} from 'pages'
import AuthLayout from 'layouts/AuthLayout'
import MainLayout from 'layouts/MainLayout'
import UnauthenticatedGuard from 'guards/UnauthenticatedGuard'
import AuthenticatedGuard from 'guards/AuthenticatedGuard'
// import ProductDetail from 'pages/ProductDetail'
import CartLayout from 'layouts/CartLayout'
import Profile from 'pages/User/Profile'
import Password from 'pages/User/Password'
import Purchase from 'pages/User/Purchase'
import FallbackComponent from 'components/FallbackComponent'
import ErrorBoundary from 'components/ErrorBoundary'

const HomeLazy = lazy(() => import('pages/Home'))
const ProductDetailLazy = lazy(() => import('pages/ProductDetail'))
// const HomeLazy = lazy(() => import('pages/Home'))
function MainRoutes() {
  return (
    <Routes>
      <Route
        path={path.home}
        element={
          <MainLayout>
            <Suspense fallback={<FallbackComponent />}>
              <ErrorBoundary>
                <HomeLazy />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        }
      ></Route>
      <Route
        path={path.productDetail}
        element={
          <MainLayout>
            <Suspense fallback={<FallbackComponent />}>
              <ErrorBoundary>
                <ProductDetailLazy />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        }
      ></Route>
      <Route
        path={path.login}
        element={
          <UnauthenticatedGuard>
            <AuthLayout title="Đăng nhập">
              <ErrorBoundary>
                <Login />
              </ErrorBoundary>
            </AuthLayout>
          </UnauthenticatedGuard>
        }
      ></Route>
      <Route
        path={path.register}
        element={
          <UnauthenticatedGuard>
            <AuthLayout title="Đăng kí">
              <ErrorBoundary>
                <Register />
              </ErrorBoundary>
            </AuthLayout>
          </UnauthenticatedGuard>
        }
      ></Route>
      <Route
        path={path.user}
        element={
          <AuthenticatedGuard>
            <MainLayout>
              <ErrorBoundary>
                <User />
              </ErrorBoundary>
            </MainLayout>
          </AuthenticatedGuard>
        }
      >
        <Route index element={<Redirect to={path.userProfile} />} />
        <Route path="profile" element={<Profile />} />
        <Route path="password" element={<Password />} />
        <Route path="purchase" element={<Purchase />} />
      </Route>
      <Route
        path={path.cart}
        element={
          <AuthenticatedGuard>
            <CartLayout>
              <ErrorBoundary>
                {' '}
                <Cart />
              </ErrorBoundary>
            </CartLayout>
          </AuthenticatedGuard>
        }
      ></Route>
      <Route path={path.notFound} element={<NotFound />}></Route>
    </Routes>
  )
}

export default MainRoutes
