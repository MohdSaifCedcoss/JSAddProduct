function addProduct() {
  let id = document.getElementById("ID").value;
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let table = document.getElementById("myTable");
  if(id=="" || name=="" || price==""){
    alert("Please fill the details !");
    return;
  }
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = id+"<br>";
  cell2.innerHTML = name+"<br>";
  cell3.innerHTML = price+"<br>";
}
