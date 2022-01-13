import { unwrapResult } from '@reduxjs/toolkit'
import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'
import InputPassword from 'components/InputPassword'
import InputText from 'components/InputText'
import { path } from 'constants/path'
import { emailRules } from 'constants/validateRules'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../auth.slice'
import * as Styled from './styled'

function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })

  const userDispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const response = await userDispatch(register(body))
      unwrapResult(response)
      navigate(path.home)
    } catch (error) {
      if (error.status === 422) {
        for (let key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }

  // useEffect(() => {
  //   http.get('products').then(response => {
  //     console.log('PRODUCTS', response)
  //   })
  // }, [])

  return (
    <Styled.Register>
      <Helmet>
        <title>Đăng kí tài khoản</title>
      </Helmet>
      <Styled.Container className="container">
        <Styled.Banner />
        <Styled.FormWrapper>
          <Styled.FormTitle>Đăng ký</Styled.FormTitle>
          <Styled.Form onSubmit={handleSubmit(handleRegister)} noValidate>
            <Styled.FormControl>
              <Controller
                name="email"
                control={control}
                rules={emailRules.email}
                render={({ field }) => (
                  <InputText
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={field.onChange}
                    value={getValues('email')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="email" />
            </Styled.FormControl>
            <Styled.FormControl>
              <Controller
                name="password"
                control={control}
                rules={emailRules.password}
                render={({ field }) => (
                  <InputPassword
                    name="password"
                    placeholder="Mật khẩu"
                    onChange={field.onChange}
                    value={getValues('password')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="password" />
            </Styled.FormControl>
            <Styled.FormControl>
              <Controller
                name="confirmedPassword"
                control={control}
                rules={{
                  ...emailRules.confirmedPassword,
                  validate: {
                    samePassword: value =>
                      value === getValues('password') || 'Mật khẩu không khớp'
                  }
                }}
                render={({ field }) => (
                  <InputPassword
                    name="confirmedPassword"
                    placeholder="Nhập lại mật khẩu"
                    onChange={field.onChange}
                    value={getValues('confirmedPassword')}
                  />
                )}
              />
              <ErrorMessage errors={errors} name="confirmedPassword" />
            </Styled.FormControl>
            <Styled.FormButton>
              <Button type="submit">Đăng ký</Button>
            </Styled.FormButton>
          </Styled.Form>
          <Styled.FormFooter>
            <span>Bạn đã có tài khoản?</span>
            <Link to={path.login} className="link">
              Đăng nhập
            </Link>
          </Styled.FormFooter>
        </Styled.FormWrapper>
      </Styled.Container>
    </Styled.Register>
  )
}

export default Register
