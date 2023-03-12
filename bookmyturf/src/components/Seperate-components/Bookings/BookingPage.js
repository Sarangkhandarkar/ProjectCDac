import React, { useContext, useState } from 'react'
import { Logincontext } from '../../Contexts/Logincontext'
import httpService from '../../http-service/http-service';
function BookingPage() {
    const { selectedturfdetails , userdetails } = useContext(Logincontext);
    const [selectedsports,setSelectedsports]=useState();
    const [selectedtimeslot,setSelectedtimeslot]=useState('');
    const [timeslot,setTimeslot]=useState({});
    const [timeslotid,setTimeslotid]=useState({});
    const [maxplayer,setMaxplayer]=useState('');
    const [costperhour,setCostperhour]=useState('');
    const [sportsid,setSportsid]=useState();
    
    console.log(selectedturfdetails);
    var arr = [];
    Object.keys(timeslot).forEach(function(time){
      if(!timeslot[time]){
      arr.push(time);
      }
    })
    console.log(arr);
    const [data,setData]=useState({
      booking_status: true,
      payment_status: true,
      timeslot: "",
      userId: {
        id: ""
      },
      sportId:{
        sport_id: ""
      },
      timeSlots:{
        time_id: ""
      },
      turf_id:{
        turf_id:""
      },
      time_slot:{
        time_id:""
      }
    });
    //const [turfData,setTurfData]=useState(selectedturfdetails[0].turfDetails)
    function onsportselect(e){
      setSelectedsports(e.target.value);
      selectedturfdetails.map(item=>{if(item.sportsName===e.target.value){setTimeslot(item.timeSlots);setMaxplayer(item.max_player);setCostperhour(item.price_per_hour);setTimeslotid(item.timeSlots.time_id);setSportsid(item.sport_id)}});
    }
    function ontimechange(e){
      setSelectedtimeslot(e.target.value);
    }
    function submit(e){
      const newdata={...data};
      newdata.booking_status=true;
      newdata.payment_status=true;
      newdata.timeslot=selectedtimeslot;
      newdata.userId.id=userdetails.id;
      newdata.sportId.sport_id=sportsid;
      newdata.turf_id.turf_id=selectedturfdetails[0].turfDetails.turf_id;
      newdata.timeSlots.time_id=timeslotid;
      newdata.time_slot.time_id=timeslotid;
      setData(newdata);
      httpService.bookingRequest(data).then(resp=>(console.log(resp.data))).catch(err=>alert(err.response.data));
    }
    
  return (
    <div>
      <div className=' userform container-fluid text-light  mt-5'>
            <h1 className='text-danger text-center'>Welcome To BookMyTurf</h1>
            <h2 className='text-center mt-3'>Hello {userdetails.first_name}  {userdetails.last_name}</h2>
      
            <div className='row'>
                <h4 className='mt-4 me-5'>Turf : {selectedturfdetails[0].turfDetails.name}</h4>
                <h4 className='mt-4 '>Address :{selectedturfdetails[0].turfDetails.address}</h4>
                <h4 className='mt-4 me-5'>Contact : {selectedturfdetails[0].turfDetails.image}</h4>
                <h4 className='mt-4 '>turf_id :{selectedturfdetails[0].turfDetails.turf_id}</h4>
                <h4 className='mt-4 '>City : {selectedturfdetails[0].turfDetails.city}</h4>
                  <div className='mt-4 me-5 row'>
                     <lable className='col' htmlfor='sportDropdown'><h4>Select the sport from the list&nbsp;&nbsp;&nbsp;</h4></lable>
                     <select className='col' name='sportDropdown' onChange={(e)=>{setSelectedsports(e.target.value);onsportselect(e)}}>{selectedturfdetails.map(item=><option value={item.sportsName}>{item.sportsName}</option>)}</select>
                 </div>
                 <div className='mt-4 me-5 row'>
                    <div className='col '><h4>Maximum allowed Players: {maxplayer}</h4></div>
                    <div className='col'><h4>Cost Per hour: {costperhour}</h4></div>
                 </div>
                 <div className='mt-4 me-5 row'>
                    <lable className='col text-nowrap' htmlfor='timeslot'><h4>Select from available time Slot&nbsp;&nbsp;&nbsp;</h4></lable>
                    <select className='col' name='timeslot' onChange={e=>{setSelectedtimeslot(e.target.value);ontimechange(e)}} >{arr.map(item=><option value={item}>{item}</option>)}</select>
                 </div>
            </div>
            <button className='btn btn-primary my-3' onClick={e=>submit(e)}>Book the turf</button>
      </div>
    </div>
  )
}

export default BookingPage
