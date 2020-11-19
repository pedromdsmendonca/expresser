const {expresser, modelBuilder} = require('./expresser');

var app = new expresser()
var builder = new modelBuilder()

app.onPort(5001)
.withInMemoryPersistence()
.crud(
    builder
    .create('user')
    .number('age')
    .build()
)
// .withInMemoryPersistence()
.start()