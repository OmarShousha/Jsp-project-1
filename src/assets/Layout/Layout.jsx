import React from 'react'
import Home from '../Home/Home'
import Work from '../Work/Work'
import About from '../About/About'
import Recipes from '../Recipes/Recipes'
import Testymonials from '../Testymonials/Testymonials'
import Contact from '../Contact/Contact'

export default function Layout() {
  return (
    <>
      <Home/>
      <Work/>
      <About/>
      <Recipes/>
      <Testymonials/>
      <Contact/>
    </>
  )
}
