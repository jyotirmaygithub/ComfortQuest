import React from 'react'
import Header from "../components/header"
import  Hotels from "../pages/Hotels";
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
