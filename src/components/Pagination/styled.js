import styled from 'styled-components'

export const Pagination = styled.div`
  margin-top: 4rem;
`
export const PageController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PageButton = styled.button`
  color: rgba(0, 0, 0, 0.4);
  min-width: 4rem;
  height: 3rem;
  margin: 0 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const PrevPageButton = styled(PageButton)`
  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }
`
export const NextPageButton = styled(PageButton)`
  svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: currentColor;
  }
`
export const ButtonNoOutLine = styled(PageButton)`
  text-align: center;
  transition: color 0.4s;
  &.active {
    cursor: auto;
    user-select: none;
    background: #ee4d2d;
    color: #ffffff;
  }
  &:hover:not(.active) {
    color: #ee4d2d;
  }
`
