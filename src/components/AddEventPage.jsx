import Backendless from 'backendless';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddEventPage({setevent2}) {

  const navigate=useNavigate();

  const [retrievedEvents, setretrievedEvents] = useState([]);

  const addingEvent = (e) => {
    e.preventDefault();

    const titleEvent=e.target.titleText.value;
    const fromDate=e.target.fromdate.value;
    const toDate=e.target.todate.value;
    const colorEvent=e.target.favcolor.value;
    const category=e.target.category.value;
    const place=e.target.placeText.value;
    const description=e.target.descriptionText.value;

    // log Event Details
    console.log(titleEvent);
    console.log(fromDate);
    console.log(toDate);
    console.log(colorEvent);
    console.log(category);
    console.log(place);
    console.log(description);

    // Eventobject creation for backendless
    const EventObject={
        title:titleEvent,
        start:fromDate,
        end:toDate,
        description:description,
        EventPriority:category,
        color:colorEvent,
        place:place,
        textColor:"black",
        display:"auto",
        backgroundColor:colorEvent,
    }
    
    // saving event inputs and other values to Backendless Events Table
        Backendless.Data.of( "Event" ).save( EventObject )
        .then( function( savedObject ) {
            console.log( "new Event instance has been saved" );
            //  set event to old and add the new save event
            console.log("Event saving"+savedObject);
            // saving newobject
            // setevent2(i=>[...i,savedObject])
        })
        .catch( function( error ) {
            console.log( "an error has occurred " + error.message );
        });
    


        // retrieving events of individual user from Backendless
        Backendless.Data.of( "Event" ).find()
        .then( function( result ) {
            console.log("Events from User"+result);
            setevent2(i=>[...i,result]);
          // every loaded object from the "Contact" table is now an individual untyped
         // JS object in the "result" array
        })
        .catch( function( error ) {
        // an error has occurred, the error code can be retrieved with fault.statusCode
        });



    //newEvent creation for Calendar display
    const newEvent = {
          id: Math.floor(Math.random()*10000),
          start: fromDate,
          end: toDate,
          title: titleEvent,
          color: colorEvent,     // an option!
          textColor: 'black',
          backgroundColor: colorEvent,
          display:'auto',
        };
        
        // setEvents(events=>[...events, newEvent]);

        setevent2(event2=>[...event2, newEvent]);
        
        navigate("/calendar")
   };

  return (
    <div className='AddEvent flex flex-col h-full w-full'>
<div className='loginButton grid place-items-end w-full'>
<Link to={"/login"}><button className='btn btn-cyan-600 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50'>Log In</button></Link>
</div> 
<div className="AddEvent1 card w-full max-w-sm shadow-2xl bg-cyan-500">
      
      <form onSubmit={addingEvent} className="card-body">
          <div className="form-control">
             <label htmlFor="titleText"></label>
             <input required className="input input-bordered" type='text' placeholder='Title of Event' name='titleText' id='titleText'></input>
          </div>

          <div className="form-control">
            <label htmlFor="fromdate">From:</label>
            <input className="input input-bordered" type="date" id="fromdate" name="fromdate"></input>
          </div>

          <div className="form-control">
            <label htmlFor="todate">To:</label>
            <input className="input input-bordered" type="date" id="todate" name="todate"></input>
          </div>

          <div className="form-control">
          <label htmlFor="favcolor">Color:</label>
             <input required className="color input-bordered" type="color" id="favcolor" name="favcolor" ></input>

          <label htmlFor="category"></label>
             <select  className="select input-bordered w-full max-w-sm" name="category" id="category" >
               <option value={"High"}>High</option>
               <option value={"Medium"}>Medium</option>
               <option value={"Low"}>Low</option>
             </select>
          </div>

          <div className="form-control">
          <label htmlFor="placeText"></label>
             <input required className="input input-bordered" type='text' placeholder='Place of Event' name='placeText' id='placeText'></input>
          </div>

          <div className="form-control">
             <label htmlFor="descriptionText"></label>
             <input required className="input input-bordered" type='text' placeholder='Description' name='descriptionText' id='descriptionText'></input>
          </div>

        <div className="form-control mt-6">
        <button type='submit' className=' input input-bordered btn bg-cyan-600 btn-cyan-600 btn-xs sm:btn-sm md:btn-md lg:btn-lg'>Add</button>
        </div>
        
      </form>
        </div>

    </div>
  )
}

export default AddEventPage