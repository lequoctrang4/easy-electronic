import  express  from "express";
import path from 'path';
import reviewController from "../controller/reviewController";
import multer from 'multer';
import appRoot from "app-root-path";
import {checkAuthMiddleware, parseJwt} from "../utils/auth";
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, appRoot + "/src/public/image/review");
    },
    filename: function (req, file, cb) {
        const authFragments = req.headers.authorization.split(' ');
        let {id} = parseJwt(authFragments[1]);
        cb(null, req.product_id + "-" + id + "-" + Date.now() + path.extname(file.originalname));
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

const ReviewRoute = (app) =>{
    router.get("/:product_id", reviewController.getReviewByProductId);
    router.use(checkAuthMiddleware);
    router.post("", upload.single("image"), reviewController.addReview);
    router.patch("", upload.single("image"), reviewController.editReview);
    router.delete("/:review_id", reviewController.deleteReview);
    return app.use('/review', router);
}

export default ReviewRoute;
