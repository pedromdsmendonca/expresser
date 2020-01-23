const express = require('express');

var data = {}

class Expresser {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 5000
    }

    onPort(port){
        this.port = port
        return this
    }

    crud(model){
        this.lastModel = model

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
        data[model.name] = seed

        return this
    }

    start(){
        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`);
        })
    }
}

class ModelBuilder{
    constructor(){
        this.props = {}
    }

    create(name){
        this.name = name
        this.props = {}

        return this
    }

    number(name){
        this.props[name] = 'number'
        this.lastProp = name

        return this
    }

    build(){
        if(this.name == undefined) throw 'model needs a name'

        let model = {
            name: this.name
        }

        for(var prop in this.props){
            model[prop] = this.props[prop]
        }
        
        return model
    }
}

module.exports = { 
    expresser: Expresser,
    modelBuilder: ModelBuilder
}