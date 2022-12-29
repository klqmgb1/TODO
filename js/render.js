class Render {
    todo(arr, id) {
        let content = "";
        arr.forEach(item => {
            if (!item.done) {
                content += `
                <div class="container-mes" >
            <p class="mes">${item.error}</p>
            <div>
            <a name="" onclick="deleteToDo('${item.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>
            <a name="" onclick="doneToDo('${item.id}','${item.error}',true)" class="btn btn-primary" href="#" role="button"><i class="fa-regular fa-circle-check"></i></a>
            </div>
            </div>
            `
            }
        });
        document.getElementById(id).innerHTML = content;
    }
    completed(arr,id) {
        let content = "";
        arr.forEach(item => {
            if (item.done) {
                content += `
                <div class="container-mes" >
            <p class="mes">${item.error}</p>
            <div>
            <a name="" onclick="deleteToDo('${item.id}')" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-trash-can"></i></a>
            <a name="" onclick="doneToDo('${item.id}','${item.error}',false)" class="btn btn-primary" href="#" role="button"><i class="fa-solid fa-circle-check" style="color:green"></i></a>
            </div>
            </div>
            `
            }
        });
        document.getElementById(id).innerHTML = content;
    }
}