import  express  from "express";
import path from 'path';
import productController from '../controller/productController'
import multer from 'multer';
import appRoot from "app-root-path";
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/../Frontend/src/img");//"/src/public/image/");
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
    router.get('/getAllPhone', productController.getAllPhone);
    router.get('/getPhone/id/:id', productController.getPhoneById);
    router.get('/getPhone/dev/:dev', productController.getPhoneByDeveloper);
    router.post('/addPhone', upload.array('image', 7), productController.addPhone);
    router.put('/editPhone/id/:id',upload.array('image', 7), productController.editPhoneById);
    router.delete('/deletePhone/id/:id', productController.deletePhoneById);
    //laptop
    router.get('/getAllLaptop', productController.getAllLaptop);
    router.get('/getLaptop/id/:id', productController.getLaptopById);
    router.get('/getLaptop/dev/:dev', productController.getLaptopByDeveloper);
    router.post('/addLaptop', upload.array('image', 7), productController.addLaptop);
    router.put('/editLaptop/id/:id', upload.array('image', 7), productController.editLaptopById);
    router.delete('/deleteLaptop/id/:id', productController.deleteLaptopById);
    //Tablet
    router.get('/getAllTablet', productController.getAllTablet);
    router.get('/getTablet/id/:id', productController.getTabletById);
    router.get('/getTablet/dev/:dev', productController.getTabletByDeveloper);
    router.post('/addTablet', upload.array('image', 7), productController.addTablet);
    router.put('/editTablet/id/:id', upload.array('image', 7), productController.editTabletById);
    router.delete('/deleteTablet/id/:id', productController.deleteTabletById);
    //Watch
    router.get('/getAllWatch', productController.getAllWatch);
    router.get('/getWatch/id/:id', productController.getWatchById);
    router.get('/getWatch/dev/:dev', productController.getWatchByDeveloper);
    router.post('/addWatch', upload.array('image', 7), productController.addWatch);
    router.put('/editWatch/id/:id', upload.array('image', 7), productController.editWatchById);
    router.delete('/deleteWatch/id/:id', productController.deleteWatchById);
    //search
    router.get('/searchItem/param/:param', productController.searchItem);
    
    return app.use('/product', router);
}

export default productRoute;
