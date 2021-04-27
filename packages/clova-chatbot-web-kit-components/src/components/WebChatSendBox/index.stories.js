import React from 'react'
import Component from '.'

export default {
  title: 'Components/WebChatSendBox',
  component: Component,
}

const Template = (args) => <Component {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
}
