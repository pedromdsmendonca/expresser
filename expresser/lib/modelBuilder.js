module.exports = class ModelBuilder{
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