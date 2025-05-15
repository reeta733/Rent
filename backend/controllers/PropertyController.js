import Prop from "../models/Property.js";
import jwt from "jsonwebtoken";

let SaveProperty = async (req, res) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization;
    let obj = jwt.decode(token, process.env.ENC_KEY);

    if (req.body.deposit === " ") {
      delete req.body.deposit;
    }

    if (!req.body.amenities || req.body.amenities === " ") {
      req.body.amenities = {};
    }

    if (obj) {
      let id = obj.id;
      req.body.owner_id = id;
      await Prop.create(req.body);
      res.send({ success: true });
      // console.log("Saved Property:", req.body);
    } else {
      res.status(401).send({ success: false, message: "Invalid token" });
    }
  } else {
    res.status(401).send({ success: false, message: "No token provided" });
  }
};

let getAllProperty = async (req, res) => {
  let result = await Prop.find();
  res.send(result);
};

let getAllPropertyByOwner = async (req, res) => {
  if (req.headers.authorization) {
    let token = req.headers.authorization;
    let obj = jwt.decode(token, process.env.ENC_KEY);
    if (obj) {
      let id = obj.id;
      let result = await Prop.find({ owner_id: id });
      res.send(result);
      // console.log("Owner Properties:", result);
      console.log(obj);
    } else {
      res.status(401).send({ success: false, message: "Invalid token" });
    }
  } else {
    res.send({ success: false, message: "No token provided" });
  }
};

let getAllPropertyWithOwner = async (req, res) => {
  let result = await Prop.find().populate("owner_id").exec();
  res.send(result);
};
let getAllPropertyByID = async (req, res) => {
  let id = req.params.id;
  let result = await Prop.find({ _id: id }).populate("owner_id").exec();
  res.send(result);
};

let getAllPropertyByOwnerAdmin = async (req, res) => {


  let ownerid = req.params.id;
  // console.log(ownerid);

  let result = await Prop.find({ owner_id: ownerid });
  res.send(result);
  // console.log(result[0]);
  
};

export {
  SaveProperty,
  getAllProperty,
  getAllPropertyByOwner,
  getAllPropertyWithOwner,
  getAllPropertyByID,
  getAllPropertyByOwnerAdmin,
};
