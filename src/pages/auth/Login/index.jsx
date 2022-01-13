import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { path } from 'constants/path'
import { emailRules } from 'constants/validateRules'
import { useDispatch } from 'react-redux'
import { login } from '../auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'

import InputPassword from 'components/InputPassword'
import InputText from 'components/InputText'
import Button from 'components/Button'
import ErrorMessage from 'components/ErrorMessage'

import * as Styled from '../Register/styled'
import { Helmet } from 'react-helmet'

function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const userDispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const response = await userDispatch(login(body))
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
  return (
    <Styled.Register>
      <Helmet>
        <title>Đăng nhập tài khoản</title>
      </Helmet>
      <Styled.Container className="container">
        <Styled.Banner />
        <Styled.FormWrapper>
          <Styled.FormTitle>Đăng nhập</Styled.FormTitle>
          <Styled.Form onSubmit={handleSubmit(handleLogin)} noValidate>
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
            <Styled.FormButton>
              <Button type="submit">Đăng nhập</Button>
            </Styled.FormButton>
          </Styled.Form>
          <Styled.FormFooter>
            <span>Bạn mới biết đến Shopee?</span>
            <Link to={path.register} className="link">
              Đăng ký
            </Link>
          </Styled.FormFooter>
        </Styled.FormWrapper>
      </Styled.Container>
    </Styled.Register>
  )
}

export default Login
