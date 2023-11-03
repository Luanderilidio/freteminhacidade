const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

module.exports = function () {
  var estudants = [];

  var users = []

  var typesWorkBody = [
    { id: uuidv4(), bodywork: "Baú" },
    { id: uuidv4(), bodywork: "Munck" },
    { id: uuidv4(), bodywork: "Grade baixa – Carga seca" },
    { id: uuidv4(), bodywork: "Grade alta – Graneleira" },
    { id: uuidv4(), bodywork: "Caçamba" },
    { id: uuidv4(), bodywork: "Prancha" },
    { id: uuidv4(), bodywork: "Plataforma" },
    { id: uuidv4(), bodywork: "Carroceria fechada" },
    { id: uuidv4(), bodywork: "Baú frigorífico" },
    { id: uuidv4(), bodywork: "Sider" },
    { id: uuidv4(), bodywork: "Carroceria especial" },
    { id: uuidv4(), bodywork: "Caçamba basculante" },
    { id: uuidv4(), bodywork: "Canavieira" },
    { id: uuidv4(), bodywork: "Florestal" },
    { id: uuidv4(), bodywork: "Boiadeira" },
    { id: uuidv4(), bodywork: "Tanque" },
    { id: uuidv4(), bodywork: "Poliguindaste" },
  ];

  return {
    estudants: estudants,
    workbody: typesWorkBody,
    users: users
  };
};
