import React from 'react';


export default function NotFound() {
  return (
    <>
      <section className='page_404'>
        <div className='container'>
              <h1 className='text-center '>404</h1>
             

                <div className='contant_box_404'>
                  <h3 className='h2'>You are lost</h3>

                  <p>the page you are looking for is not found!</p>

                  <a href='/' className='link_404'>
                    Go to Home
                  </a>
                </div>
       </div>
    </section>
    </>
  );
}
