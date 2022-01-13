import { unwrapResult } from '@reduxjs/toolkit'
import ErrorMessage from 'components/ErrorMessage'
import InputPassword from 'components/InputPassword'
import { emailRules } from 'constants/validateRules'
import { updateMe } from 'pages/auth/auth.slice'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  Profile,
  ProfileHeader,
  ProfileHeaderSubtitle,
  ProfileHeaderTitle
} from '../Profile/styled'
import * as S from './styled'

function Password() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    reset
  } = useForm({
    defaultValues: {
      password: '',
      new_password: '',
      confirm_new_password: ''
    }
  })

  const dispatch = useDispatch()

  const updatePassword = async data => {
    const body = { password: data.password, new_password: data.new_password }
    try {
      await dispatch(updateMe(body)).then(unwrapResult)
      reset()
      toast.success('Đổi mật khẩu thành công', {
        position: 'top-center',
        autoClose: 3000
      })
    } catch (error) {
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }
  return (
    <Profile>
      <ProfileHeader>
        <ProfileHeaderTitle>Đổi mật khẩu</ProfileHeaderTitle>
        <ProfileHeaderSubtitle>
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </ProfileHeaderSubtitle>
      </ProfileHeader>
      <S.PasswordContent onSubmit={handleSubmit(updatePassword)}>
        <S.PasswordField>
          <S.PasswordFieldLabel>Mật khẩu hiện tại</S.PasswordFieldLabel>
          <S.PasswordFieldContent>
            <Controller
              name="password"
              control={control}
              rules={emailRules.password}
              render={({ field }) => (
                <InputPassword
                  name="password"
                  onChange={field.onChange}
                  value={getValues('password')}
                />
              )}
            />
            <ErrorMessage errors={errors} name="password" />
          </S.PasswordFieldContent>
          <S.ForgetPassword>
            Quên mật khẩu? (Not support yet ^^)
          </S.ForgetPassword>
        </S.PasswordField>
        <S.PasswordField>
          <S.PasswordFieldLabel>Mật Khẩu Mới</S.PasswordFieldLabel>
          <S.PasswordFieldContent>
            <Controller
              name="new_password"
              control={control}
              rules={emailRules.password}
              render={({ field }) => (
                <InputPassword
                  name="new_password"
                  onChange={field.onChange}
                  value={getValues('new_password')}
                />
              )}
            />
            <ErrorMessage errors={errors} name="new_password" />
          </S.PasswordFieldContent>
        </S.PasswordField>
        <S.PasswordField>
          <S.PasswordFieldLabel>Xác Nhận Mật Khẩu</S.PasswordFieldLabel>
          <S.PasswordFieldContent>
            <Controller
              name="confirm_new_password"
              control={control}
              rules={{
                ...emailRules.password,
                validate: {
                  samePassword: v =>
                    v === getValues('new_password') ||
                    'Mật khẩu nhập lại không khớp'
                }
              }}
              render={({ field }) => (
                <InputPassword
                  name="confirm_new_password"
                  onChange={field.onChange}
                  value={getValues('confirm_new_password')}
                />
              )}
            />
            <ErrorMessage errors={errors} name="confirm_new_password" />
          </S.PasswordFieldContent>
        </S.PasswordField>
        <S.PasswordField>
          <S.PasswordFieldLabel></S.PasswordFieldLabel>
          <S.PasswordFieldContent>
            <S.PasswordSubmit type="submit">Xác nhận</S.PasswordSubmit>
          </S.PasswordFieldContent>
        </S.PasswordField>
      </S.PasswordContent>
    </Profile>
  )
}

export default Password
