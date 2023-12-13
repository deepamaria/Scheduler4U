import React from 'react'

function SignUpPage() {
  return (
    <div className='SignUpPage flex h-full w-full'>
        <div className='SignUp h-full w-1/3'>SignUp
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        </div>
        </div>
        
        <div className='RightSide h-full w-2/3'>
            <div className='topSide h-2/3 w-full'>
            <div className="carousel h-full w-full">
  <div id="slide1" className="carousel-item relative w-full">
                {/* <img className='img h-full w-full' src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71asW2fJy7L._AC_SL1213_.jpg" alt="wallCalendarPic" /> */}
    <img src="https://images.idgesg.net/images/article/2018/08/calendars_scheduling_planning_teamwork_by_rawpixel_cc0_via_stocksnap_1200x800-100766074-large.jpg?auto=webp&quality=85,70" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://www.ashworthcollege.edu/media/zoo/images/your-guide-to-creating-a-study-schedule_30d4d453edfee341a7c6d6cabced5518.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://m.media-amazon.com/images/I/81bT4ebEdqL._AC_UF1000,1000_QL80_.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://as1.ftcdn.net/v2/jpg/03/33/20/50/1000_F_333205002_hslM86nSDQm3h0rQYrXIaF4eYUUj542c.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71asW2fJy7L._AC_SL1213_.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
  
    <img src="https://media.istockphoto.com/id/187311820/photo/its-time-for-a-vacation.jpg?s=612x612&w=0&k=20&c=yOfhcaOqEAhD3Oo5f2WaFkDPa4lRJiGbKOihN-bNHwM=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
                {/* <img className='img h-full w-full' src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71asW2fJy7L._AC_SL1213_.jpg" alt="wallCalendarPic" /> */}
            </div>
            <div className='bottomSide h-1/3 w-full flex flex-col items-center'>
                <h1 className='text-5xl font-bold'>Are you <span>Fed Up</span> scheduling your Activities like these??</h1>
                    <br />
                <h1 className='text-5xl font-bold'>Login to <span>Organize Easily</span> with Scheduler4U</h1>

            </div>
        </div>

    </div>
  )
}

export default SignUpPage