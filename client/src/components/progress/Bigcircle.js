import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";

export default function circle(props) {
    const {color} = props
  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <CircularProgress size={100} style={{ color: `${color}` }} />
    </div>
  )
}
