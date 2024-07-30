const value = document.getElementById("form-control").value;

console.log(value);
//nenu ikkada input box nunchi value teestunna
const task = document.getElementById("button-addon2");


var table = document.getElementById("table");
function s() {
    console.log(document.getElementById("form-control").value);
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(1);
    row.setAttribute("id","table2")
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    // Add some text to the new cells:
    cell1.innerHTML = '1';
    cell2.textContent = `value`;
    cell3.innerHTML = `<button type="button" class="btn btns btn-edit btn-primary"><i class="ri-edit-line"></i></button> &nbsp <button type="button" class="btn btns btn-bin btn-primary"><i class="ri-delete-bin-line"></i></button>`
    const btns = document.querySelectorAll(".btns");
    let count = 1
    console.log(btns);
    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const x = e.currentTarget.classList;
            console.log(x);
            if (x.contains("btn-edit")) {
                document.getElementById("table2").setAttribute('contenteditable', 'true')
            } 
            else if(x.contains("btn-bin")) {
                // console.log(count);
                document.getElementById("table").deleteRow(count)
                count++;  
            }
        })
    })
}

// const node = document.createElement("td");

// const textnode = document.createTextNode('hi');

// node.appendChild(textnode);

// document.getElementById("table").appendChild(node);






