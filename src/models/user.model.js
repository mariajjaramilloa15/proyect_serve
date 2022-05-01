const user = {
    name: {
      type: String,
      require: true,
      min: 3,
    },
    lastname: {
      typer: String,
      require: true,
      min: 3,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    active: {
      type: Boolean,
      require: true,
    },
  };
  
  module.export = user;