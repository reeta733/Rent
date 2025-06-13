import express from 'express';
import allRoutes from './routes/allRoutes.js';
import cors from 'cors'
import fileUpload from 'express-fileupload';
import path from 'path'
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.use(fileUpload())
app.use((express.static(path.resolve() + "/assets")));


app.use(allRoutes);
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})