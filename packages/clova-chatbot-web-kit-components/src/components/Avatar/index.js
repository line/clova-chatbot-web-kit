import React, { useContext } from 'react'
import styled from 'styled-components'
import { MdPerson } from 'react-icons/md'

import { StyleContext } from '../../context'

const Wrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
  line-height: 1em;
`

const AvatarImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Avatar = () => {
  const styles = useContext(StyleContext)
  const { avatarBackgroundColor, avatarImage } = styles

  return (
    <Wrapper backgroundColor={avatarBackgroundColor}>
      {avatarImage ? <AvatarImage src={avatarImage} /> : <MdPerson />}
    </Wrapper>
  )
}

export default Avatar
