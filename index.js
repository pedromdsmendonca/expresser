const {expresser, modelBuilder} = require('./expresser/expresser.js');

var app = new expresser()
var builder = new modelBuilder()

app.onPort(5001)
.crud(
    builder
    .create('user')
    .number('age')
    .build()
)
.start()