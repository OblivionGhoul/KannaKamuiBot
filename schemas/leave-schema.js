const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true,
}

const leaveSchema = mongoose.Schema({
  _id: reqString,
  channelId: reqString,
  text: reqString,
})

module.exports = mongoose.model('leave-channels', leaveSchema)
