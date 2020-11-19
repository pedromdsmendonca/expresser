const express = require('express')

module.exports = class Expresser {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.models = [];
        this.repository = () => {
            throw 'repository not set'
        };
    }

    onPort(port){
        this.port = port;
        return this;
    }

    withInMemoryPersistence(options){
        //TODO
        this.repository = (model, id) => {
            return model + ':' + id;
        };

        return this;
    }

    crud(model){
        this.models.push(model);
        // this.app.get(`/${model.name}/:id`, function(req, res) {
        //     let id = req.params.id
        //     let ret = data[model.name].find(d => d.id == id)
        //     if(ret) res.send(ret)
        //     res.statusCode = 404
        //     res.send()
        // })

        return this;
    }

    seed(seed){
        this.data[model.name] = seed;

        return this;
    }

    start(){
        this.app.get('/', (req, res) => {
            res.send(this.models);       
        });

        this.app.get('/:model', (req, res) => {
            res.send(req.params.model);       
        });

        this.app.get('/:model/schema', (req, res) => {
            res.send(this.models.find(m => m.name == req.params.model) ?? 'not found');
        });

        this.app.get('/:model/:id', (req, res) => {
            res.send(this.repository(req.params.model, req.params.id));
        });

        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`);
        });
    }
}