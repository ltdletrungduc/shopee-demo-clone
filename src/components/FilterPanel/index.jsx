import React from 'react'
import PropTypes from 'prop-types'
import { path } from 'constants/path'

import { NavLink as BaseNavLink, useNavigate } from 'react-router-dom'
import RatingStars from 'components/RatingStars'
import * as Styled from './styled'
import useQuery from 'hooks/useQuery'
import { Controller, useForm } from 'react-hook-form'
import qs from 'query-string'
import { useEffect } from 'react'
import classNames from 'classnames'

function FilterPanel({ categories, filters }) {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
    reset,
    setValue
  } = useForm({
    defaultValues: {
      minPrice: filters.minPrice || '',
      maxPrice: filters.maxPrice || ''
    },
    reValidateMode: 'onSubmit'
  })
  const searchPrice = data => {
    const { minPrice, maxPrice } = data
    if (minPrice !== '' || maxPrice !== '') {
      let _filters = filters
      if (minPrice !== '') {
        _filters = { ..._filters, minPrice }
      } else {
        delete _filters.minPrice
      }
      if (maxPrice !== '') {
        _filters = { ..._filters, maxPrice }
      } else {
        delete _filters.maxPrice
      }
      // ADD QUERY TO URL
      navigate(`${path.home}?${qs.stringify(_filters)}`)
    }
  }
  const validPrice = () => {
    let minPrice = getValues('minPrice')
    let maxPrice = getValues('maxPrice')
    let message = 'Vui lòng điền khoảng giá phù hợp'
    if (minPrice !== '' && maxPrice !== '') {
      return Number(maxPrice) >= Number(minPrice) || message
    }
    return minPrice !== '' || maxPrice !== '' || message
  }
  const clearAllFilter = () => {
    reset()
    navigate({ pathname: path.home })
  }
  const handleRatingFilter = rating => {
    const _filters = {
      ...filters,
      rating
    }
    navigate(`${path.home}?${qs.stringify(_filters)}`)
  }
  // UPDATE VALUE FOR INPUT
  useEffect(() => {
    setValue('minPrice', filters.minPrice || '')
    setValue('maxPrice', filters.maxPrice || '')
  }, [setValue, filters])
  return (
    <Styled.FilterPanel>
      <Styled.CategoryList>
        <Styled.CategoryListHeader to="">
          <AllCateIcon />
          <span>Tất cả danh mục</span>
        </Styled.CategoryListHeader>
        <Styled.CategoryListBody>
          {categories.map(category => {
            return (
              <Styled.CategoryListItem key={category._id}>
                <NavLink
                  to={`${path.home}?category=${category._id}`}
                  // isActive={(match, location) => {
                  //   console.log('MATCH', match)
                  //   console.log('Location', location)
                  // }}
                  activeClassName="activated"
                >
                  <ActiveCategoryIcon />
                  <span>{category.name}</span>
                </NavLink>
              </Styled.CategoryListItem>
            )
          })}
        </Styled.CategoryListBody>
      </Styled.CategoryList>
      <Styled.FilterHeader>
        <FilterIcon />
        <span>Bộ lọc tìm kiếm</span>
      </Styled.FilterHeader>
      <Styled.FilterGroup>
        <Styled.FilterGroupHeader>Khoảng giá</Styled.FilterGroupHeader>
        <Styled.FilterGroupBody>
          <Styled.PriceRangeInputs>
            <Controller
              name="minPrice"
              control={control}
              rules={{
                validate: { validPrice }
              }}
              render={({ field }) => (
                <Styled.PriceRangeInput
                  placeholder="đ TỪ"
                  onChange={value => {
                    clearErrors()
                    field.onChange(value)
                  }}
                  value={getValues('minPrice')}
                />
              )}
            />

            <Styled.PriceRangeLine />
            <Controller
              name="maxPrice"
              control={control}
              rules={{
                validate: { validPrice }
              }}
              render={({ field }) => (
                <Styled.PriceRangeInput
                  placeholder="đ Đến"
                  onChange={value => {
                    clearErrors()
                    field.onChange(value)
                  }}
                  value={getValues('maxPrice')}
                />
              )}
            />
          </Styled.PriceRangeInputs>
          {Object.values(errors).length !== 0 && (
            <Styled.PriceRangeErrorMessage>
              Vui lòng điền khoảng giá phù hợp
            </Styled.PriceRangeErrorMessage>
          )}
          <Styled.FilterGroupButton onClick={handleSubmit(searchPrice)}>
            Áp dụng
          </Styled.FilterGroupButton>
        </Styled.FilterGroupBody>
      </Styled.FilterGroup>
      <Styled.FilterGroup>
        <Styled.FilterGroupHeader>Đánh giá</Styled.FilterGroupHeader>
        <Styled.FilterGroupBody>
          <Styled.RatingInputs>
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <RatingStars
                  starNumb={5 - index}
                  key={index}
                  onClick={() => handleRatingFilter(5 - index)}
                  className={classNames({
                    active: Number(filters.rating) === 5 - index
                  })}
                />
              ))}
          </Styled.RatingInputs>
        </Styled.FilterGroupBody>
      </Styled.FilterGroup>
      <Styled.ClearFilterButton onClick={clearAllFilter}>
        Xoá tất cả
      </Styled.ClearFilterButton>
    </Styled.FilterPanel>
  )
}

const AllCateIcon = () => {
  return (
    <svg viewBox="0 0 12 10" className="all-cate-icon">
      <g fillRule="evenodd" stroke="none" strokeWidth={1}>
        <g transform="translate(-373 -208)">
          <g transform="translate(155 191)">
            <g transform="translate(218 17)">
              <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
              <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
              <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

const FilterIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x={0}
      y={0}
      className="shopee-svg-icon "
    >
      <g>
        <polyline
          fill="none"
          points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
        <polyline
          id="filter__ticked"
          points="9.2 11.3 10.3 12.1 11.8 10.4"
          style={{
            fill: 'none',
            stroke: 'rgb(255, 255, 255)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            strokeWidth: '0.5'
          }}
        />
        <circle cx="10.5" cy="11.2" r="2.5" stroke="none" />
        <use xlinkHref="#filter__ticked" />
      </g>
    </svg>
  )
}

const ActiveCategoryIcon = () => {
  return (
    <svg viewBox="0 0 4 7" className="arrow-right-filled">
      <polygon points="4 3.5 0 0 0 7" />
    </svg>
  )
}

const NavLink = React.forwardRef(
  ({ activeClassName, activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          [props.className, isActive ? activeClassName : null]
            .filter(Boolean)
            .join(' ')
        }
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? activeStyle : null)
        })}
      />
    )
  }
)

FilterPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired
}
export default FilterPanel
