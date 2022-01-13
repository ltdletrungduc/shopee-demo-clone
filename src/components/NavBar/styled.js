import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Popover } from 'components/Popover/styled'
export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`
export const NavLeftMenu = styled.ul`
  display: flex;
`
export const NavRightMenu = styled.ul`
  display: flex;
`
export const NavItem = styled.li``
export const NavLink = styled(Link)`
  color: #ffffff;
  margin-left: 1rem;
  margin-right: lrem;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`

export const NavUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: 1rem;
  ${Popover} {
    width: 15rem;
    top: 135%;
  }
`
export const UserInfo = styled.div`
  display: flex;
`
export const UserImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`
export const UserName = styled.p`
  padding-left: 5px;
  max-width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const UserLink = styled(Link)`
  color: rgb(0 0 0 / 80%);
  background-color: #fff;
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  width: 100%;
  text-align: left;
  transition: color 0.4s, background-color 0.4s;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
export const LogoutButton = styled.button`
  color: rgb(0 0 0 / 80%);
  background-color: #fff;
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  border: none;
  width: 100%;
  text-align: left;
  transition: color 0.4s, background-color 0.4s;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
