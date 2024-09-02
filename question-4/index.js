const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null, './uploads')
    },
    filename:function(req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage:storage})

app.post('/upload',upload.single('profile'), (req,res)=>{
    console.log(req.body);
    console.log(req.file)
})

app.get('/', (req,res)=>{
    return res.render('homepage');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
