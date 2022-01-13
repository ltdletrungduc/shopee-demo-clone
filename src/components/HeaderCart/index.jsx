import NavBar from 'components/NavBar'
import React, { useState } from 'react'
import * as Styled from './styled'

import { ReactComponent as SvgIcon } from 'assets/images/icon/svg-shopee.svg'
import { ReactComponent as SearchIcon } from 'assets/images/icon/search.svg'
import { path } from 'constants/path'
import { useNavigate } from 'react-router-dom'

function HeaderCart() {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const search = event => {
    event.preventDefault()
    const _value = searchValue.trim()
    if (_value !== '') {
      navigate(`${path.home}?name=${searchValue}`)
    }
  }

  const handleSearchChange = event => setSearchValue(event.target.value)
  return (
    <Styled.Header>
      <Styled.Navbar>
        <div className="container">
          <NavBar />
        </div>
      </Styled.Navbar>
      <div className="container">
        <Styled.SearchWrapper>
          <Styled.HeaderIcon to={path.home}>
            <SvgIcon />
            <Styled.HeaderTitle>Giỏ hàng</Styled.HeaderTitle>
          </Styled.HeaderIcon>
          <Styled.SearchForm onSubmit={search}>
            <Styled.SearchInput
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <Styled.SearchButton>
              <SearchIcon />
            </Styled.SearchButton>
          </Styled.SearchForm>
        </Styled.SearchWrapper>
      </div>
    </Styled.Header>
  )
}

export default HeaderCart
