import jwt from "jsonwebtoken";
import Seeker from "../models/Seeker.js"; 

let SeekerProfile = async (req, res) => {
    console.log(req.headers);
   
    if (req.headers.authorization) {
        let token = req.headers.authorization;
        let obj = jwt.decode(token, process.env.ENC_KEY);
        if (obj) {
          let id = obj.id;
          let result = await Seeker.find({ _id: id });
          res.send({ success: true,result});
        } else {
          res.send({ success: false });
        }
      } else {
        res.send({ success: false });
      }
};

export { SeekerProfile };
