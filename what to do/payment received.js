const mongoose = require('mongoose');

const PaymentReceivedSchema = new mongoose.Schema({
  receivedFrom: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PaymentReceived', PaymentReceivedSchema);
