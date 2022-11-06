const  contactlist  = require('../Modal/modal')
 

   const AddContact = async(req, res) => {
    const {contact} = req.body;
    const lists =  contact?.map( async(list) => {
      const newlist = (list?.toString().replace(/^\s+|\s+$/g,''));
      const getexistscontact = await contactlist.findOne({contact:newlist.slice(-10)}).catch((err)=> console.log(err));
        if(!getexistscontact){
          return new contactlist({contact:newlist.slice(-10)}).save();
        } 
    });
  
    try {
      const a1 = lists
      return res.status(200).send("Number entered successfully");
    } catch (err) {
      res.status(503).send("Error");
    }
  };

  const getContact = async(req, res) => {
    try {
      const getcontact = await contactlist.find();
      res.send(getcontact)
      // res.json({getcontact});
      return res.status(200)
    } catch (error) {
            res.status(404).json({message:error.message});         
    }
};

  module.exports = {AddContact, getContact};