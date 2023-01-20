const { userInfo, bookInfo } = require('../Modal/modal')


const adduserinfo = async (req, res) => {
  const userinfo = req.body;
  try {
    const getexistscontact = await userInfo.findOne({ Email: userinfo.Email }).catch((err) => console.log(err));
    if (!getexistscontact) {
      new userInfo(userinfo).save();
      return res.status(200).send("User added...");
    } else {
      return res.status(409).send("Email already exists ...");
    }
  } catch (err) {
    res.status(503).send("Error");
  }
};

const loginuser = async (req, res) => {
  const data = req.body;
  try {
    const getcontact = await userInfo.findOne({ Email: data.Email });
    if (getcontact.Email === data.Email && data.Password === getcontact.Password) {
      return res.status(200).json({ message: "Login Successful" })
    } else {
      res.status(404).json({ message: "Check login details" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getBooklist = async (req, res) => {
  const data = req.body;
  try {
    const getcontact = await bookInfo.find();
    if (getcontact) {
      return res.status(200).json({ list: getcontact })
    } else {
      res.status(404).json({ message: "Check login details" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// const addBookInfo 

const addBookInfo = async (req, res) => {
  const bookinfo = req.body;
  try {
    new bookInfo(bookinfo).save();
    return res.status(200).send("Book added...");

  } catch (err) {
    res.status(503).send("Error");
  }
};



const removebooks = async (req, res) => {
  const bookinfo_id = req.params.id;
  try {
    const remove = await bookInfo.findByIdAndDelete({_id: bookinfo_id});
    return res.status(200).send("Book Deleted...");

  } catch (err) {
    res.status(503).send("Error");
  }
};

const getbookinfo = async (req, res) => {
  const bookinfo_id = req.params.id;
  
  try {
    const getbook = await bookInfo.findById({_id: bookinfo_id});
    if(getbook){
      return res.status(200).json({info:getbook});
    }

  } catch (err) {
    res.status(503).send("Error");
  }
};

// editbooksInfo
const editbooksInfo = async (req, res) => {
  const bookinfo_id = req.params.id;
  
  try {
    let bookdata = await bookInfo.findOneAndUpdate(
      { id: bookinfo_id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          title: req.body.title,
        },
      },
      { new: true }
      );
      res.status(200).send(bookdata);
    } catch (err) {
      res.status(503).send("Error");
    }
};

module.exports = { adduserinfo, loginuser, getBooklist, addBookInfo, removebooks, getbookinfo, editbooksInfo };