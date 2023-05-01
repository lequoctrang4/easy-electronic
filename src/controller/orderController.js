import orderModel from '../models/orderModel';
import {parseJwt} from "../utils/auth";

let getAllShipping = async (req, res) => {
  let rs = await orderModel.getAllShipping();
  return res.status(200).json(rs);
};
let getShipping = async (req, res) => {
  let rs = await orderModel.getShipping(req.params.id);
  return res.status(200).json(rs);
};
let getVoucherUser = async (req, res) => {
   const authFragments = req.headers.authorization.split(" ");
   let { id } = parseJwt(authFragments[1]);
  let rs = await orderModel.getVoucherUser(id);
  return res.status(200).json(rs);
};
let getOrderByUser = async (req, res) =>{
  const authFragments = req.headers.authorization.split(" ");
  let { id } = parseJwt(authFragments[1]);
  const order = await orderModel.getOrderByUser(id);
  return res.status(200).json(order);
};
let viewDetailOrder = async (req, res) => {
  let { orderId } = req.params;
  console.log(orderId);
  const order = await orderModel.viewDetailOrder(orderId);
  return res.status(200).json(order);
};
let addOrder = async (req, res) =>{
  const authFragments = req.headers.authorization.split(" ");
  let { id } = parseJwt(authFragments[1]);
  let {voucher_id, payment_id, shipping_id, notice, sum_price, order_detail} = req.body;
  const rs = await orderModel.addOrder(id, voucher_id, payment_id, shipping_id, notice, sum_price, order_detail);
  if (rs) return res.status(200).json("Success");
  return res.status(400).json("Failure");
};

let deleteOrder = async (req, res) =>{

};

let getOrderByStatus = async (req, res) =>{
  
};
let setStatus = async (req, res) =>{

};


module.exports = {
  getOrderByUser,
  addOrder,
  deleteOrder,
  getOrderByStatus,
  setStatus,
  viewDetailOrder,
  getAllShipping,
  getShipping,
  getVoucherUser,
};