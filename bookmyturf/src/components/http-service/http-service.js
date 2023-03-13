import httpClient from "../../http-common";

const getAll = () => httpClient.get('turf/turflist');

const SearchBy = (serchtype,serchterm) => httpClient.get(`/turf/turf/${serchtype}/${serchterm}`);

// const getByCity = (city) => httpClient.get(`/serch/${city}`);

// const getByName = (turf) => httpClient.get(`${turf}`);

const getTurfById = (turfid) => httpClient.get(`/sports/turf/sports/${turfid}`)

const getTurfByOwnweId = (ownerid) => httpClient.get(`/turf/turf/Owner/${ownerid}`)

const registeruser = (data) => httpClient.post('/users/saveuser',data);

const registerTurfOwner = (data) => httpClient.post('',data);

const bookingRequest = (data) => httpClient.post('/booking/addbooking/',data);

const deleteBooking = (bookingid) => httpClient.get(`/cancel/${bookingid}`);

const authenticateUser =(credentials) => httpClient.post('/users/authenticate',credentials);

const authenticateOwner =(credentials) => httpClient.post('/users/authenticate/turfOwner',credentials);

const addturf =(data) => httpClient.post('/turf',data);

const addSport =(data) => httpClient.post('/sports/add',data);

export default {getAll,SearchBy,registeruser,registerTurfOwner,bookingRequest,deleteBooking,authenticateUser,addturf,addSport,authenticateOwner,getTurfById,getTurfByOwnweId};