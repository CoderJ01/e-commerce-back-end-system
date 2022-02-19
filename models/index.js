// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey:'category_id',
  onDelete: 'SET NULL'
});

// Categories have many Products
Category.hasMany(Product, {
foreignKey: 'category_id',
onDelete: 'SET NULL'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'buy_purchase',
  foreignKey: 'product_id',
  onDelete: 'SET NULL'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'buy_purchase',
  foreignKey: 'tag_id',
  onDelete: 'SET NULL'
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
  onDelete: 'SET NULL'
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
  onDelete: 'SET NULL'
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
