db.createCollection('Usuario', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Usuario',
      required: ['e-mail', 'password', 'nombre_usuario', 'fecha_nacimiento', 'sexo', 'pais', 'codigo_postal', 'tipo_de_usuario'],
      properties: {
        e - mail: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string'
        },
        nombre_usuario: {
          bsonType: 'string'
        },
        fecha_nacimiento: {
          bsonType: 'string'
        },
        sexo: {
          bsonType: 'string'
        },
        pais: {
          bsonType: 'string'
        },
        codigo_postal: {
          bsonType: 'int'
        },
        tipo_de_usuario: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Suscripciones', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Suscripciones',
      required: ['fecha_inicio', 'fecha_renovacion', 'Usuario', 'tarjeta de credito', 'PayPal', 'Pagos'],
      properties: {
        fecha_inicio: {
          bsonType: 'date'
        },
        fecha_renovacion: {
          bsonType: 'date'
        },
        forma_pago: {
          bsonType: 'string'
        },
        Usuario: {
          bsonType: 'objectId'
        },
        tarjeta de credito: {
          bsonType: 'objectId'
        },
        PayPal: {
          bsonType: 'objectId'
        },
        Pagos: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Pagos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Pagos',
      required: ['fecha', 'numero_orden', 'total'],
      properties: {
        fecha: {
          bsonType: 'date'
        },
        numero_orden: {
          bsonType: 'int'
        },
        total: {
          bsonType: 'int'
        }
      }
    }
  }
});
db.createCollection('Playlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Playlist',
      required: ['titulo', 'numero_canciones', 'fecha_creacion', 'estado', 'fecha_eliminacion', 'Usuario'],
      properties: {
        titulo: {
          bsonType: 'string'
        },
        numero_canciones: {
          bsonType: 'int'
        },
        fecha_creacion: {
          bsonType: 'date'
        },
        estado: {
          bsonType: 'string'
        },
        fecha_eliminacion: {
          bsonType: 'date'
        },
        Usuario: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Canciones', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Canciones',
      required: ['titulo', 'duracion', 'nun_reproduciones', 'Albunes'],
      properties: {
        titulo: {
          bsonType: 'string'
        },
        duracion: {
          bsonType: 'int'
        },
        nun_reproduciones: {
          bsonType: 'int'
        },
        Albunes: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Albunes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Albunes',
      required: ['titulo', 'year_publicacion', 'imagen_portada', 'Artista'],
      properties: {
        titulo: {
          bsonType: 'string'
        },
        year_publicacion: {
          bsonType: 'date'
        },
        imagen_portada: {
          bsonType: 'binData'
        },
        Artista: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Artista', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Artista',
      required: ['nombre', 'imagen'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        imagen: {
          bsonType: 'binData'
        }
      }
    }
  }
});
db.createCollection('tarjeta de credito', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'tarjeta de credito',
      required: ['numero_tarjeta', 'caducidad', 'codigo_segurida'],
      properties: {
        numero_tarjeta: {
          bsonType: 'int'
        },
        caducidad: {
          bsonType: 'date'
        },
        codigo_segurida: {
          bsonType: 'int'
        }
      }
    }
  }
});
db.createCollection('PayPal', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'PayPal',
      required: ['usuario_PayPal'],
      properties: {
        usuario_PayPal: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Canciones_Playlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Canciones_Playlist',
      required: ['Usuario', 'Canciones', 'Playlist'],
      properties: {
        fecha_agregado: {
          bsonType: 'date'
        },
        Usuario: {
          bsonType: 'objectId'
        },
        Canciones: {
          bsonType: 'objectId'
        },
        Playlist: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Artista_favorito', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Artista_favorito',
      required: ['Usuario', 'Artista'],
      properties: {
        Usuario: {
          bsonType: 'objectId'
        },
        Artista: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Favorito_musica', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Favorito_musica',
      required: ['Albunes_favorito', 'Canciones_favorita'],
      properties: {
        Albunes_favorito: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              nombre: {
                bsonType: 'string'
              }
            }
          }
        },
        Canciones_favorita: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              nombre: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});
