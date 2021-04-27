import { useEffect } from 'react'

const useResponsive = (props) => {
  const { root, width, height, headerHeight, isMinimized, isMobile } = props

  useEffect(() => {
    if (isMobile) {
      root.style.width = '100%'
      root.style.height = '100%'
      root.style.margin = '0'
      root.style.padding = '0'
      if (isMinimized) {
        root.style.height = headerHeight
      }
    } else {
      if (isMinimized) {
        root.style.width = width
        root.style.height = headerHeight
      } else {
        root.style.width = width
        root.style.height = height
      }
    }
  }, [root, width, height, headerHeight, isMinimized, isMobile])
}

export default useResponsive
