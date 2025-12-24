import api from "./axios";

export const getGroups = () => api.get("/groups");
export const createGroup = (data) => api.post("/groups", data);
