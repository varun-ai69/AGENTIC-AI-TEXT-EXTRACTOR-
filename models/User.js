// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  // BASIC INFO
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true,
    select: false   
  },

  

  isActive: {
    type: Boolean,
    default: true
  },

  lastLogin: Date,
  refreshTokens: [
    {
      token: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],


}, { timestamps: true });


userSchema.pre('save', async function(){

const userData = this
if (!this.isModified("password")) return;
try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(userData.password , salt)
    userData.password = hashPassword
   
} catch (error) {
    throw error;
}
})

module.exports = mongoose.model("User", userSchema);
