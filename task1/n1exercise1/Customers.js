db.createCollection('Customers', {validator: {$jsonSchema: {bsonType: 'object',title: 'Customers',required: ['name','address','telephone','email','registrationDate','purchases'],properties:{name:{bsonType: 'string'},address:{bsonType: 'object',title: 'object',required: ['street','number','city','postalCode','country'],properties:{street:{bsonType: 'string'},number:{bsonType: 'string'},floor:{bsonType: 'string'},door:{bsonType: 'string'},city:{bsonType: 'string'},postalCode:{bsonType: 'string'},country:{bsonType: 'string'}}},telephone:{bsonType: 'string'},email:{bsonType: 'string'},registrationDate:{bsonType: 'string'},recommendedBy:{bsonType: 'string'},purchases:{bsonType: 'object',title: 'object',required: ['customerID','glassesID','employeeID','orderDate'],properties:{customerID:{bsonType: 'objectId'},glassesID:{bsonType: 'objectId'},employeeID:{bsonType: 'objectId'},orderDate:{bsonType: 'date'},products:{bsonType: 'object',title: 'object',properties:{glasses:{bsonType: 'object',title: 'object',required: ['brand','glassColor','frameType','price'],properties:{brand:{bsonType: 'object',title: 'object',required: ['name','supplier'],properties:{name:{bsonType: 'string'},supplier:{bsonType: 'object',title: 'object',required: ['name','telephone','fax','nif','address'],properties:{name:{bsonType: 'string'},telephone:{bsonType: 'string'},fax:{bsonType: 'string'},nif:{bsonType: 'string'},address:{bsonType: 'object',title: 'object',required: ['street','number','city','postalCode','City'],properties:{street:{bsonType: 'string'},number:{bsonType: 'string'},floor:{bsonType: 'string'},door:{bsonType: 'string'},city:{bsonType: 'string'},postalCode:{bsonType: 'string'},City:{bsonType: 'string'}}}}}}},graduation:{bsonType: 'object',title: 'object',required: ['left','right'],properties:{left:{bsonType: 'string'},right:{bsonType: 'string'}}},glassColor:{bsonType: 'object',title: 'object',properties:{left:{bsonType: 'string'},right:{bsonType: 'string'}}},frameType:{bsonType: 'string'},price:{bsonType: 'double'}}}}}}}}}}});