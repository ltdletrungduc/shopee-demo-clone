import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './styled'
import { useNavigate } from 'react-router-dom'
import { usePagination } from '@material-ui/lab'
import classNames from 'classnames'
import qs from 'query-string'
import { path } from 'constants/path'

function Pagination({ pagination, filters }) {
  const navigate = useNavigate()
  const { items } = usePagination({
    count: pagination.page_size || 0,
    page: pagination.page || 1
  })

  const getPrevPage = () => {
    if (pagination.page !== 1) {
      let _filters = { ...filters, page: pagination.page - 1 }
      navigate(`${path.home}?${qs.stringify(_filters)}`)
    }
  }
  const getNextPage = () => {
    if (pagination.page !== pagination.page_size) {
      let _filters = { ...filters, page: pagination.page + 1 }
      navigate(`${path.home}?${qs.stringify(_filters)}`)
    }
  }
  const getSpecificPage = page => {
    const _filters = { ...filters, page }
    navigate(`${path.home}?${qs.stringify(_filters)}`)
  }
  return (
    <Styled.Pagination>
      <Styled.PageController>
        {items.map(({ page, type, selected }, index) => {
          let children = null
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = (
              <Styled.ButtonNoOutLine disabled key={index}>
                ...
              </Styled.ButtonNoOutLine>
            )
          } else if (type === 'previous') {
            children = (
              <Styled.PrevPageButton
                key={index}
                onClick={getPrevPage}
                disabled={pagination.page === 1}
              >
                <ArrowLeftIcon />
              </Styled.PrevPageButton>
            )
          } else if (type === 'next') {
            children = (
              <Styled.NextPageButton
                key={index}
                onClick={getNextPage}
                disabled={pagination.page === pagination.page_size}
              >
                <ArrowRightIcon />
              </Styled.NextPageButton>
            )
          } else if (type === 'page') {
            children = (
              <Styled.ButtonNoOutLine
                key={index}
                className={classNames({ active: selected })}
                onClick={() => getSpecificPage(page)}
              >
                {page}
              </Styled.ButtonNoOutLine>
            )
          }
          return children
        })}
        {/* <Styled.PrevPageButton>
          <ArrowLeftIcon />
        </Styled.PrevPageButton>
        <Styled.ButtonNoOutLine className="active">1</Styled.ButtonNoOutLine>
        <Styled.ButtonNoOutLine>2</Styled.ButtonNoOutLine>
        <Styled.ButtonNoOutLine>3</Styled.ButtonNoOutLine>
        <Styled.ButtonNoOutLine>...</Styled.ButtonNoOutLine>
        <Styled.NextPageButton>
          <ArrowRightIcon />
        </Styled.NextPageButton> */}
      </Styled.PageController>
    </Styled.Pagination>
  )
}

const ArrowLeftIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      x={0}
      y={0}
      className="shopee-svg-icon icon-arrow-left"
    >
      <g>
        <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
      </g>
    </svg>
  )
}
const ArrowRightIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 11 11"
      viewBox="0 0 11 11"
      x={0}
      y={0}
      className="shopee-svg-icon icon-arrow-right"
    >
      <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
    </svg>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object,
  filters: PropTypes.object
}
export default Pagination
