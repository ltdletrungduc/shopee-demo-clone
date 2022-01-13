import React, { useEffect, useState } from 'react'
import usePopover from 'hooks/usePopover'
import { useNavigate } from 'react-router-dom'
import NavBar from 'components/NavBar'
import Popover from 'components/Popover'

import EmptyCart from 'assets/images/empty-cart.png'
import { ReactComponent as SvgIcon } from 'assets/images/icon/svg-shopee.svg'
import { ReactComponent as SearchIcon } from 'assets/images/icon/search.svg'
import { ReactComponent as CartIcon } from 'assets/images/icon/cart.svg'
// import mockMiniProductImg from 'assets/images/shopee-cart-img.jpg'
import * as Styled from './styled'
import useQuery from 'hooks/useQuery'
import { path } from 'constants/path'
import { useSelector } from 'react-redux'
import { formatMoney } from 'utils/helper'

function Header() {
  const { activePopover, showPopover, hidePopover } = usePopover()
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const query = useQuery()
  const purchases = useSelector(state => state.cart.purchases)

  // useEffect(() => {
  //   console.log(purchases)
  // }, [purchases])

  useEffect(() => {
    const { name = '' } = query
    setSearchValue(name)
  }, [query])

  const onChangeSearch = event => {
    setSearchValue(event.target.value)
  }

  const handleSearch = event => {
    event.preventDefault()
    navigate(`${path.home}?name=${searchValue}`)
  }
  return (
    <Styled.Header>
      <div className="container">
        <NavBar />
        <Styled.SearchWrapper>
          <Styled.HeaderIcon to="/">
            <SvgIcon />
          </Styled.HeaderIcon>
          <Styled.SearchForm onSubmit={handleSearch}>
            <Styled.SearchInput
              placeholder="Tên sản phẩm"
              onChange={onChangeSearch}
              value={searchValue}
            />
            <Styled.SearchButton>
              <SearchIcon />
            </Styled.SearchButton>
          </Styled.SearchForm>
          <Styled.Cart
            onMouseEnter={showPopover}
            onMouseLeave={hidePopover}
            onClick={() => navigate(path.cart)}
          >
            <Styled.CartContainer>
              <Styled.CartIcon>
                <CartIcon />
                {purchases.length > 0 && (
                  <Styled.CartNumberBadge>
                    {purchases.length}
                  </Styled.CartNumberBadge>
                )}
              </Styled.CartIcon>
              <Popover active={activePopover}>
                <Styled.CartContent>
                  {purchases.length > 0 ? (
                    <>
                      <Styled.CartTitle>Sản phẩm mới thêm</Styled.CartTitle>
                      {purchases.slice(0, 5).map(purchase => {
                        // console.log(purchase)
                        return (
                          <Styled.MiniProductCart key={purchase._id}>
                            <Styled.MiniProductCartImg
                              src={purchase.product.image}
                            />
                            <Styled.MiniProductCartContent>
                              <Styled.MiniProductCartTitle>
                                {purchase.product.name}
                              </Styled.MiniProductCartTitle>
                              <Styled.MiniProductCartPrice>
                                {formatMoney(purchase.product.price)}
                              </Styled.MiniProductCartPrice>
                            </Styled.MiniProductCartContent>
                          </Styled.MiniProductCart>
                        )
                      })}
                      {/* 
                      <Styled.MiniProductCart>
                        <Styled.MiniProductCartImg src={mockMiniProductImg} />
                        <Styled.MiniProductCartContent>
                          <Styled.MiniProductCartTitle>
                            Bộ Nỉ Nam Thu Đông Trơn Chất Liệu Cao Cấp Bộ Nỉ Nam
                            Thể Thao Dáng Ôm BNI01
                          </Styled.MiniProductCartTitle>
                          <Styled.MiniProductCartPrice>
                            đ 139.000
                          </Styled.MiniProductCartPrice>
                        </Styled.MiniProductCartContent>
                      </Styled.MiniProductCart> */}
                      <Styled.CartFooter>
                        <Styled.MoreProducts>
                          {purchases.length > 5 && (
                            <span>
                              {purchases.length - 5} Thêm hàng vào giỏ
                            </span>
                          )}
                        </Styled.MoreProducts>
                        <Styled.CartButton to={path.cart}>
                          Xem giỏ hàng
                        </Styled.CartButton>
                      </Styled.CartFooter>
                    </>
                  ) : (
                    <Styled.CartTitle>
                      <div className="empty-cart-container">
                        <img
                          src={EmptyCart}
                          alt=""
                          className="empty-cart-img"
                        />
                        <div className="empty-cart-text">Chưa có sản phẩm</div>
                      </div>
                    </Styled.CartTitle>
                  )}
                </Styled.CartContent>
              </Popover>
            </Styled.CartContainer>
          </Styled.Cart>
        </Styled.SearchWrapper>
      </div>
    </Styled.Header>
  )
}

export default Header
