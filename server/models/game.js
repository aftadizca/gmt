const { Schema, model }  = require('mongoose');

const gameSchema = new Schema({
    title: { type: String, required: true },
    genre: String,
    rating: Number,
    status: String,
  });
  
const Game = model("Game", gameSchema);
module.exports = Game;