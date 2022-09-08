function addProduct() {

  // Getting and storing the value of product ID in id
  let id = document.getElementById("ID").value;

  // Getting Getting and storing the value of product name in name
  let name = document.getElementById("name").value;

  //Getting and storing the value of product price in price
  let price = document.getElementById("price").value;

  // Creating a table variable on which we will call insertRow function
  let table = document.getElementById("myTable");

  // Checking if the user is giving an empty field
  if(id=="" || name=="" || price==""){
    alert("Please fill the details !");
    return;
  }

  // Creating and inserting a row in the table
  let row = table.insertRow(0);

  // creating three coulumns and inserting in the row
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  // assigning the value of id,name and price in all the three coloumns
  cell1.innerHTML = id;
  cell2.innerHTML = name;
  cell3.innerHTML = price;

}
