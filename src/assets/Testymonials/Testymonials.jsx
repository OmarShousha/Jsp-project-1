import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import Testblock from './Testblock'

export default function Testymonials() {
  return (
    <>
    <section id='Testymonials' className='testymonials'>
        <div className="container bg-blac py-5">
          <h1 className='test-title text-center py-4'>Testymonials</h1>
          <div className="row justify-content-center align-items-center">
            <Testblock/>
            <Testblock/>
            <Testblock/>
            <Testblock/>
          </div>
          <div className='pt-3'>
            <Button/>
          </div>
        </div>
    </section>

    </>
  )
}
