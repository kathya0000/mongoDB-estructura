db.createCollection('Usuario', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Usuario',
      required: ['e-mail', 'password', 'nombre_usuario', 'fecha_nacimiento', 'sexo', 'pais', 'codigo_postal'],
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
          bsonType: 'int'
        },
        sexo: {
          bsonType: 'string'
        },
        pais: {
          bsonType: 'string'
        },
        codigo_postal: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Video', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Video',
      required: ['titulo', 'descripcion', 'tamano', 'nombre_archivo', 'duracion', 'thumbnail', 'reproduciones', 'likes', 'dislike', 'estado', 'fecha_publicacion', 'Etiquetas', 'Usuario'],
      properties: {
        titulo: {
          bsonType: 'string'
        },
        descripcion: {
          bsonType: 'string'
        },
        tamano: {
          bsonType: 'string'
        },
        nombre_archivo: {
          bsonType: 'string'
        },
        duracion: {
          bsonType: 'string'
        },
        thumbnail: {
          bsonType: 'string'
        },
        reproduciones: {
          bsonType: 'int'
        },
        likes: {
          bsonType: 'int'
        },
        dislike: {
          bsonType: 'int'
        },
        estado: {
          bsonType: 'string'
        },
        fecha_publicacion: {
          bsonType: 'string'
        },
        Etiquetas: {
          bsonType: 'objectId'
        },
        Usuario: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Etiquetas', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Etiquetas',
      required: ['nombre_etiqueta'],
      properties: {
        nombre_etiqueta: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Canales', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Canales',
      required: ['nombre', 'descripcion', 'fecha_creacion', 'Usuario'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        descripcion: {
          bsonType: 'string'
        },
        fecha_creacion: {
          bsonType: 'date'
        },
        Usuario: {
          bsonType: 'objectId'
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
      required: ['Usuario', 'Canales'],
      properties: {
        Usuario: {
          bsonType: 'objectId'
        },
        Canales: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('LikesDislike', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'LikesDislike',
      required: ['tipo', 'fecha_hora', 'Usuario', 'Video'],
      properties: {
        tipo: {
          bsonType: 'string'
        },
        fecha_hora: {
          bsonType: 'date'
        },
        Usuario: {
          bsonType: 'objectId'
        },
        Video: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Playlists', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Playlists',
      required: ['nombre', 'fecha_creacion', 'estado', 'Usuario'],
      properties: {
        nombre: {
          bsonType: 'string'
        },
        fecha_creacion: {
          bsonType: 'string'
        },
        estado: {
          bsonType: 'string'
        },
        Usuario: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Comentario', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Comentario',
      required: ['texto', 'fecha_hora', 'Usuario', 'Video'],
      properties: {
        texto: {
          bsonType: 'string'
        },
        fecha_hora: {
          bsonType: 'string'
        },
        Usuario: {
          bsonType: 'objectId'
        },
        Video: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('likesDislikeComentarios', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'likesDislikeComentarios',
      required: ['tipos', 'fecha_Hora', 'Usuario', 'Comentario'],
      properties: {
        tipos: {
          bsonType: 'string'
        },
        fecha_Hora: {
          bsonType: 'string'
        },
        Usuario: {
          bsonType: 'objectId'
        },
        Comentario: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
