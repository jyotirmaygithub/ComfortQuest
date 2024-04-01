import React from 'react'
import { CircularProgress } from '@mui/material'

export default function ProgressCircle() {
  return (
    <div className='h-screen flex justify-center items-center'>
     <CircularProgress style={{ color: 'black'}} />
    </div>
  )
}
