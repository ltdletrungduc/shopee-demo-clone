import InputNumber from 'components/InputNumber'
import styled from 'styled-components'

export const ProductQuantityController = styled.div`
  display: flex;
  align-items: center;
`
export const ProductQuantityButton = styled.button`
  outline: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  background: transparent;
  width: 3.2rem;
  height: 3.2rem;
  svg {
    width: 1rem;
    height: 1rem;
  }
  &[disabled] {
    border-color: rgba(0, 0, 0, 0.09);
    color: #ccc;
    svg {
      fill: #ccc;
    }
  }
`
export const ProductQuantityInput = styled(InputNumber)`
  width: 5rem;
  height: 3.2rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-left: none;
  border-right: none;
  cursor: text;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  padding: 1px 2px;
  &[disabled] {
    border-color: rgba(0, 0, 0, 0.09);
    color: #ccc;
  }
`
