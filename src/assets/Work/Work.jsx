import React from 'react';
import Title from '../Title/Title';
import Workblock from './Workblock';
import Button from '../Button/Button';

export default function Work() {
  return (
    <>
    <section id='Work' className='work p-4 p-md-0 d-flex justify-content-center align-items-center'>

      <div className="layer-work"></div>

      <div className="container my-3 rounded-4 text-white">
        <div className="row justify-content-center align-items-center g-0">

          <div className="col-lg-6 pt-4">
            <div className='d-flex justify-content-center'>
              <p className='fw-semibold text-center p-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
          </div>
          <div className="col-lg-6 pe-lg-5">
            <div className='text-center p-3 my-2'>
              <Title text='HOW WE WORK'/>
            </div>
          </div>

          <div className='d-flex flex-wrap justify-content-center mt-lg-2'>
            <Workblock/>
            <Workblock/>
            <Workblock/>
            <Workblock/>
          </div>
        </div>

        <Button/>
      </div>
    </section>
    </>
  )
}


{/* <section className='work vh-100 d-flex justify-content-center align-items-center'>

<div className="layer-work"></div>

  <div className="container text-white">
    <div className="row">

      <div className="row m-0 px-5 justify-content-center align-items-center">
        <div className="col-md-6 px-md-5 ">
          <div className=''>
            <p className='text-black w-50 m-auto fw-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          </div>
        </div>
        <div className="col-md-6 px-md-4">
          <Title text="HOW WE WORK"/>
        </div>
      </div>

      <div className="row m-0 px-5 align-items-center justify-content-center">
        <div className="col-md-3 p-3">
          <div className='p-3 '>
            <img src={logo} className='w-100 rounded-4' alt="" />
          </div>
        </div>
        <div className="col-md-3 p-3">
          <div className='p-3'>
            <img src={logo} className='w-100 rounded-4' alt="" />
          </div>
        </div>
        <div className="col-md-3 p-3">
          <div className='p-3'>
            <img src={logo} className='w-100 rounded-4' alt="" />
          </div>
        </div>
        <div className="col-md-3 p-3">
          <div className='p-3'>
            <img src={logo} className='w-100 rounded-4' alt="" />
          </div>
        </div>
      </div>

    </div>
    <div className='d-flex justify-content-center'>
      <div className="btn btn-warning text-center">Contact us</div>

    </div>
</div>

</section> */}