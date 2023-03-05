import httpClient from "../../http-common";

const getAll = () => httpClient.get('');

const SearchBy = (serchtype,serchterm) => httpClient.get(`/turf/${serchtype}/${serchterm}`);

const getByCity = (city) => httpClient.get(`/serch/${city}`);

const getByName = (turf) => httpClient.get(`${turf}`);

const registeruser = (data) => httpClient.post('',data);

const registerTurfOwner = (data) => httpClient.post('',data);

const bookingRequest = (data) => httpClient.post('',data);

const deleteBooking = (bookingid) => httpClient.get(`/cancel/${bookingid}`);

const authenticateUser =(credentials) => httpClient.post('',credentials);

const addturf =(data) => httpClient.post('',data);

export default {getAll,SearchBy,getByCity,getByName,registeruser,registerTurfOwner,bookingRequest,deleteBooking,authenticateUser,addturf};