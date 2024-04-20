import React from 'react'
import Header from "../Layout/HeaderLayout"
import  Hotels from "./Hotels";
import Footer from "../components/footer"

export default function FrontPage() {
  return (
    <div>
      <Header/>
      <Hotels/>
      <Footer/>
    </div>
  )
}
