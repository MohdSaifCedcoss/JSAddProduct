function addProduct() {
  let arr = [];
  let id = document.getElementById("ID").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let table = document.getElementById("myTable");
//   table="<th>Product id\b\b\b\b\</th><th>Product Name\b\b\b\b<\th>Price";
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = id;
  cell2.innerHTML = name;
  cell3.innerHTML = price;
//   document.getElementById("myTable").innerHTML=id;
}
