db.createCollection('Clientes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Clientes',
      required: ['nombre', 'apellido', 'direccion', 'codigoPostal', 'telefono', 'localidades'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        apellido: {
          bsonType: 'string'
        },
        direccion: {
          bsonType: 'string'
        },
        codigoPostal: {
          bsonType: 'string'
        },
        telefono: {
          bsonType: 'string'
        },
        localidades: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Pedidos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Pedidos',
      required: ['fechaHora', 'tipoEntrega', 'precioTotal', 'fechaHoraEntrega', 'Clientes', 'Empleado', 'Productos'],
      properties: {
        fechaHora: {
          bsonType: 'date'
        },
        tipoEntrega: {
          bsonType: 'string'
        },
        precioTotal: {
          bsonType: 'int'
        },
        fechaHoraEntrega: {
          bsonType: 'date'
        },
        Clientes: {
          bsonType: 'objectId'
        },
        Empleado: {
          bsonType: 'objectId'
        },
        Productos: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['cantidad'],
            properties: {
              cantidad: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});
db.createCollection('Productos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Productos',
      required: ['nombre', 'descripcion', 'imagen', 'precio', 'Categoria'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        descripcion: {
          bsonType: 'string'
        },
        imagen: {
          bsonType: 'binData'
        },
        precio: {
          bsonType: 'int'
        },
        Categoria: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Categoria', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Categoria',
      required: ['nombre'],
      properties: {
        nombre: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Tienda', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Tienda',
      required: ['direccion', 'codigoPostal', 'localidades', 'Provincia'],
      properties: {
        direccion: {
          bsonType: 'string'
        },
        codigoPostal: {
          bsonType: 'int'
        },
        localidades: {
          bsonType: 'objectId'
        },
        Provincia: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Empleado', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Empleado',
      required: ['nombre', 'apellido', 'nif', 'telefono', 'rol', 'Tienda'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        apellido: {
          bsonType: 'string'
        },
        nif: {
          bsonType: 'int'
        },
        telefono: {
          bsonType: 'int'
        },
        rol: {
          bsonType: 'string'
        },
        Tienda: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('localidades', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'localidades',
      required: ['nombre', 'Provincia'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        Provincia: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Provincia', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Provincia',
      required: ['nombre'],
      properties: {
        nombre: {
          bsonType: 'string'
        }
      }
    }
  }
});
