import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Enrique Cazares",
    email: "enrique@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
