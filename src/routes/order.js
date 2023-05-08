import express from "express";
import orderController from "../controller/orderController";
import { checkAuthAdminMiddleware, checkAuthMiddleware, parseJwt } from "../utils/auth";
let router = express.Router();


const OrderRoute = (app) => {
    router.use(checkAuthMiddleware);
    //Giao diện khách hàng
    router.get("/getOrderByUser", orderController.getOrderByUser);
    router.get("/viewDetailOrder/:orderId", orderController.viewDetailOrder);
    router.post("/addOrder", orderController.addOrder);
    router.get("/getAllShipping", orderController.getAllShipping);
    router.get("/getShipping/:id", orderController.getShipping);
    router.get("/getVoucherUser", orderController.getVoucherUser);

    router.use(checkAuthAdminMiddleware);
    router.get("/getOrderAdmin/:userId", orderController.getOrderAdmin);

    router.get("/getOrderByStatus/:status", orderController.getOrderByStatus);
    router.delete("/deleteOrder/:orderId", orderController.deleteOrder);
    router.patch("/setStatus/:orderId/:status", orderController.setStatus);
    return app.use("/order", router);
};

export default OrderRoute;
