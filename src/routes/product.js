import  express  from "express";
import path from 'path';
import productController from '../controller/productController'
import multer from 'multer';
import appRoot from "app-root-path";
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/product");
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
    //phone
    router.get('/getProductByCategory/:category', productController.getProductByCategory);
    router.get('/getProductByDev/:dev', productController.getProductByDev);
    router.get('/getProductByDevAndCate/:cate/:dev', productController.getProductByDevAndCate);

    router.post('/addProduct', productController.addProduct);
    router.get('/searchItem/param/:param', productController.searchItem);
    
    return app.use('/product', router);
}

export default productRoute;
