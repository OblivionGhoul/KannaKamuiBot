const mongoose = require('mongoose')

module.exports = async () => {
  await mongoose.connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  return mongoose
}
