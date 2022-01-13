import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, ButtonLink } from 'components/Button/styled'

export const Header = styled.header`
  background: linear-gradient(-180deg, #f53d25, #f63);
  margin-bottom: 3rem;
  width: 100%;
  min-width: max-content;
`
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`
export const HeaderIcon = styled(Link)`
  margin-right: 4rem;
  svg {
    width: 160px;
    height: 50px;
    path {
      fill: #fff;
    }
  }
`
export const SearchForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  background: #fff;
  border-radius: 2px;
  height: 4rem;
`
export const SearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  padding-left: 1rem;
`
export const SearchButton = styled(Button)`
  padding-left: 20px;
  padding-right: 20px;
  height: auto;
  svg {
    color: #fff;
    fill: currentColor;
  }
`
export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 5rem;
`
export const CartContainer = styled.div`
  position: relative;
`
export const CartIcon = styled.div`
  position: relative;
  padding: 10px;
  display: inline-block;
  svg {
    width: 26px;
    height: 26px;
    polyline {
      stroke: #fff;
      stroke-width: 2.5px;
      fill: transparent;
    }
    circle {
      fill: #fff;
    }
  }
`
export const CartNumberBadge = styled.div`
  position: absolute;
  border-radius: 4rem;
  min-width: 11px;
  padding: 0 5px;
  text-align: center;
  border: 2px solid #ee4d2d;
  color: #ee4d2d;
  background: #fff;
  line-height: 1;
  top: 2px;
  right: 2px;
`
export const CartContent = styled.div`
  box-shadow: 0 1px 3.125rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
  width: 40rem;
`
export const CartTitle = styled.div`
  padding: 1.5rem 0 2rem 1rem;
  color: rgba(0, 0, 0, 0.26);
  text-transform: capitalize;
  .empty-cart-container {
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .empty-cart-img {
    width: 100px;
    height: 100px;
  }
`
export const CartFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const MiniProductCart = styled.div`
  display: flex;
  padding: 1rem;
`
export const MiniProductCartImg = styled.img`
  flex-shrink: 1;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`
export const MiniProductCartContent = styled.div`
  flex: 1;
  margin-left: 0.625rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`
export const MiniProductCartTitle = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
`
export const MiniProductCartPrice = styled.div`
  margin-left: 2.5rem;
  flex-shrink: 1;
  color: #ee4d2d;
  white-space: nowrap;
`
export const MoreProducts = styled.p`
  flex-grow: 1;
`
export const CartButton = styled(ButtonLink)`
  height: 3.5rem;
  padding: 1px 15px;
  text-transform: capitalize;
  flex-shrink: 0;
`
