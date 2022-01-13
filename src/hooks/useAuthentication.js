import { useSelector } from 'react-redux'

export const useAuthentication = () => {
  return useSelector(state => {
    return Boolean(state.auth.profile._id)
  })
}
