const useScrollToBottom = (props) => {
  const onScrollToBottom = ({
    element = null,
    timeout = 0,
    behavior = 'auto',
  }) => {
    if (!element) return
    setTimeout(() => {
      element.scrollTo({
        top: element.scrollHeight,
        left: 0,
        behavior,
      })
    }, timeout)
  }
  return { onScrollToBottom }
}

export default useScrollToBottom
