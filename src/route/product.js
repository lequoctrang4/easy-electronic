import  express  from "express";
import path from 'path';
import productController from '../controller/productController'
import multer from 'multer';
import appRoot from "app-root-path";
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
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
upload.any();

const productRoute =(app) =>{
    router.get('/getallphones', productController.getAllPhone);
    router.get('/getphone/id/:id', productController.getPhoneById);
    router.get('/getphone/dev/:dev', productController.getPhoneByDeveloper);
    router.post('/addphone', upload.array('image', 7), productController.addPhone);
    router.put('/editPhoneById/:id',upload.any(), productController.editPhoneById);
    router.delete('/deletePhoneById/:id', productController.deletePhoneById);

    return app.use('/product', router);
}

export default productRoute;
