import styled from 'styled-components'

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
`
export const StarContainer = styled.div`
  position: relative;
  margin-right: 1px;
`
export const StarPercent = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  height: 100%;
  width: ${props => props.widthStar};
  svg {
    width: 1rem;
    height: 1rem;
  }
`
export const StarTotal = styled.div`
  height: 100%;
  svg {
    width: 1rem;
    height: 1rem;
  }
`
