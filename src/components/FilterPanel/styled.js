import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'components/Button/styled'
import InputNumber from 'components/InputNumber'

export const FilterPanel = styled.div``
export const CategoryList = styled.div``
export const CategoryListHeader = styled(Link)`
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  span {
    text-transform: capitalize;
  }
  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`
export const CategoryListBody = styled.ul``
export const CategoryListItem = styled.li`
  display: flex;
  align-items: center;
  a {
    color: rgba(0, 0, 0, 0.8);
    position: relative;
    padding: 0.8rem 1rem 0.8rem 1.2rem;
  }
  svg {
    height: 7px;
    width: 7px;
    opacity: 0;
    position: absolute;
    left: 0;
    margin-top: 4px;
  }
`
export const MainCategory = styled(NavLink)`
  font-weight: 700;
  &.active {
    color: #ee4d2d;
    svg {
      opacity: 1;
      fill: #ee4d2d;
    }
  }
`
export const SubCategory = styled(NavLink)`
  &.active {
    color: #ee4d2d;
    svg {
      opacity: 1;
      fill: #ee4d2d;
    }
  }
`
export const FilterHeader = styled.div`
  font-weight: 700;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  /* margin-bottom: 1rem; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  margin-top: 3rem;
  span {
    text-transform: uppercase;
  }
  svg {
    width: 1.25rem;
    margin-right: 1rem;
    stroke: currentColor;
  }
`
export const FilterGroup = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
export const FilterGroupHeader = styled.div`
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-weight: 500;
`
export const FilterGroupBody = styled.div`
  /* margin: 1rem auto 2rem; */
`
export const FilterGroupButton = styled(Button)`
  height: 3rem;
  margin: 2rem 0 0;
  text-transform: uppercase;
  font-weight: 400;
  width: 100%;
`
export const ClearFilterButton = styled(Button)`
  height: 3rem;
  margin: 2rem 0 0;
  text-transform: uppercase;
  font-weight: 400;
  width: 100%;
`

// PRICE RANGE
export const PriceRangeInputs = styled.div`
  display: flex;
  align-items: center;
`
export const PriceRangeInput = styled(InputNumber)`
  width: 8rem;
  padding: 1px 5px 2px;
  height: 3rem;
  border-radius: 1px;
  border: 1px solid rgba(0, 0, 0, 0.26);
  font-size: 1.2rem;
`
export const PriceRangeLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #bdbdbd;
  margin: 0 1rem;
`
export const PriceRangeErrorMessage = styled.div`
  padding: 1rem 0;
  text-align: center;
  color: #ff424f;
  font-size: 1.2rem;
`
// RATING
export const RatingInputs = styled.div``
export const RatingInput = styled.div``
