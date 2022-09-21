const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const handler = async (req, res) => {
  const { username, password } = req.body.input.objects;
  const finduser = require('../checker/findusername')
  const { data, error } = await finduser({username })
  const user = data["users"][0]

  if (!user) {
    return res.status(400).json({
      message: 'incorrect username or password please enter again'
    })
  }
  else {
    const value = await bcrypt.compareSync(password, user.password)
    if (!value) {
      return res.status(400).json({
        message: "incorrect password"
      })
    }
    console.log("szxdfgchvjbknlmkjhcj"+user.roles);
    const token = jwt.sign({
      "https://hasura.io/jwt/claims":
      {
        "x-hasura-allowed-roles": ["doctors","recieptionists","admins"],
        "x-hasura-default-role": `${user.roles}`,
        "x-hasura-user-id": `${user.id}`
      }
    }
    ,process.env.SECRET_KEY)
    console.log(token)
    return res.json({
      accessToken: token,
      id:user.id,
      roles:user.roles
    })
  }
};
module.exports = handler