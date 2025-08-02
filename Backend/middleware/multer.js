const  multer = require("multer");
const {v4: uuidv4} = require("uuid");
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, 'uploads');
    },
    filename(req, file, callback) {
        console.log('dfae', file);
        const id = uuidv4();
        const extName = file.originalname.split(".").pop();
        const fileName = `${id}.${extName}`;
        callback(null, fileName);
    }
});
const SingleUpload = multer({ storage }).single("image");
module.exports = {
    SingleUpload
}
