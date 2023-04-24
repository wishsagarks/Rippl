// models/Admin.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

AdminSchema.pre('save', async function (next) {
  // if (this.isModified('password') || this.isNew) {
  //   const salt = await bcrypt.genSalt(10);
  //   const hash = await bcrypt.hash(this.password, salt);
  //   this.password = hash;
  // }
  // next();
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

AdminSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
