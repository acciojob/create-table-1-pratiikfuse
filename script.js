function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
	let tr = document.createElement("tr");

	let td1  = document.createElement("td");
	let td2  = document.createElement("td");

	td1.innerText = "new Cell1";
	td2.innerText = "new Cell2";

	tr.append(td1,td2);
	let tr1  = document.querySelectorAll("#sampleTable>tr")[0];
	table.insertBefore(tr,tr1);
	
}
