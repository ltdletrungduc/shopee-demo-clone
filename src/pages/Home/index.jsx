import React, { useEffect, useState } from 'react'
import FilterPanel from 'components/FilterPanel'
import * as Styled from './styled'
import SearchItemResult from 'components/SearchItemResult'
import { useDispatch } from 'react-redux'
import { getCategories, getProducts } from './home.slice'
import { unwrapResult } from '@reduxjs/toolkit'
import useQuery from 'hooks/useQuery'
import { Helmet } from 'react-helmet'

function Home() {
  const [categories, setCategories] = useState([])
  const [productData, setProductData] = useState({
    products: [],
    pagination: {}
  })
  const [filters, setFilters] = useState({})
  const query = useQuery()
  const homeDispatch = useDispatch()

  useEffect(() => {
    homeDispatch(getCategories())
      .then(unwrapResult)
      .then(response => {
        setCategories(response.data)
      })
    return function cleanup() {
      setCategories([])
    }
  }, [homeDispatch])

  useEffect(() => {
    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 30,
      sortBy: query.sortBy || 'view' // MOST POPULAR
    }
    setFilters(_filters)
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    const _getProducts = async () => {
      const data = await homeDispatch(getProducts({ params }))
      const response = unwrapResult(data)
      setProductData(response.data)
    }
    _getProducts()
  }, [query, homeDispatch])
  return (
    <Styled.Home>
      <Helmet>
        <title>Shopee Việt Nam - Demo clone</title>
      </Helmet>
      <div className="container">
        <Styled.Side>
          <FilterPanel categories={categories} filters={filters} />
        </Styled.Side>
        <Styled.Main>
          <SearchItemResult productData={productData} filters={filters} />
        </Styled.Main>
      </div>
    </Styled.Home>
  )
}

export default Home
