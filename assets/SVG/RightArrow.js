import React from 'react'
import Svg, { Path } from 'react-native-svg';

const RightArrow = (props) => {
  return (
    <Svg  width={props.width&&props.width} height={props.height&&props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill={props.fill&&props.fill} />
    </Svg>
  )
}

export default RightArrow