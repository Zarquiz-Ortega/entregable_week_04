const User = require("./User");
const Post = require('./Post')

//TODOS RELACION DE MUCHOS A MUCHOS (m-m)
User.belongsToMany(Post, {through: 'favorites'})
Post.belongsToMany(User, {through: 'favorites'})

//TODOS RELACIONES DE UNO A MUCHOS (n-m)
Post.belongsTo(User) //userID
User.hasMany(Post)
