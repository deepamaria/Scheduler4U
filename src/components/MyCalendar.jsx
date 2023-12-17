import React from 'react'
import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from '@fullcalendar/list';

function MyCalendar({event2}) {

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  return (
    <div className='MyCalendar'>

      <div>
      <FullCalendar
        plugins={[ dayGridPlugin,timeGridPlugin,listPlugin,interactionPlugin ]}
        initialView={"dayGridMonth"} 
        
        headerToolbar={
            {
                start: 'title', // will normally be on the left. if RTL, will be on the right
                end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'// will normally be on the right. if RTL, will be on the left
            }

        }

        // footerToolbar= {
        //   {
        //     center: 'prevYear,prev,next,nextYear' // will normally be on the left. if RTL, will be on the right
        //   }
        // } 
       height={"70vh"}   

        events={event2}
        eventContent={renderEventContent}
        editable={true}
        selectable={true}
      />
      </div>


{/* buttons created below the Calendar */}
        <div className='buttonContainer flex gap-5 justify-center'>
          <Link to="/profile"><button className='btn btn-cyan500 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50'>Dashboard</button></Link>
              {/* Button to Add Events to the calendar */}
          <Link to="/addevent"><button className='btn btn-cyan500 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50'>Add Event</button></Link>
              {/*  Add buttons View Events to edit and Delete  */}    
          <Link to="/viewevents"><button className='btn btn-cyan500 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50'>View Events</button></Link>
        </div>

    </div>
  )
}

export default MyCalendar