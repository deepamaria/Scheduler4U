import React from 'react'
import { Link } from 'react-router-dom'

function StartingPage() {
  return (
    <div>
<div className='grid  place-items-end w-full '>
<Link to={"/login"}><button className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl shadow-cyan-500/50'>Log In</button></Link>
<br />
</div>
<div className='MainPage h-full w-full'>
  <div className='topSide h-2/3 w-full'>
   <div className="carousel h-full w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://images.idgesg.net/images/article/2018/08/calendars_scheduling_planning_teamwork_by_rawpixel_cc0_via_stocksnap_1200x800-100766074-large.jpg?auto=webp&quality=85,70" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle btn-primary">❮</a> 
        <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
      </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.ashworthcollege.edu/media/zoo/images/your-guide-to-creating-a-study-schedule_30d4d453edfee341a7c6d6cabced5518.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-primary">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://m.media-amazon.com/images/I/81bT4ebEdqL._AC_UF1000,1000_QL80_.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-primary">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://as1.ftcdn.net/v2/jpg/03/33/20/50/1000_F_333205002_hslM86nSDQm3h0rQYrXIaF4eYUUj542c.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide5" className="btn btn-circle btn-primary">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71asW2fJy7L._AC_SL1213_.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide6" className="btn btn-circle btn-primary">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/187311820/photo/its-time-for-a-vacation.jpg?s=612x612&w=0&k=20&c=yOfhcaOqEAhD3Oo5f2WaFkDPa4lRJiGbKOihN-bNHwM=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle btn-primary">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-primary">❯</a>
    </div>
  </div>
</div>
</div>

            <div className='bottomSide h-1/3 w-full flex flex-col items-center'>
                <h1 className='text-2xl font-bold'>Are you <span>Fed Up</span> scheduling your Activities like these??</h1>
                    {/* <br /> */}
                <h1 className='text-2xl font-bold'><span>Organize</span> Your Activities <span>Easily</span> with <span><b>Scheduler4U</b></span></h1>
            <Link to={"/signup"}><button className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-sky-500 to-indigo-500 shadow-2xl shadow-cyan-500/50'>Sign Up Free</button></Link>

            </div>
        </div>

</div>
    // </div>
  )
}

export default StartingPage