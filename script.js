// Order placed
//     After 2s -> Chef received the order and started preparing
//     After 10s -> Pizza Sauce added
//     After 5s -> First layer of cheeze added
//     After 12s -> Toppings added
//     After 5s -> Second layer of cheeze added
//     After 15s -> Pizza baked!
//     After 8s -> Oregano added and packed
//     After 2s -> Package received at counter
//     The order is ready and handed over to the Zomato guy!

let mainStatus = document.getElementById("main");

let createDiv = (mainStatus) => {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let img = document.createElement("img");
  mainStatus.appendChild(div);
  div.setAttribute("id", "order-status");
  div.setAttribute("class", "order-status");
  span.setAttribute("class", "title");
  span.setAttribute("id", "title");
  img.setAttribute("class", "img");
  img.setAttribute("id", "img");
  div.appendChild(span);
  div.appendChild(img);
};

let order = () => {
  setTimeout(() => {
    createDiv(mainStatus);
    // let orderStatus = document.getElementById("order-status");
    let orderId = document.getElementById("order-id").value;
    let orderStatusTitle = document.getElementsByClassName("title");
    let orderStatusImg = document.getElementsByClassName("img");
    mainStatus.style.display = "block";
    orderStatusTitle[0].innerText = `Order id : ${orderId} ,Chef received the order and started preparing`;
    orderStatusImg[0].src = "./assects/1.gif";
    setTimeout(() => {
      createDiv(mainStatus);
      let orderStatusTitle = document.getElementsByClassName("title");
      let orderStatusImg = document.getElementsByClassName("img");
      orderStatusTitle[1].innerText = `Pizza Sauce added`;
      orderStatusImg[1].src = "./assects/2.gif";
      setTimeout(() => {
        createDiv(mainStatus);
        let orderStatusTitle = document.getElementsByClassName("title");
        let orderStatusImg = document.getElementsByClassName("img");
        orderStatusTitle[2].innerText = `First layer of cheeze added`;
        orderStatusImg[2].src = "./assects/3.gif";
        setTimeout(() => {
          createDiv(mainStatus);
          let orderStatusTitle = document.getElementsByClassName("title");
          let orderStatusImg = document.getElementsByClassName("img");
          orderStatusTitle[3].innerText = `Toppings added`;
          orderStatusImg[3].src = "./assects/4.gif";
          setTimeout(() => {
            createDiv(mainStatus);
            let orderStatusTitle = document.getElementsByClassName("title");
            let orderStatusImg = document.getElementsByClassName("img");
            orderStatusTitle[4].innerText = `Second layer of cheeze added`;
            orderStatusImg[4].src = "./assects/5.gif";
            setTimeout(() => {
              createDiv(mainStatus);
              let orderStatusTitle = document.getElementsByClassName("title");
              let orderStatusImg = document.getElementsByClassName("img");
              orderStatusTitle[5].innerText = `Pizza baked!`;
              orderStatusImg[5].src = "./assects/6.gif";
              setTimeout(() => {
                createDiv(mainStatus);
                let orderStatusTitle = document.getElementsByClassName("title");
                let orderStatusImg = document.getElementsByClassName("img");
                orderStatusTitle[6].innerText = `Oregano added and Cutting going on...`;
                orderStatusImg[6].src = "./assects/7.gif";
                setTimeout(() => {
                  createDiv(mainStatus);
                  let orderStatusTitle = document.getElementsByClassName("title");
                  let orderStatusImg = document.getElementsByClassName("img");
                  orderStatusTitle[7].innerText = `Package received at counter`;
                  orderStatusImg[7].src = "./assects/8.gif";
                  setTimeout(() => {
                    window.location.reload();
                  }, 10000);
                }, 5000);
              }, 6000);
            }, 15000);
          }, 5000);
        }, 12000);
      }, 5000);
    }, 10000);
  }, 2000);
};
