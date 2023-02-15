function nameMenuItem(dishName) {
  return `Delicious ${dishName}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    return ingredients;
  } else {
    ingredients.push(food);
    return ingredients;
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return `${price}` * 0.9;
}

function createRecipe(title, ingredients, type) {
  var myRecipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return myRecipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
