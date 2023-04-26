import pool from "../configs/connectDB";

let getOrderByUser = async (id) => {
    let [order] = await pool.execute(`select * from order where user_id = ?`, [id]);
    return order; 
};
let addOrder = async (id) => {
    try {
        
    } catch (error) {
        return error;
    }
};
let getOrderByStatus = async (status) =>{

};
let deleteOrder = async (order_id) =>{

};
let setStatus = async (order_id, status) =>{

};
module.exports = {
  getOrderByUser,
  addOrder,
  getOrderByStatus,
  deleteOrder,
  setStatus
};