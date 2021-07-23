const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userInputSchema = new Schema({
  paragrah: String,
  oneToDo: String,
  oneStatus: String,
  twoToDo: String,
  twoStatus: String,
  threeToDo: String,
  threeStatus: String,
  fourToDo: String,
  fourStatus: String,
  fiveToDo: String,
  fiveStatus: String,
  sixToDo: String,
  sixStatus: String,
  sevenToDo: String,
  sevenStatus: String,
  eightToDo: String,
  eightStatus: String,
  nineToDo: String,
  nineStatus: String,
  tenToDo: String,
  tenStatus: String
});

userInputSchema.set('timestamps', true);

const UserInput = model("UserInput", userInputSchema);

module.exports = UserInput;
