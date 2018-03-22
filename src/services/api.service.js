import axios from "axios";
import api from "./config";

export default {
  // Enquiries
  getEntities() {
    return axios.get(`${api}/v1/entities`);
  },
  getEntity(id) {
    return axios.get(`${api}/v1/entities/${id}`);
  },
  addEntity(payload) {
    return axios.post(`${api}/v1/entities`, payload);
  },
  updateEntity(id, payload) {
    return axios.put(`${api}/v1/entities/${id}`, payload);
  },
  deleteEntity(id) {
    return axios.delete(`${api}/v1/entities/${id}`);
  }
};
