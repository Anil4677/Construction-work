const mongoose = require('mongoose');

const SendMoneySchema = new mongoose.Schema({
  next: { type: String, required: true },
  detail: { type: String, required: true },
  amount: { type: Number },
  assetName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SendMoney', SendMoneySchema);
