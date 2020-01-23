const express = require('express')

module.exports = class Expresser {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000
        this.data = {}
    }

    onPort(port){
        this.port = port
        return this
    }

    crud(model){
        this.lastModel = model

        this.data[model.name] = []

        let data = this.data;

        this.app.get(`/${model.name}/schema`, function(req, res) {
            res.send(model)
        })

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

    seed(seed){
        this.data[model.name] = seed

        return this
    }

    start(){
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`);
        })
    }
}