import styled from 'styled-components'

export const StarContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0 1.2rem;
  white-space: nowrap;
  svg {
    margin-right: 0.4rem;
  }
  transition: 0.4s;
`
export const RatingStars = styled.div`
  margin-top: ${props => (props.first ? 0 : '0.5rem')};
  &.active {
    ${StarContainer} {
      background-color: #ebebeb;
      border-radius: 1rem;
    }
  }
`
export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
`
