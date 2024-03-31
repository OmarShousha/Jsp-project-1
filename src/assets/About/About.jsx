import React from 'react';
import ChiefImg from '../imgs/a7.jpeg';
// import New from '../Title/Title.jsx';

export default function About() {
  return (
    <section id='About' className='about bg-blac'>
      <div className="layer-about"></div>
      
      <div className="container">
        <div className="row justify-content-center align-items-center">

          <div className="col-lg-6">
            <div className='p-lg-4'>
              <div className='p-4 d-flex flex-column align-items-center gap-4'>
                <h1 className='about-title mt-5 mt-md-5 mt-lg-0'>ABOUT US</h1>
                <p className='fw-semibold w-75 text-lg-start'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.
                </p>
                <div>
                  <button className="btn btn-yellow">CONTACT US</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className='p-md-5 p-lg-4'>
              <div className='p-5'>
                <img src={ChiefImg} className='w-100 rounded-3' alt="" />
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
