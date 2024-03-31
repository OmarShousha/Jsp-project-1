import React from 'react'

export default function Contact() {
  return (
    <>
    <section id='Contact' className='contact'>
      <h1 className='contact-title text-center py-5'>CONTACT US</h1>
      <div className="container">
        <div className="row justify-content-center align-items-center pt-4 pb-5">

          <div className="col-md-6 col-lg-4">
            <div className='d-flex flex-column gap-3'>
              <input className='form-control' placeholder='Full Name' type="text" />
              <input className='form-control' placeholder='Email' type="text" />
              <input className='form-control' placeholder='Phone Number' type="text" />
              <div className='d-flex justify-content-center'>
                <div className="btn btn-contact">SEND</div> 
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 py-4">
            <div className='fs-5 d-flex flex-column gap-3'>

              <div className='d-flex justify-content-center align-items-center gap-2'>
                <i class="fa-solid fa-envelope"></i>
                <span>test@gmail.com</span>
              </div>

              <div className='d-flex justify-content-center align-items-center gap-2'>
                <i class="fa-solid fa-phone"></i> 
                <span>0123456789</span>
              </div>

            </div>
          </div>
          

        </div>

      </div>
      <div className='footer d-flex justify-content-center align-items-center text-white'>
        <h5>Copyrights 2024.</h5>
      </div>
    </section>
    </>
  )
}
