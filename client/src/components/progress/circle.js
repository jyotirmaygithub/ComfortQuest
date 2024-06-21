import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";

export default function circle(props) {
    const {color} = props
  return (
    <>
       <CircularProgress size={24} style={{ color: `${color}` }} />
    </>
  )
}
