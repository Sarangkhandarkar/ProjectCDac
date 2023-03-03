import httpClient from "../../http-common";

const create = (data) => {
    return httpClient.post('', data);
  };
  
export default { create };