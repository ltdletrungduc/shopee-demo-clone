import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Controller, useForm } from 'react-hook-form'
import Button from 'components/Button'
import InputText from 'components/InputText'
import range from 'lodash/range'
import { getDate, getMonth, getYear, isExists } from 'date-fns'

import * as S from './styled'
import { userRules } from 'constants/validateRules'
import ErrorMessage from 'components/ErrorMessage'
import { updateMe } from 'pages/auth/auth.slice'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

function Profile() {
  const profile = useSelector(state => state.auth.profile)
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      name: profile.name || '',
      phone: profile.phone || '',
      address: profile.address || '',
      date: profile.date_of_birth
        ? getDate(new Date(profile.date_of_birth))
        : '',
      month: profile.date_of_birth
        ? getMonth(new Date(profile.date_of_birth))
        : '',
      year: profile.date_of_birth
        ? getYear(new Date(profile.date_of_birth))
        : ''
    }
  })

  const dispatch = useDispatch()

  const updateUser = async data => {
    const body = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      date_of_birth: new Date(data.year, data.month, data.date).toISOString()
    }
    try {
      const res = await dispatch(updateMe(body)).then(unwrapResult)
      toast.success(res.message, {
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

  const validateDate = () =>
    isExists(
      Number(getValues('year')),
      Number(getValues('month')),
      Number(getValues('date'))
    ) || 'Ngày sinh không hợp lệ'

  return (
    <S.Profile>
      <S.ProfileHeader>
        <S.ProfileHeaderTitle>Hồ sơ của tôi</S.ProfileHeaderTitle>
        <S.ProfileHeaderSubtitle>
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </S.ProfileHeaderSubtitle>
      </S.ProfileHeader>
      <S.ProfileInfo>
        <S.ProfileLeft onSubmit={handleSubmit(updateUser)}>
          <S.ProfileField>
            <S.ProfileFieldLabel>Email</S.ProfileFieldLabel>
            <S.ProfileFieldContent>
              <S.ProfileFieldContentText>
                {profile.email}
              </S.ProfileFieldContentText>
            </S.ProfileFieldContent>
          </S.ProfileField>
          <S.ProfileField>
            <S.ProfileFieldLabel>Tên</S.ProfileFieldLabel>
            <S.ProfileFieldContent>
              <Controller
                name="name"
                control={control}
                rules={userRules.name}
                render={({ field }) => (
                  <InputText
                    name="name"
                    type="text"
                    onChange={field.onChange}
                    value={getValues('name')}
                  />
                )}
              />
              <ErrorMessage name="name" errors={errors} />
            </S.ProfileFieldContent>
          </S.ProfileField>
          <S.ProfileField>
            <S.ProfileFieldLabel>Số điện thoại</S.ProfileFieldLabel>
            <S.ProfileFieldContent>
              <Controller
                name="phone"
                control={control}
                rules={userRules.phone}
                render={({ field }) => (
                  <InputText
                    name="phone"
                    type="text"
                    onChange={field.onChange}
                    value={getValues('phone')}
                  />
                )}
              />
              <ErrorMessage name="phone" errors={errors} />
              {/* <S.ProfileFieldContentText>
                *********000
              </S.ProfileFieldContentText>
              <S.ProfileFieldLink>Thay đổi</S.ProfileFieldLink> */}
            </S.ProfileFieldContent>
          </S.ProfileField>
          <S.ProfileField>
            <S.ProfileFieldLabel>Địa chỉ</S.ProfileFieldLabel>
            <S.ProfileFieldContent>
              <Controller
                name="address"
                control={control}
                rules={userRules.address}
                render={({ field }) => (
                  <InputText
                    name="address"
                    type="text"
                    onChange={field.onChange}
                    value={getValues('address')}
                  />
                )}
              />
              <ErrorMessage name="address" errors={errors} />
            </S.ProfileFieldContent>
          </S.ProfileField>
          {/* <S.ProfileField>
            <S.ProfileFieldLabel>Giới tính</S.ProfileFieldLabel>
            <S.ProfileFieldContent>RADIO INPUT</S.ProfileFieldContent>
          </S.ProfileField> */}
          <S.ProfileField>
            <S.ProfileFieldLabel>Ngày sinh</S.ProfileFieldLabel>
            <S.ProfileFieldContent>
              <S.BirthDaySelect>
                <Controller
                  name="date"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.BirthDaySelectDay
                      title="Ngày"
                      options={range(1, 32).map(item => ({
                        name: item,
                        value: item
                      }))}
                      onChange={field.onChange}
                      value={getValues('date')}
                    />
                  )}
                />
                <Controller
                  name="month"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.BirthDaySelectMonth
                      title="Tháng"
                      options={range(0, 12).map(item => ({
                        name: item + 1,
                        value: item
                      }))}
                      onChange={field.onChange}
                      value={getValues('month')}
                    />
                  )}
                />
                <Controller
                  name="year"
                  control={control}
                  rules={{
                    validate: {
                      date: validateDate
                    }
                  }}
                  render={({ field }) => (
                    <S.BirthDaySelectYear
                      title="Năm"
                      options={range(1900, 2021).map(item => ({
                        name: item,
                        value: item
                      }))}
                      onChange={field.onChange}
                      value={getValues('year')}
                    />
                  )}
                />
              </S.BirthDaySelect>
              <S.ErrorMessage>
                <ErrorMessage name="date" errors={errors} />
              </S.ErrorMessage>
            </S.ProfileFieldContent>
          </S.ProfileField>
          <S.ProfileField>
            <S.ProfileFieldLabel />
            <S.ProfileFieldContent>
              <S.ProfileSubmit type="submit">Lưu</S.ProfileSubmit>
            </S.ProfileFieldContent>
          </S.ProfileField>
        </S.ProfileLeft>
        <S.ProfileRight>
          <S.AvatarUploader>
            <S.Avatar>
              <img
                src="https://cf.shopee.vn/file/551f3bf341ce87476988c2864a3f16f3"
                alt=""
              />
            </S.Avatar>
            <S.InputFile type="file" accept=".jpg, .jpeg, .png" />
            <S.ButtonUpload light>Chọn ảnh</S.ButtonUpload>
            <S.AvatarUploaderTextContainer>
              <div>Dụng lượng file tối đa 1 MB</div>
              <div>Định dạng:.JPEG, .PNG</div>
            </S.AvatarUploaderTextContainer>
          </S.AvatarUploader>
        </S.ProfileRight>
      </S.ProfileInfo>
    </S.Profile>
  )
}

export default Profile
