const users = [
  {
    id: 1,
    name: "Paulo Peixoto",
    email: "teste@hotmail.com",
  },

  {
    id: 2,
    name: "Mario",
  },

  {
    id: 3,
    name: "Diego",
    email: "teste@hotmail.com",
  },
  {
    id: 4,
    name: "Robson",
    email: "teste@hotmail.com",
  },
];

class UserController {
  store(req, res) {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Nome E-mail são obrigatorios..." });
    }

    const newid = users[users.length - 1].id + 1;

    const newUser = {
        id: newid,
        name: name,
        email: email
    }

    users.push(newUser);

    return res.status(200).json({ message: "User created" });
  }

  index(req, res) {
    return res.status(200).json(users);
  }

  show() {}

  update() {}
}

module.exports = new UserController();
