const Joi = require('joi');
const express = require('express');
const router = express.Router();



router.get('/:id' ,async (req,res) => {
    const genre = await Customer.findById(req.params.id);
    if(!customer) return res.status(404).send('The genre with the given id was not found .');
     res.status(200).send(customer);
});
router.post('/' ,async (req , res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
       
   let customer = new Genre({
     name: req.body.name ,
     phone:req.body.phone,
     isGold:req.body.isGold
    });
   genre = await customer.save();
   res.send(customer);
    });
    
router.put('/:id',async (req,res) => {
    const { error } = validateCustomer(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const customer = await Customer.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
    if(!customer) return res.status(404).send('The genre with the given id was not found .');

res.send(customer);
});

router.delete('/:id',async (req,res)=>{
   
    const customer = await Genre.findByIdAndRemove(req.params.id);
    if(!customer) res.status(404).send('The genre with the given id was not found .');
    res.send(customer);
});
function validateCustomer(customer){
    const schema ={
        name: Joi.string().min(5).max(50).required(),
        phone:Joi.string().min(5).max(50).required(),
        isGold:Joi.boolean() 
    };
    return Joi.validate(customer,schema);
};
module.exports = router;