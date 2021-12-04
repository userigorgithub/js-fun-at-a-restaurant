function takeOrder(newOrder, myOrders) {
  myOrders.push(newOrder);
  if (myOrders.length > 3) {
    myOrders.pop(newOrder);
  }
}

function refundOrder(number, myOrders) {
  for (var i = 0; i < myOrders.length; i++) {
    if (number === myOrders[i].orderNumber) {
      myOrders.splice(i,1)
    }
  }
}
/////////PLAY

function listItems(myOrders) {
  var itemNames = [];
  for (var i = 0; i < myOrders.length; i++) {
    itemNames.push(myOrders[i].item);
  }
  return itemNames.join(', ');
}
//////////PLAY

function searchOrder(myOrders, food) {
  var haveOrder = false;
  for (var i = 0; i < myOrders.length; i++) {
    if (myOrders[i].item === food) {
      haveOrder = true;
    }
  }
  return haveOrder;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
