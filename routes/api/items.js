const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');


//@route GET api/items
//@desc Get All Items
//@access Public

router.get('/', (req,res)=>{
    Item.find()
        .sort({date:-1})
        .then(items => res.json(items))
});


//@route POST API/ITEMS
//@desc crear un Post
//@access Public

router.post('/', (req,res)=>{
    const newItem= new Item({
        sku:req.body.sku, 
        name:req.body.name,
        cantidad:req.body.cantidad,
        precio:req.body.precio,
        descripcion:req.body.descripcion,
        imagen:req.body.imagen
    })

    newItem.save().then(item => res.json(item))
});


//@route DELETE API/ITEMS
//@desc borrar un Item
//@access Public

router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}))
});


module.exports = router;