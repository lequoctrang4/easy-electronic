import  express  from "express";
import path from 'path';
import adminController from '../controller/adminController';
import multer from 'multer';
import appRoot from "app-root-path";
import {checkAuthAdminMiddleware, parseJwt} from "../utils/auth";
let router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/admin");
    },
    filename: function (req, file, cb) {
        const authFragments = req.headers.authorization.split(' ');
        let {id} = parseJwt(authFragments[1]);
        cb(null, id + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });
const AdminRoute = (app) =>{
    router.use(checkAuthAdminMiddleware);
    router.get("/getAllUser", adminController.getAllUser);
    router.get("/getUser/:id", adminController.getUser);
    router.get("/getUserByPhone/:phone", adminController.getUserByPhone);

    router.delete("/deleteUser/:id", adminController.deleteUser);
    router.get("/getAllStaff", adminController.getAllStaff);
    router.post("/addStaff", upload.any(), adminController.addStaff);
    return app.use('/admin', router);
}
export default AdminRoute;
