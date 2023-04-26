import orderModel from '../models/orderModel';

let getOrderByUser = async (req, res) =>{
    const id = req.params.id;
    const order = await orderModel.getOrderByUser(id);
    return res.status(200).json(order);
}
let addOrder = async (req, res) =>{

};

let deleteOrder = async (req, res) =>{

};

let getOrderByStatus = async (req, res) =>{

};
let setStatus = async (req, res) =>{

};


module.exports ={
    getOrderByUser,
    addOrder,
    deleteOrder,
    getOrderByStatus,
    setStatus
}