const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
});

UserSchema.pre('save', (next) => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  // Set a value for createdAt only if it is null
  if (!this.created) {
    this.created = now
  }
  
  // Call the next function in the pre-save chain
  next()
});

UserSchema.pre('findOneAndUpdate', (next) => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
  next()
});


UserSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

UserSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

UserSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

UserSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

var User = mongoose.model("User", UserSchema);
module.exports = { User };