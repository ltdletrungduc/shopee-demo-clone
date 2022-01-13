import styled from 'styled-components'
import { Button } from 'components/Button/styled'

export const SearchItemResult = styled.div``
export const SortBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.03);
  padding: 1.25rem 1.5rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
`
export const SortBarLabel = styled.div`
  color: #555;
  margin-right: 1.6rem;
`
export const SortByOptions = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  justify-content: flex-start;
`
export const SortByOption = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.02);
  height: 3.4rem;
  line-height: 3.4rem;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  padding: 0 1.5rem;
  background: #fff;
  white-space: nowrap;
  margin-left: 1rem;
  &.active {
    background-color: rgb(238, 77, 45);
    color: #ffffff;
  }
`
export const SortByPrice = styled.select`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.02);
  height: 3.4rem;
  line-height: 3.4rem;
  margin-left: 1rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
  padding: 0 1.5rem;
  &.active {
    color: #ee4d2d;
  }
`
export const MiniPageController = styled.div`
  display: flex;
  align-items: center;
`
export const PageState = styled.div`
  margin-right: 1.5rem;
`
export const PageStateCurrent = styled.span``
export const PageStateTotal = styled.span`
  color: #ee4d2d;
`
export const PageButton = styled.div`
  ${Button} {
    background: transparent;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.25);
    width: 3.6rem;
    height: 3.4rem;
    &:disabled {
      color: rgba(0, 0, 0, 0.1);
      border-color: rgba(0, 0, 0, 0.1);
    }
    &:hover:not([disabled]) {
      background: #fdfdfd;
    }
    svg {
      width: 1rem;
      height: 1rem;
      margin-top: 0.2rem;
    }
  }
`
export const PrevPageButton = styled(PageButton)``
export const NextPageButton = styled(PageButton)``

// PRODUCT LIST
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
