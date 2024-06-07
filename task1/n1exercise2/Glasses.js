db.createCollection('Glasses', {validator: {$jsonSchema: {bsonType: 'object',title: 'Glasses',required: ['brand','frame','price','provider','orders'],properties:{brand:{bsonType: 'object',title: 'object',required: ['name','id'],properties:{name:{bsonType: 'string'},id:{bsonType: 'objectId'}}},frame:{enum: },price:{bsonType: 'double'},provider:{bsonType: 'object',title: 'object',required: ['id','name','supplier'],properties:{id:{bsonType: 'objectId'},name:{bsonType: 'string'},supplier:{bsonType: 'object',title: 'object',required: ['name','telephone','fax','nif','address'],properties:{name:{bsonType: 'string'},telephone:{bsonType: 'string'},fax:{bsonType: 'string'},nif:{bsonType: 'string'},address:{bsonType: 'object',title: 'object',required: ['street','number','city','postalCode'],properties:{street:{bsonType: 'string'},number:{bsonType: 'string'},floor:{bsonType: 'string'},door:{bsonType: 'string'},city:{bsonType: 'string'},postalCode:{bsonType: 'string'}}}}}}},orders:{bsonType: 'array',items:{title: 'object',required: ['id','client','salesperson','orderDate'],properties:{id:{bsonType: 'objectId'},client:{bsonType: 'object',title: 'object',required: ['id','name','address','telephone','email','registrationDate'],properties:{id:{bsonType: 'objectId'},name:{bsonType: 'string'},address:{bsonType: 'object',title: 'object',required: ['street','number','city','postalCode'],properties:{street:{bsonType: 'string'},number:{bsonType: 'string'},floor:{bsonType: 'string'},door:{bsonType: 'string'},city:{bsonType: 'string'},postalCode:{bsonType: 'string'}}},telephone:{bsonType: 'string'},email:{bsonType: 'string'},registrationDate:{bsonType: 'date'}}},salesperson:{bsonType: 'object',title: 'object'},orderDate:{bsonType: 'date'}}}}}}}});