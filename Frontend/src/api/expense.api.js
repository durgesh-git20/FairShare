import api from "./axios";

export const addExpense = (data) => api.post("/expenses", data);
export const getBalances = () => api.get("/balances");
