const multer= require('multer');
const path= require('path')

const storage= multer.diskStorage({
    filename:function(req,file,callback){
        // callback(null,file,originalname)
        callback(null, Date.now() + path.extname(file.originalname))
    }
})

const upload= multer({storage})

module.exports=   upload