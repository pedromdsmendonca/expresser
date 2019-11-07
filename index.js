const expresser = require('./expresser/expresser.js');

var app = new expresser()

app.onPort(5001)
.crud({ name: 'todo'}, [
    {
        id: 1,
        content: 'something'
    },
    {
        id: 2,
        content: 'some other thing'
    }
])
.crud({ name: 'user'}, [
    {
        id: 1,
        name: 'john'
    },
    {
        id: 2,
        name: 'jane'
    }
])
.crud({ name: 'test'}, [
    {
        id: 1,
    },
    {
        id: 2,
    }
])
.start()