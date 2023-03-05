import React from "react";

const SportsTurfCard=(props)=>{
    const{name,address,city,ownerid,sports}=props;
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{address}, {city}</h6>
                <p className=" card-text">
                <strong>Owner:</strong> {ownerid.first_name} {ownerid.last_name}<br />
          <strong>Contact No:</strong> {ownerid.contact_no}<br />
          <strong>Email:</strong> {ownerid.email}<br />
          <strong>Location:</strong> {ownerid.location}<br />
          <strong>Role:</strong> {ownerid.role}
        </p>
        <h6 className="card-subtitle mb-2 text-muted">Sports:</h6>
        {sports.map(sport => (
          <p key={sport.sport_id} className="card-text">
            <strong>{sport.sport_name}:</strong> Max Players - {sport.max_player}, Price per Hour - {sport.price_per_hour}, Time Slot - {sport.time_id.time_slot}, Booking Status - {sport.time_id.booking_status ? 'Available' : 'Not Available'}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SportsTurfCard;