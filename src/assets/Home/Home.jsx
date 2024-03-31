import React from 'react'
import bgHome from '../imgs/a5.png'
import Navbar from '../Navbar/Navbar'

export default function Home() {
  return (
    
   <section id='Home' className='home pt- pb-4'>
    <Navbar/>
    <div className="home-layer"></div>

    <div className='new-icons d-none d-lg-flex flex-column gap-2 position-absolute'>
      <div>
      <i class="fa-brands fs-5 fa-vk"></i>
      </div>
      <div>
        <i class="fa-brands fs-5 fa-square-facebook"></i>
      </div>
      <div>
        <i class="fa-brands fs-5 fa-square-instagram"></i>
      </div>
      <div>
        <i class="fa-brands fs-5 fa-twitter"></i>
      </div>
    </div>

    <div className='d-none d-lg-block position-absolute phone'>
      <p>Telephone: +7 700 000 00 00</p>
    </div>

    <div className="container py-5">
      {/* <div className="row">
        <div className="col-md-12 pt-5">
          <div className='py-1'>
            <h1 className='fw-bold text-center'>Bakery Shop</h1>
          </div>
        </div>
      </div> */}

      <div className="row home-content py-4 justify-content-center align-items-center">
        <div className="col-md-6 mb-lg-5">
          <div className='d-flex flex-column justify-content-center align-items-center gap-2 py-3 mb-lg-5'>
            <h2 className='home-title'>Tasty Pastries</h2>
            <p className='fw-semibold'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            </p>
            <div>
                  <button className="btn btn-yellow">SEE MORE</button>
                </div>
          </div>
        </div>
        <div className="col-md-6 text-center py-4">
          <div className='p-3'>
            <img src={bgHome} className='w-100' alt="" />
          </div>
        </div>
      </div>

      <div className="row icons-row">
        <div className="col-md-6 p-2">
          <div className='icons gap-3'>
            <div>
              <i class="fa-brands fs-5 fa-vk"></i>
            </div>
            <div>
              <i class="fa-brands fs-5 fa-square-facebook"></i>
            </div>
            <div>
              <i class="fa-brands fs-5 fa-square-instagram"></i>
            </div>
            <div>
              <i class="fa-brands fs-5 fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className='m-0'>
            <p>Telephone: +7 700 000 00 00</p>
          </div>
        </div>
      </div>
    </div>
   </section>

    
  )
}
