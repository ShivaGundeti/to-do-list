
var arr = [];
let id = 1;
function s() {
    const input_value = document.getElementById("input-value").value;
    arr.push({ id: id++, task: input_value })
Table()

}

function deleteTask(id){

arr=arr.filter(ele=>ele.id!=id)
console.log(arr);
Table()
}
function editTask(){

}


function Table(){
    const table = document.getElementById("demo-table");
    let html_data = `<table width="100%"><tr>
     <th width="20%">#</th>
            <th width="60%">Task</th>
            <th width="20%">Action</th>
</tr>`
for (let item of arr) {
html_data += `<tr><td>${item.id}</td><td>
${
true?'<input type="text" value='+item.task+'>':item.task
}
</td><td>
<button type="button" class="btn btn-primary ms-3" onclick="editTask(${item.id})"><i class="ri-edit-line"></i></button>  <button type="button" class="btn btn-primary" onclick="deleteTask(${item.id})"><i class="ri-delete-bin-line"></i></button>
</td></tr>`
}
html_data += "</table>"
table.innerHTML = html_data
}




