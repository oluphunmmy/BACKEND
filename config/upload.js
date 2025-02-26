const multer = require('multer');
const path = require('path');

//configure storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); //Specify the directory to save the uploaded files
    },
    filename: function (req, file, cd) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
    }
});

const upload = multer({ storage: storage });

module.exports = { upload};