export function validateEmail(mail) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if (emailPattern.test(mail)) {
    return true
  }
  return false
}

// CURRYING
export const payloadCreator = asyncFunction => async (arg, thunkAPI) => {
  try {
    const resonse = await asyncFunction(arg)
    return resonse
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
}

export const generateNameId = ({ name, _id }) => {
  return encodeURIComponent(
    `${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id} `
  )
}

export const getIdProductFromURL = url => {
  const arr = url.split('-i.')
  return arr[arr.length - 1]
}

export const rateSale = (original, sale) => {
  return Math.round(((original - sale) / original) * 100) + '%'
}

export const formatK = num => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num)
}

export const formatMoney = num => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0
  }).format(num)
}
