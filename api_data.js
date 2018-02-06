define({ "api": [  {    "type": "post",    "url": "/buyCADs",    "title": "Compra cartões azuis digitais (CADs)",    "name": "BuyCADs",    "group": "CAD",    "version": "0.0.1",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          },          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "quantity",            "description": "<p>Quantidade de cartões que serão comprados (1-99).</p>"          },          {            "group": "Parameter",            "type": "Object",            "optional": false,            "field": "card",            "description": "<p>Informações do cartão do cliente.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "card.number",            "description": "<p>Número do cartão com 16 dígitos.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "card.holder_name",            "description": "<p>Nome impresso no cartão.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "card.expiration_date",            "description": "<p>Data de expiração do cartão no formato MMYY.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "card.cvv",            "description": "<p>Código cvv do cartão.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "total_cads",            "description": "<p>Quantidade de CADs após a compra.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Compra realizada com sucesso\",\n  \"total_cads\": 9\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>Requisição inválida.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "  HTTP/1.1 400 Bad Request\n {\n  \"success\": false,\n  \"message\": \"Compra não pode ser realizada.\",\n  \"errors\": [\n      \"\\\"number\\\" must be a credit card\"\n  ]\n}",          "type": "json"        }      ]    },    "filename": "routes/cad-routes.js",    "groupTitle": "CAD"  },  {    "type": "get",    "url": "/getCADs",    "title": "Recupera a quantidade atual de CADs do usuário",    "name": "GetCADs",    "group": "CAD",    "version": "0.0.1",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          },          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "total_cads",            "description": "<p>Quantidade atual de CADs.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n {\n   \"success\": true,\n   \"message\": \"Consulta realizada com sucesso\",\n   \"total_cads\": 9\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Unauthorized",            "description": "<p>Não autorizado.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized",          "type": "json"        }      ]    },    "filename": "routes/cad-routes.js",    "groupTitle": "CAD"  },  {    "type": "post",    "url": "/editUser",    "title": "Edita um usuário",    "name": "EditUser",    "group": "User",    "version": "0.0.2",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Senha antiga, restrição para alterar os dados.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>Nome completo.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "email",            "description": "<p>Email único do usuário.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "birthday",            "description": "<p>Data de nascimento obedescendo o formato DD-MM-YYYY.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "phone",            "description": "<p>Telefone do usuário.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "newPassword",            "description": "<p>Nova senha contendo de 4 a 20 caracteres.</p>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          },          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"message\": \"Usuário atualizado com sucesso.\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": "<p>A atualização não pode ser processada.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "    HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Usuário não pode ser atualizado.\",\n    \"errors\": [\n        \"Email inválido\",\n        \"Senha deve conter 4 a 20 caracteres\",\n    ]\n  }",          "type": "json"        }      ]    },    "filename": "routes/user-routes.js",    "groupTitle": "User"  },  {    "type": "get",    "url": "/getPhoto",    "title": "Recupera a foto de perfil enviada pelo usuário",    "name": "GetPhoto",    "group": "User",    "version": "0.0.1",    "description": "<p>Download de foto do usuário no formato .png.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          }        ]      }    },    "filename": "routes/user-routes.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/login",    "title": "Login de um usuário",    "name": "Login",    "group": "User",    "version": "0.0.3",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "cpf_cnpj",            "description": "<p>CPF ou CNPJ (apenas números) do usuário.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Senha.</p>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Objeto contento informações do usuário.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Login realizado com sucesso.\",\n    \"user\": {\n        \"name\": \"Rod\",\n        \"cpf_cnpj\": \"81074868625\",\n        \"email\": \"rod@gmail.com\",\n        \"birthday\": \"06-05-1994\",\n        \"phone\": \"85999999999\",\n        \"total_cads\": 6,\n        \"token\": \"JWT eyJ...\"\n    }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Unauthorized",            "description": "<p>CPF/CNPJ ou senha incorretos.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "    HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": \"O CPF/CNPJ ou a senha não estão corretos.\"\n  }",          "type": "json"        }      ]    },    "filename": "routes/user-routes.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/registerUser",    "title": "Registro de um usuário",    "name": "RegisterUser",    "group": "User",    "version": "0.0.2",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Nome completo.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Senha contendo de 4 a 20 caracteres.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email único do usuário.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "cpf_cnpj",            "description": "<p>CPF ou CNPJ único e válido.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "birthday",            "description": "<p>Data de nascimento obedescendo o formato DD-MM-YYYY.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "phone",            "description": "<p>Telefone do usuário.</p>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"message\": \"Usuário cadastrado com sucesso.\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": "<p>O cadastro não pode ser processado.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "    HTTP/1.1 422 Unprocessable Entity\n{\n    \"success\": false,\n    \"message\": \"Usuário não pode ser cadastrado.\",\n    \"errors\": [\n        \"Data de nascimento inválida\",\n        \"CPF ou CNPJ inválido\",\n        \"Email inválido\",\n        \"Senha muito grande\",\n        \"Nome não informado\"\n    ]\n  }",          "type": "json"        }      ]    },    "filename": "routes/user-routes.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/uploadPhoto",    "title": "Troca a foto de perfil do usuário",    "name": "UploadPhoto",    "group": "User",    "version": "0.0.1",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "File",            "optional": false,            "field": "photo",            "description": "<p>Foto enviada em form-data</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "  HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Foto atualizada com sucesso.\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>Sintax da requisição inválida.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"success\": false,\n    \"message\": \"Requisição inválida\",\n    \"errors\": [\n      \"Unexpected field\"\n    ]\n  }",          "type": "json"        }      ]    },    "filename": "routes/user-routes.js",    "groupTitle": "User"  },  {    "type": "post",    "url": "/consultVehiclePlate",    "title": "Consulta um veículo pela placa",    "name": "ConsultVehiclePlate",    "group": "Vehicle",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "licensePlate",            "description": "<p>Placa do veículo a ser consultada</p>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          },          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "vehicle",            "description": "<p>Objeto contendo informações sobre o veículo.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n   {\n     \"success\": \"true\",\n     \"message\": \"Consulta realizada com sucesso.\",\n     \"vehicle\": {\n       \"year\": 2017,\n       \"modelYear\": 2017,\n       \"color\": \"CINZA\",\n       \"model\": \"FIESTA\",\n       \"brand\": \"FORD\",\n       \"city\": \"Fortaleza\",\n       \"state\": \"CE\",\n       \"chassis\": \"9BWZZZ377VT000009\",\n       \"message\": \"Busca gerada aleatoriamente\",\n       \"licensePlate\": \"AAA6666\",\n       \"consultedTime\": 1516717341976\n     }\n   }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>Erro na sintax do request.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"success\": false,\n    \"message\": \"Consulta não pode ser realizada.\",\n    \"errors\": [\n        \"Formato de placa incorreto\"\n    ]\n  }",          "type": "json"        }      ]    },    "filename": "routes/vehicle-routes.js",    "groupTitle": "Vehicle"  },  {    "type": "post",    "url": "/deleteVehicle",    "title": "Deleta um veículo e desvincula do usuário",    "name": "DeleteVehicle",    "group": "Vehicle",    "version": "0.0.1",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "licensePlate",            "description": "<p>Placa do veículo a ser deletado e desvinculado</p>"          }        ]      }    },    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          },          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n   {\n     \"success\": true,\n     \"message\": \"Veículo deletado com sucesso.\"\n   }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>A deleção não pode ser processada.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 400 Bad Request\n   {\n     \"success\": false,\n     \"message\": \"Veículo não pode ser deletado.\",\n     \"errors\": [\n         \"Veículo não vinculado ao usuário\"\n     ]\n   }",          "type": "json"        }      ]    },    "filename": "routes/vehicle-routes.js",    "groupTitle": "Vehicle"  },  {    "type": "get",    "url": "/getVehicles",    "title": "Recupera os veículos vinculados ao usuário",    "name": "GetVehicles",    "group": "Vehicle",    "version": "0.0.2",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          },          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "vehicles",            "description": "<p>Objeto contendo informações sobre o veículo.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n   {\n       \"success\": true,\n       \"message\": \"Veículos recuperados com sucesso\",\n       \"vehicles\": [\n           {\n             \"year\": 2017,\n             \"modelYear\": 2017,\n             \"color\": \"CINZA\",\n             \"model\": \"FIESTA\",\n             \"brand\": \"FORD\",\n             \"city\": \"Fortaleza\",\n             \"state\": \"CE\",\n             \"chassis\": \"9BWZZZ377VT000009\",\n             \"message\": \"Busca gerada aleatoriamente\",\n             \"licensePlate\": \"AAA6666\",\n             \"consultedTime\": 1516717341976,\n             \"parkedAt\": {\n               \"lat\": null,\n               \"lng\": null\n             },\n               \"parked\": false\n             }\n       ]\n   }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "Unauthorized",            "description": "<p>Não autorizado.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized",          "type": "json"        }      ]    },    "filename": "routes/vehicle-routes.js",    "groupTitle": "Vehicle"  },  {    "type": "post",    "url": "/registerVehicle",    "title": "Registra um veículo e vincula ao usuário",    "name": "RegisterVehicle",    "description": "<p>OBS.: O veículo deve ter sido consultado anteriormente.</p>",    "group": "Vehicle",    "version": "0.0.2",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "optional": false,            "field": "Authorization",            "description": "<p>Json Web Token para autenticação.</p>"          },          {            "group": "Header",            "optional": false,            "field": "Content-Type",            "description": "<p>(application/json).</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "licensePlate",            "description": "<p>Placa do veículo a ser registrada e vinculada</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "type",            "description": "<p>Número representando tipo do veículo { CAR = 0, BUS = 1, TRUCK = 2, MOTORCYCLE = 3, OTHER = 4 }</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "success",            "description": "<p>Resultado da operação.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>Informações referentes ao resultado da operação.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n   {\n     \"success\": true,\n     \"message\": \"Veículo cadastrado e vinculado ao usuário.\"\n   }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UnprocessableEntity",            "description": "<p>O registro não pode ser processado.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 422 Unprocessable Entity\n   {\n     \"success\": false,\n     \"message\": \"Veículo não pode ser cadastrado.\",\n     \"errors\": [\n         \"Veículo não consultado\"\n     ]\n   }",          "type": "json"        }      ]    },    "filename": "routes/vehicle-routes.js",    "groupTitle": "Vehicle"  }] });
