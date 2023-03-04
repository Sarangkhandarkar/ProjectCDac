import httpClient from "../../http-common";

const getaAll = () => httpClient.get('');

const getByCity = (city) => httpClient.get(`${city}`);

const getByName = (turf) => httpClient.get(`${turf}`);

const registeruser = (data) => httpClient.post('',data);

const registerTurfOwner = (data) => httpClient.post('',data);

const bookingRequest = (data) => httpClient.post('',data);

const deleteBooking = (bookingid) => httpClient.get('/cancel/'`${bookingid}`)

const authenticateUser =(credentials) => httpClient.post('',credentials);



const create = (data) => {
    return httpClient.post('', data);
  };
  
export default { create , getaAll , getByCity ,getByName,
  registeruser,registerTurfOwner,bookingRequest,
  deleteBooking,authenticateUser
};