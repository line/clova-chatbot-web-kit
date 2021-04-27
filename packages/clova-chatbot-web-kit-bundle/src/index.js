import ReactWebChat from './ReactWebChat'
import { renderWebChat } from './renderWebChat'

/**
 * Reactでimportする場合
 */
export default ReactWebChat

/**
 * Browserで使用する場合
 */
window.WebChat = {
  ReactWebChat,
  renderWebChat,
}
