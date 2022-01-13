import styled from 'styled-components'
import Button from 'components/Button'

export const PasswordContent = styled.form`
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PasswordField = styled.div`
  width: 80rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`
export const PasswordFieldLabel = styled.div`
  text-align: right;
  width: 20%;
  color: rgb(117, 117, 117);
  text-transform: capitalize;
`
export const PasswordFieldContent = styled.div`
  width: 50%;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`
export const ForgetPassword = styled.div``
export const PasswordSubmit = styled(Button)`
  height: 4rem;
  padding: 0 2rem;
  min-width: 7rem;
  max-width: 22rem;
`
