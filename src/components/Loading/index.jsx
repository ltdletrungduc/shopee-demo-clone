import React from 'react'
import { LinearProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

function Loading() {
  const isLoading = useSelector(state => state.app.loading)
  if (isLoading > 0) return <LinearProgress color="secondary" />
  return null
}

export default Loading
