import  express  from "express";
import path from 'path';
import productController from '../controller/productController'
import multer from 'multer';
import appRoot from "app-root-path";
import {checkAuthAdminMiddleware} from "../utils/auth";

let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/html");
    },
    filename: function (req, file, cb) {
        cb(null, req.body.code + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(html|HTML)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });

const productRoute =(app) =>{
    //phone
    router.get("/getAllProduct", productController.getAllProduct);
    router.get('/getProductById/:id', productController.getProductById);
    router.get('/getProductByCode/:code', productController.getProductByCode);
    router.get('/getProductByCategory/:category', productController.getProductByCategory);
    router.get('/getProductByDev/:dev', productController.getProductByDev);
    router.get('/getProductByDevAndCate/:cate/:dev', productController.getProductByDevAndCate);
    router.get('/getAllCategory', productController.getAllCategory);
    router.get('/searchItem/:param', productController.searchItem);

    //Trang chi tiết sản phẩm
    router.get('/detailProduct/:id', productController.detailProduct);


    //admin
    router.use(checkAuthAdminMiddleware);
    router.post('/addCategory', productController.addCategory);
    router.patch('/editCategory/:id/:title', productController.editCategory);
    router.get('/getAllAttribute', productController.getAllAttribute);
    router.post('/addAttribute', productController.addAttribute);
    router.patch('/editAttribute/:id', productController.editAttribute);
    router.delete('/deleteAttribute/:id', productController.deleteAttribute);
    router.post('/addProduct', upload.single('html'), productController.addProduct);
    router.patch('/editProduct/:id', upload.single('html'), productController.editProduct);
    router.delete('/deleteProduct/:id', productController.deleteProduct);
    return app.use('/product', router);
}

export default productRoute;
