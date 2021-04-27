import React from 'react'

export const defaultStyles = {
  root: null,
  width: '360px',
  height: '550px',
  title: 'CLOVA ChatBot',
  placeholder: 'Do you have any questions?',
  backgroundColor: '#7793bf',
  backgroundImage: '',
  headerHeight: '50px',
  avatarBackgroundColor: '#bbbfc3',
  avatarImage: '',
  bubbleStyle: 'rounded', // [rounded, square]
  bubbleRadius: '12px',
  bubbleColor: 'rgb(80,80,80)',
  bubbleBackgroundColor: 'rgb(243,243,237)',
  bubbleFontSize: '14px',
  userBubbleStyle: '', // [rounded, square]
  userBubbleRadius: '',
  userBubbleColor: '',
  userBubbleBackgroundColor: '',
  userBubbleFontSize: '',
}

export const StyleContext = React.createContext(defaultStyles)
