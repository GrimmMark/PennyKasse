
// const xhttp = new XMLHttpRequest();
// xhttp.onload = function() {
//   document.getElementById("demo").innerHTML = this.responseText;
//   }
// xhttp.open("GET", "ajax_info.txt", true);
// xhttp.send();
// }
// ---------------------------------------------------------------
// const xhttp = new XMLHttpRequest();
// xhttp.open("GET", "pricelist.json", true);
// xhttp.send();
// var list;
// var data;
// xhttp.onreadystatechange = function () {
//    if (this.readyState == 4 && this.status == 200) {
//       var response = JSON.parse(xhttp.responseText);
//       //  console.log(response);
//       data = response.pricelist;
//       list = response.Warenkorb;
//       //   console.log(data);
//       //   console.log(list);
//       const art_er = document.createElement("div");
//       const price_er = document.createElement("div");


//       list.forEach(function (newArticle) {
//          createArticle(newArticle)
//       });

//       function createArticle(article) {
//          const art_er = document.createElement("artList");
//          art_er.classList.add("article");
//          article.appendChild(art_er);
//       }

//    }
// };
// --------------------------------------------------------
// const  einkauf = [
//    {
//       "id": 40
//   },
//   {
//       "id": 4
//   },
//   {
//       "id": 14
//   },
//   {
//       "id": 24
//   },
//   {
//       "id": 7
//   },
//   {
//       "id": 39
//   },
//   {
//       "id": 20
//   },
//   {
//       "id": 11
//   },
//   {
//       "id": 27
//   },
//   {
//       "id": 17
//   },
//   {
//       "id": 7
//   },
//   {
//       "id": 5
//   },
//   {
//       "id": 6
//   },
//   {
//       "id": 12
//   },
//   {
//       "id": 9
//   },
//   {
//       "id": 1
//   },
//   {
//       "id": 1
//   },
//   {
//       "id": 1
//   }
// ];
// const data = [
//    {
//       "id": 0,
//       "article": "Große Tüte",
//       "MW": false,
//       "EW": false,
//       "price": 0.20
//   },
//   {
//       "id": 1,
//       "article": "Tüte",
//       "MW": false,
//       "EW": false,
//       "price": 0.10
//   },
//   {
//       "id": 2,
//       "article": "MW-Pfand",
//       "MW": false,
//       "EW": false,
//       "price": 0.15
//   },
//   {
//       "id": 3,
//       "article": "MW-Pfand",
//       "MW": false,
//       "EW": false,
//       "price": 0.25
//   },
//   {
//       "id": 4,
//       "article": "Red Bull 0,25l",
//       "MW": false,
//       "EW": true,
//       "price": 1.11
//   },
//   {
//       "id": 5,
//       "article": "Afri Cola 0,2l",
//       "MW": true,
//       "EW": false,
//       "price": 0.15
//   },
//   {
//       "id": 6,
//       "article": "Vitrexx 1,5l",
//       "MW": false,
//       "EW": true,
//       "price": 0.79
//   },
//   {
//       "id": 7,
//       "article": "Coca-Cola 0,33l",
//       "MW": false,
//       "EW": true,
//       "price": 0.99
//   },
//   {
//       "id": 8,
//       "article": "Energy 0,33l",
//       "MW": false,
//       "EW": true,
//       "price": 0.59
//   },
//   {
//       "id": 9,
//       "article": "Stardrink 1,5l",
//       "MW": false,
//       "EW": true,
//       "price": 0.59
//   },
//   {
//       "id": 10,
//       "article": "Energy 0,5l",
//       "MW": false,
//       "EW": true,
//       "price": 0.99
//   },
//   {
//       "id": 11,
//       "article": "Coca-Cola 1,25l",
//       "MW": false,
//       "EW": true,
//       "price": 1.11
//   },
//   {
//       "id": 12,
//       "article": "Adelholzener 0,75l",
//       "MW": true,
//       "EW": false,
//       "price": 0.89
//   },
//   {
//       "id": 13,
//       "article": "Adelholzener Citrus 0,75l",
//       "MW": true,
//       "EW": false,
//       "price": 0.99
//   },
//   {
//       "id": 14,
//       "article": "Mio 0,5l",
//       "MW": true,
//       "EW": false,
//       "price": 0.89
//   },
//   {
//       "id": 15,
//       "article": "Haribo 200g",
//       "MW": false,
//       "EW": false,
//       "price": 1.29
//   },
//   {
//       "id": 15,
//       "article": "Herrenschokolade 100g",
//       "MW": false,
//       "EW": false,
//       "price": 1.29
//   },
//   {
//       "id": 16,
//       "article": "Mars 65g",
//       "MW": false,
//       "EW": false,
//       "price": 1.29
//   },
//   {
//       "id": 17,
//       "article": "Almette 200g",
//       "MW": false,
//       "EW": false,
//       "price": 1.29
//   },
//   {
//       "id": 18,
//       "article": "Miree 150g",
//       "MW": false,
//       "EW": false,
//       "price": 1.29
//   },
//   {
//       "id": 19,
//       "article": "Emmentaler 200g",
//       "MW": false,
//       "EW": false,
//       "price": 1.99
//   },
//   {
//       "id": 20,
//       "article": "Hot Wheels",
//       "MW": false,
//       "EW": false,
//       "price": 1.99
//   },
//   {
//       "id": 21,
//       "article": "Teelichter 20",
//       "MW": false,
//       "EW": false,
//       "price": 1.99
//   },
//   {
//       "id": 22,
//       "article": "Teelichter 50",
//       "MW": false,
//       "EW": false,
//       "price": 2.99
//   },
//   {
//       "id": 23,
//       "article": "Emmentaler 200g",
//       "MW": false,
//       "EW": false,
//       "price": 1.99
//   },
//   {
//       "id": 24,
//       "article": "Schwarzwälder Schinken 200g",
//       "MW": false,
//       "EW": false,
//       "price": 2.69
//   },
//   {
//       "id": 25,
//       "article": "Block Schokolade 200g",
//       "MW": false,
//       "EW": false,
//       "price": 1.99
//   },
//   {
//       "id": 26,
//       "article": "Hackfleisch gemischt 500g",
//       "MW": false,
//       "EW": false,
//       "price": 4.99
//   },
//   {
//       "id": 27,
//       "article": "Hackfleisch Rind 500g",
//       "MW": false,
//       "EW": false,
//       "price": 5.99
//   },
//   {
//       "id": 28,
//       "article": "Hähnchen Brust 400g",
//       "MW": false,
//       "EW": false,
//       "price": 3.99
//   },
//   {
//       "id": 29,
//       "article": "Hähnchen Brust 1000g",
//       "MW": false,
//       "EW": false,
//       "price": 7.99
//   },
//   {
//       "id": 30,
//       "article": "Retro-Shorts",
//       "MW": false,
//       "EW": false,
//       "price": 7.99
//   },
//   {
//       "id": 31,
//       "article": "Nur-Der Socken",
//       "MW": false,
//       "EW": false,
//       "price": 7.99
//   },
//   {
//       "id": 32,
//       "article": "Nur-Der Socken",
//       "MW": false,
//       "EW": false,
//       "price": 7.99
//   },
//   {
//       "id": 33,
//       "article": "Parmiggiano 30m 175g",
//       "MW": false,
//       "EW": false,
//       "price": 5.99
//   },
//   {
//       "id": 34,
//       "article": "Grana Padano 12m 200g",
//       "MW": false,
//       "EW": false,
//       "price": 4.99
//   },
//   {
//       "id": 33,
//       "article": "KFZ Ladestation",
//       "MW": false,
//       "EW": false,
//       "price": 5.99
//   },
//   {
//       "id": 34,
//       "article": "Varta AA 8Stk",
//       "MW": false,
//       "EW": false,
//       "price": 5.99
//   },
//   {
//       "id": 35,
//       "article": "Energizer AA 8Stk",
//       "MW": false,
//       "EW": false,
//       "price": 4.99
//   },
//   {
//       "id": 36,
//       "article": "MaxEnergy AA 8Stk",
//       "MW": false,
//       "EW": false,
//       "price": 1.99
//   },
//   {
//       "id": 37,
//       "article": "Zigaretten 20 Stk",
//       "MW": false,
//       "EW": false,
//       "price": 7.00
//   },
//   {
//       "id": 38,
//       "article": "Zigaretten 25 Stk",
//       "MW": false,
//       "EW": false,
//       "price": 9.00
//   },
//   {
//       "id": 39,
//       "article": "Toilette Samtweich",
//       "MW": false,
//       "EW": false,
//       "price": 5.99
//   },
//   {
//       "id": 40,
//       "article": "Toilette Recycling",
//       "MW": false,
//       "EW": false,
//       "price": 4.99
//   }
// ];
// const article_er = document.createElement("div");
// const price_er = document.createElement("div");
// const artName = document.querySelector('data.article');
// const artPrice = document.querySelector('data.price');
// const source = document.querySelector('data.id');
// const source_id = document.querySelector('einkauf.id');
// einkauf.forEach(function (newArticle)  {
//    source_id = document.getElementById(einkauf.getAttribute() {
//       document.query
//    })
//    createArticle(newArticle);
//  });

// function createArticle(article) {

// }
// -------------------------------------------------------------

const list_box = document.querySelector("#scanned");
const price_box = document.querySelector("#scannedprice");
var xhttp = new XMLHttpRequest();
const button_pay = document.querySelector("#pay_now");
const button_received = document.querySelector("#received");
const input = document.querySelector("#input");

let output = "";
let change = 0;
let total = 0;
button_pay.addEventListener("click", (e) => {
    alert("Please pay now, enter amount!");
});

button_received.addEventListener("click", (e) => {
    // console.log(input.value);
    // console.log(total.toFixed(2));
    change = input.value - total.toFixed(2);
    // console.log(change);
    document.getElementById("change").innerText = change.toFixed(2);
});



xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // runs only with live server
        // console.log(xhttp.responseText);

        // transfer the response from JSON into object
        var response = JSON.parse(xhttp.responseText);
        // console.log(response);

        var bucket = response.bucket;
        console.log(bucket);

        var articles = response.articles;
        console.log(articles);



        
        for (let i = 0; i < articles.length; i++) {
            // console.log(articles[i].article);

            // ######### innerHTML method
            // output +=
            //   "<li>" + articles[i].article +
            //   " --------"+articles[i].price+ " EUR" + "</li>";
            //   console.log(output);
            // document.getElementById("scanned").innerHTML = output;

            output = articles[i].article;
            // " --------------" + articles[i].price + "EUR";
            total += articles[i].price;
            document.getElementById("total").innerText = total.toFixed(2);


            const list_item = document.createElement('li');
            list_item.classList.add('article');
            list_item.innerText = output;
            list_box.appendChild(list_item);

            output = articles[i].price + " EUR";

            const price_item = document.createElement("li");
            price_item.classList.add('price');
            price_item.innerText = output;
            price_box.appendChild(price_item);

            button_pay.addEventListener("click", (e) => {
                alert("Please pay now, enter amount!");
            });



        }
    };

};
// instead of local file "people.json" you can enter URL of API
xhttp.open("GET", "database.json", true);
xhttp.send();

