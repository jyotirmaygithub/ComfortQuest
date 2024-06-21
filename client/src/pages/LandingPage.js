import React from 'react'
import Header from "../Layout/Header"
import  Hotels from "../Layout/Hotels";
import Footer from "../components/footer"
import ScrollToTop from '../components/scroll/ScrollToTop';

export default function FrontPage() {
  return (
    <div>
      <Hotels/>
      <ScrollToTop/>
    </div>
  )
}
