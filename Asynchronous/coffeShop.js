/*
Place Order > Process Order > Do Payment > Confirm Order > Give Token
*/

function placeOrder(drink) {
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      console.log(`Order Place for ${drink}`);
      resolve(drink);
    } else if (drink === "tea") {
      console.log(`Order Place for ${drink}`);
      resolve(drink);
    } else {
      console.log(`Order Rejected for ${drink}`);
      resolve(drink);
    }
  });
}

function processOrder(drink) {
  let amount = 0;
  return new Promise(function (resolve, reject) {
    if (drink === "coffee") {
      amount = 150;
      console.log(`Amount for ${drink} is ${amount}`);
      resolve(amount);
    } else if (drink === "tea") {
      amount = 125;
      console.log(`Amount for ${drink} is ${amount}`);
      resolve(amount);
    } else {
      console.log(`Amount for ${drink} is ${amount}`);
      reject(amount);
    }
  });
}

function payOrder(amount) {
  let paymentSuccess = false;
  return new Promise(function (resolve, reject) {
    if (amount > 0) {
      paymentSuccess = true;
      console.log(`Amount Paid =  ${amount}`);
      resolve(paymentSuccess);
    } else {
      console.log(`Amount Paid =  ${amount}`);
      reject(paymentSuccess);
    }
  });
}

function confirmOrder(status) {
  let token = "";
  return new Promise(function (resolve, reject) {
    if (status === true) {
      token = "T" + Math.floor(Math.random() * 90000) + 10000;
      console.log(`Token No is ${token}`);
    } else {
      console.log(`No Token`);
    }
  });
}

async function ServeOrder() {
  try {
    let orderPlaced = await placeOrder("tea");
    console.log(orderPlaced);

    let processTheOrder = await processOrder(orderPlaced);
    console.log(processTheOrder);

    let payTheOrder = await payOrder(processTheOrder);
    console.log(payTheOrder);

    let confirmTheOrder = await confirmOrder(payTheOrder);
    console.log(confirmTheOrder);
  } catch (error) {
    console.log(error);
  }
}

/* Promise Call 
  placeOrder('coffee')
  .then(function(order){
    console.log(order)
    let processTheOrder = processOrder(order)
    return processTheOrder
  })
  .then(function(order){
    console.log(order)
    let payForOrder = payOrder(order)
    return payForOrder
  })
  .then(function(order){
    console.log(order)
    let confirmTheOrder = confirmOrder(order);
  })
  .catch(function(err){
    console.log(err)
  })

  */

/*

Order Place for coffee
coffee
Amount for coffee is 150
150
Amount Paid =  150
true
Token No is T8700710000

*/
