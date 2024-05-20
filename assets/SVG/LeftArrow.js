import React from 'react'
import Svg, { Path } from 'react-native-svg';

const LeftArrow = (props) => {
  return (
    <Svg width={props.width&&props.width} height={props.height&&props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" fill={props.fill&&props.fill}/>
        </Svg>

  )
}

export default LeftArrow