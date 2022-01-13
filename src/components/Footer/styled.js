import styled from 'styled-components'

export const Footer = styled.footer`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.65);
  padding: 4.2rem 0 3.7rem;
  background: #f5f5f5;
  width: 100%;
  min-width: max-content;
`
export const Container = styled.div`
  display: flex;
  &.footer-1 {
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
  }
  &.footer-2 {
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  &.footer-3 {
    margin-bottom: 1.5rem;
    align-items: center;
    justify-content: center;
  }
  &.footer-4 {
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }
`

export const Locate = styled.div`
  display: flex;
  div {
    margin-right: 5px;
  }
  span {
    padding: 0 0.3125rem;
    cursor: pointer;
    &:not(:last-child) {
      border-right: 1px solid rgba(0, 0, 0, 0.2);
    }
    &.active {
      color: #ee4d2d;
    }
  }
`

export const Policy = styled.div`
  padding: 0 1.5625rem;
  border-right: 1px solid rgba(0, 0, 0, 0.09);
  text-transform: uppercase;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.54);
`
