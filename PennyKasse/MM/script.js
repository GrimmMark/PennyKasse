const list_box = document.querySelector("#scanned");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // runs only with live server
    // console.log(xhttp.responseText);

    // transfer the response from JSON into object
    var response = JSON.parse(xhttp.responseText);
    // console.log(response);

    var articles = response.articles;
    console.log(articles);

    let output = "";
    for (let i = 0; i < articles.length; i++) {
      // console.log(articles[i].article);

      // ######### innerHTML method
      // output +=
      //   "<li>" + articles[i].article +
      //   " --------"+articles[i].price+ " EUR" + "</li>";
      //   console.log(output);
      // document.getElementById("scanned").innerHTML = output;

      output = articles[i].article +
        " --------------"+ articles[i].price + "EUR";

      const list_item = document.createElement('li');
      list_item.classList.add('article');
      list_item.innerText = output;
      list_box.appendChild(list_item);
    }
  };

};
// instead of local file "people.json" you can enter URL of API
xhttp.open("GET", "database.json", true);
xhttp.send();