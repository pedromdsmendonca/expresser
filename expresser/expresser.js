const express = require('express');

var data = {}

class Expresser {
    constructor(){
        this.app = express()
        this.port = 5000
    }

    onPort(port){
        this.port = port
        return this
    }

    crud(model, seed = []){
        data[model.name] = seed

        this.app.get(`/${model.name}`, function(req, res) {
            res.send(data[model.name])
        })
        this.app.get(`/${model.name}/:id`, function(req, res) {
            let id = req.params.id
            let ret = data[model.name].find(d => d.id == id)
            if(ret) res.send(ret)
            res.statusCode = 404
            res.send()
        })

        return this
    }

    start(){
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`);
        })
    }
}

module.exports = Expresser