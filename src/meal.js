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

function addIngredients(extraFood, ingredientsArray) {
  if (ingredientsArray.includes(extraFood)) {
    return extraFood;
  } else {
    ingredientsArray.push(extraFood);
    return extraFood;
  }
}

function formatPrice(price) {
  return price.length = `$${price}`;
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
