import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuthentication } from 'hooks/useAuthentication'
import usePopover from 'hooks/usePopover'
import { path } from 'constants/path'
import { logout } from 'pages/auth/auth.slice'

import Popover from 'components/Popover'

import * as Styled from './styled'

function NavBar() {
  const auth = useAuthentication()
  const profile = useSelector(state => state.auth.profile)
  const dispatch = useDispatch()
  const handleLogout = () => dispatch(logout())
  const { activePopover, showPopover, hidePopover } = usePopover()
  return (
    <Styled.NavBar>
      <Styled.NavLeftMenu>
        {/* <Styled.NavItem>Kênh người bán</Styled.NavItem>
        <Styled.NavItem>Trở thành Người bán Shopee</Styled.NavItem>
        <Styled.NavItem>Tải ứng dụng</Styled.NavItem>
        <Styled.NavItem>Kết nối: A B</Styled.NavItem> */}
      </Styled.NavLeftMenu>
      <Styled.NavRightMenu>
        {/* <Styled.NavItem>Thông báo</Styled.NavItem>
        <Styled.NavItem>Hỗ trợ</Styled.NavItem>
        <Styled.NavItem>Tiếng Việt</Styled.NavItem> */}
        {auth && (
          <Styled.NavItem>
            <Styled.NavUser
              onMouseEnter={showPopover}
              onMouseLeave={hidePopover}
            >
              <Styled.UserInfo>
                <Styled.UserImage src="/logo192.png" />
                <Styled.UserName>
                  {profile.name || profile.email}
                </Styled.UserName>
              </Styled.UserInfo>
              <Popover active={activePopover}>
                <Styled.UserLink to={path.user}>
                  Tài khoản của tôi
                </Styled.UserLink>
                <Styled.UserLink to="#">Đơn mua</Styled.UserLink>
                <Styled.LogoutButton onClick={handleLogout}>
                  Đăng xuất
                </Styled.LogoutButton>
              </Popover>
            </Styled.NavUser>
          </Styled.NavItem>
        )}
        {!auth && (
          <>
            <Styled.NavItem>
              <Styled.NavLink to={path.register}>Đăng ký</Styled.NavLink>
            </Styled.NavItem>
            <Styled.NavItem>
              <Styled.NavLink to={path.login}>Đăng nhập</Styled.NavLink>
            </Styled.NavItem>
          </>
        )}
      </Styled.NavRightMenu>
    </Styled.NavBar>
  )
}

export default NavBar
