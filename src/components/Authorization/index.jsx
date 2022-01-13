import { resetCode } from 'app.slice'
import { path } from 'constants/path'
import { useAuthentication } from 'hooks/useAuthentication'
import { unauthorize } from 'pages/auth/auth.slice'
import { getProductInCart } from 'pages/Cart/cart.slice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useAuthentication()

  useEffect(() => {
    // console.log(status)
    if (status === 401) {
      dispatch(unauthorize())
      navigate(path.login)
      dispatch(resetCode())
    }
  }, [dispatch, status, navigate])

  useEffect(() => {
    // console.log('Authorization status:', auth)
    if (auth) {
      dispatch(getProductInCart())
    }
  }, [auth, dispatch])
  return null
}
