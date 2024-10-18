const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const app=express();
mongoose.connect('mongodb+srv://siddharamsutar23:yZLH2nXbyqbjwiS3@cluster0.qng92.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(function () {
    console.log('db connected');
}).catch(function (e) {
    console.log(e);
});
const PORT=process.env.PORT || 5000;
app.use(cors({
    origin : 'http://localhost:5173/',
    methods : ['GET','POST','DELETE','PUT'],
    allowedHeaders : [
        'Content-Type',
        'Authorization',
        'Cache-control',
        'Expires',
        'Pragma'
    ],
    credentials : true
}));
app.use(cookieParser());
app.use(express.json());
app.listen(PORT,()=>{
    console.log('server running on'+PORT);
    
})
