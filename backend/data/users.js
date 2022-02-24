import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Kenya Fernanda",
    email: "fer@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Enrique Cazares",
    email: "enrique@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
