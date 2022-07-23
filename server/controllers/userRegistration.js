// Controller used by route /api/users/register

const { getUserByEmail, createNewUser } = require('../services');

const { hashPassword } = require('../helpers');

module.exports = async (req, res) => {
  const email = req.body.email;

  let user = await getUserByEmail(email);

  if (user) {
    return res.json({ result: false, msg: "user already exists" }); 
  }

  const hash = await hashPassword(req.body.password);

  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email,
    hash
  }

  user = await createNewUser(userData);

  console.log(user);

  res.json({ result: true, msg: "added new user" }); 
}
