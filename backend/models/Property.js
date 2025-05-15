import mongoose from '../config/conn.js';

const PropSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'owner',
    // required: true
  },
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  property_type: {
    type: String,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: "/assets/images/img_4.jpg"
  },
  deposit: {
    type: Number,
    default: 0
  },
  amenities: {
    wifi: { type: Boolean, default: false },
    airConditioner: { type: Boolean, default: false },
    parking: { type: Boolean, default: false },
    tv: { type: Boolean, default: false },
    kitchen: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    pool: { type: Boolean, default: false },
    security: { type: Boolean, default: false },
    balcony: { type: Boolean, default: false },
    heating: { type: Boolean, default: false }
  }
}, { timestamps: true });

const Prop = mongoose.model('property', PropSchema);

export default Prop;
