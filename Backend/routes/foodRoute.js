import express from 'express';
import { addFood, removefood, listfood } from '../controllers/foodController.js';
import multer from 'multer';
import path from 'path';

const foodRouter = express.Router();

// Check file type
const checkFileType = (file, cb) => {
    const filetypes = /jpeg|png|jpg|gif|wepb/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Upload only images");
    }
};

// Image storage engine
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        // Generate a unique filename
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Initialize upload with file type validation
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
    }
});

foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.get('/list', listfood);
foodRouter.post('/remove', removefood);

export default foodRouter;
