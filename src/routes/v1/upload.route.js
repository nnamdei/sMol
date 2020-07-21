const express = require('express');
const auth = require('../../middlewares/auth');
const upload = require('../../middlewares/multer');
const uploadController = require('../../controllers/upload.controller');

const router = express.Router();

router.route('/vendor/:id').post(auth('vendor'), upload.single('file'), uploadController.uploadVendorImage);
router.route('/item/:id').post(auth('vendor'), upload.single('file'), uploadController.uploadItemImage);

module.exports = router;
