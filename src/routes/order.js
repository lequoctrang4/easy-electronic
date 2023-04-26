import express from "express";
import orderController from "../controller/orderController";
import { checkAuthAdminMiddleware, checkAuthMiddleware, parseJwt } from "../utils/auth";
let router = express.Router();


const OrderRoute = (app) => {
    router.use(checkAuthMiddleware);
    router.get("/getOrderByUser/:id", orderController.getOrderByUser);
    router.post("/addOrder", orderController.addOrder);
    router.use(checkAuthAdminMiddleware);
    router.get("/getOrderByStatus/:status", orderController.getOrderByStatus);
    router.delete("/deleteOrder", orderController.deleteOrder);
    router.patch("/setStatus/:status", orderController.setStatus);
    return app.use("/order", router);
};

export default OrderRoute;
