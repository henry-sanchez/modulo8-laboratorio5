db.auth('mongo_admin_user', 'mongo_admin_pass');

db = db.getSiblingDB('diplomado');

db.createUser({
  user: 'user_db',
  pwd: 'password_db',
  roles: [
    {
      role: 'readWrite',
      db: 'diplomado_db',
    },
  ],
});
