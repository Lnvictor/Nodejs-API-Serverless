module.exports = async function (context, req) {
        let modelsMod = require('../models/index');
        let Product = modelsMod.getModel();

        Product.sync();
        let id = context.bindingData.id;
        let jsonif = await Product.findAll({attribute: ['name', 'desc', 'value']});
        
    // API 
    if (req.method == 'POST'){
        let rname = req.body['name'];
        let rdesc = req.body["desc"];
        let rvalue = req.body["value"];
        
        Product.create({
            name: rname,
            desc: rdesc,
            value: rvalue
        });

    }

    
    if (id != null){
        jsonif = await Product.findByPk(id);
        
        if (req.method == "PUT"){
            let rname = req.body['name'];
            let rdesc = req.body["desc"];
            let rvalue = req.body["value"];

            await Product.update(
                {name: rname, desc: rdesc, value: rvalue},
                {where: {id: id}}
            );
            jsonif = await Product.findByPk(id);
        }

        if (req.method == 'DELETE'){
            await Product.destroy({
                where: {id:id}
            });
            jsonif = {"message": "Object deleted"};
        }
    }
    
    context.res = {
        body: jsonif,
        headers: {
            'Content-Type': 'application/json'
        }
    };

}