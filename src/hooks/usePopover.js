import { useState } from 'react'

function usePopover() {
  const [activePopover, setActivePopover] = useState(false)
  const showPopover = () => setActivePopover(true)
  const hidePopover = () => setActivePopover(false)
  return {
    activePopover,
    showPopover,
    hidePopover
  }
}

export default usePopover
