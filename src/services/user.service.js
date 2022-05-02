const UserModel = require("../models/user.model");
const Boom = require("@hapi/boom");

class UserService {
  //Promesas y funciones asincronicas
  //Una funcion asincronica devuelve una promesa
  //Js es un lenguaje ejecuta un hilo -> solo hace una cosa a la vez
  async createUser(user) {
    user.save();
    return user;
  }

  async listUser() {
    return UserModel.find();
  }

  //Funcion que devuelve la promesa
  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(UserModel.find());
      }, 3000);
    });
  }

  async showUser() {
    return UserModel.findById({ _id: UserId });
  }

  async editUser(UserId, name, lastname, email, password, active) {
    return UserModel.findById({ _id: UserId }).then((UserFind) => {
      if (!UserFind) throw Boom.notFound("No se encontro el Usuario");
      return UserModel.updateOne(
        { UserId },
        { name, lastname, email, password, active }
      );
    });
  }

  async removeUser() {
    const user_remove = UserModel.findById({ _id: UserId });
    if (!superheroId) throw Boom.notFound("No se encontro el Usuario");
    UserModel.deleteOne(user_remove);
    return UserModel.deleteOne(user_remove);
  }
}

module.exports = UserService;
