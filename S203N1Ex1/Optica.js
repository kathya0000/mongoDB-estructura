
db.createCollection('Proveedor', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Proveedor',
      required: ['nombre', 'direccion', 'telefono', 'fax', 'nif'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        direccion: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['calle', 'numero', 'piso', 'puerta', 'ciudad', 'codigo_postal', 'pais'],
            properties: {
              calle: {
                bsonType: 'string'
              },
              numero: {
                bsonType: 'string'
              },
              piso: {
                bsonType: 'string'
              },
              puerta: {
                bsonType: 'string'
              },
              ciudad: {
                bsonType: 'string'
              },
              codigo_postal: {
                bsonType: 'string'
              },
              pais: {
                bsonType: 'string'
              }
            }
          }
        },
        telefono: {
          bsonType: 'int'
        },
        fax: {
          bsonType: 'int'
        },
        nif: {
          bsonType: 'int'
        }
      }
    }
  }
});
db.createCollection('Gafas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Gafas',
      required: ['marca', 'graduacion_cristales', 'color_montura', 'color_vidrio', 'tipo_montura', 'precio', 'Proveedor'],
      properties: {
        marca: {
          bsonType: 'string'
        },
        graduacion_cristales: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['cristal_izaquierdo', 'cristal_derecho'],
            properties: {
              cristal_izaquierdo: {
                bsonType: 'string'
              },
              cristal_derecho: {
                bsonType: 'string'
              }
            }
          }
        },
        color_montura: {
          bsonType: 'string'
        },
        color_vidrio: {
          bsonType: 'string'
        },
        tipo_montura: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['flotante', 'pasta', 'metalica'],
            properties: {
              flotante: {
                bsonType: 'string'
              },
              pasta: {
                bsonType: 'string'
              },
              metalica: {
                bsonType: 'string'
              }
            }
          }
        },
        precio: {
          bsonType: 'int'
        },
        Proveedor: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Cliente', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Cliente',
      required: ['empleado_vendedor', 'nombre', 'direccion_postal', 'telefono', 'e-mail', 'fecha_registro', 'Cliente'],
      properties: {
        empleado_vendedor: {
          bsonType: 'objectId'
        },
        nombre: {
          bsonType: 'string'
        },
        direccion_postal: {
          bsonType: 'string'
        },
        telefono: {
          bsonType: 'int'
        },
        e - mail: {
          bsonType: 'string'
        },
        fecha_registro: {
          bsonType: 'date'
        },
        Cliente: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Venta', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Venta',
      required: ['Cliente', 'Gafas', 'Empleado'],
      properties: {
        Cliente: {
          bsonType: 'objectId'
        },
        Gafas: {
          bsonType: 'objectId'
        },
        Empleado: {
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
      required: ['nombre_empleado'],
      properties: {
        nombre_empleado: {
          bsonType: 'string'
        }
      }
    }
  }
});
