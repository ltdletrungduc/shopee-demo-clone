import { path } from 'constants/path'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'
import * as Styled from './styled'

function User() {
  return (
    <Styled.UserPage>
      <Helmet>
        <title>Shopee Việt Nam - Demo clone</title>
      </Helmet>
      <Styled.Container className="container">
        <Styled.Sidebar>
          <Styled.Brief>
            <Styled.BriefAvatar to={path.userProfile}>
              <img
                src="https://cf.shopee.vn/file/551f3bf341ce87476988c2864a3f16f3_tn"
                alt=""
              />
            </Styled.BriefAvatar>
            <Styled.BriefRight>
              <Styled.BriefUsername>username</Styled.BriefUsername>
              <Styled.BriefEdit to={path.userProfile}>
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: 4 }}
                >
                  <path
                    d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                    fill="#9B9B9B"
                    fillRule="evenodd"
                  />
                </svg>
                <span>Sửa hồ sơ</span>
              </Styled.BriefEdit>
            </Styled.BriefRight>
          </Styled.Brief>
          <Styled.SidebarMenu>
            <Styled.SidebarMenuEntry to={path.userProfile}>
              <Styled.SidebarMenuEntryIcon>
                <img
                  src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
                  alt=""
                />
              </Styled.SidebarMenuEntryIcon>
              <span>Tài khoản của tôi</span>
            </Styled.SidebarMenuEntry>
            <Styled.SidebarMenuEntry to={path.userPassword}>
              <Styled.SidebarMenuEntryIcon></Styled.SidebarMenuEntryIcon>
              <span>Đổi mật khẩu</span>
            </Styled.SidebarMenuEntry>
            <Styled.SidebarMenuEntry to={path.userPurchase}>
              <Styled.SidebarMenuEntryIcon>
                <img
                  src="  https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
                  alt=""
                />
              </Styled.SidebarMenuEntryIcon>
              <span>Đơn mua</span>
            </Styled.SidebarMenuEntry>
          </Styled.SidebarMenu>
        </Styled.Sidebar>
        <Styled.Main>
          <Outlet />
        </Styled.Main>
      </Styled.Container>
    </Styled.UserPage>
  )
}

export default User
