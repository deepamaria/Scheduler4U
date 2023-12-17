import React from 'react'

function Footer() {
  return (
    <div className='Footer'>
    <footer className="footer h-full w-full items-center p-4 bg-cyan-600 text-cyan-600-content ">
        <nav className="flex-col gap-1 md:justify-self-center lg:justify-self-center">
            <p>Copyright <b>Scheduler4U</b> © 2023 <br /> Developed by <b>Deepa Maria</b>
            &nbsp;<a href='https://www.linkedin.com/in/deepa-maria/'><ion-icon size="small" name="logo-linkedin"></ion-icon></a> </p>
        </nav>
    </footer>
    </div>
  )
}

export default Footer