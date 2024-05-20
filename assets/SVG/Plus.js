import React from 'react'
import Svg, { Path } from 'react-native-svg';

const Plus = (props) => {
  return (
    <Svg width={props.width&&props.width} height={props.height&&props.height}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <Path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"fill={props.fill&&props.fill}  />
    </Svg>
  )
}

export default Plus