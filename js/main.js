const call = new CallApi("https://637b699710a6f23f7fa80a5c.mockapi.io/api/todolist");
const render = new Render();
const renderTodo = () => {
    call.getItem()
    .then((result) => {
            render.todo(result.data, "todo")
            render.completed(result.data,"completed")
    })
    .catch((error) => { })
    .finally(() => { })
}
renderTodo()
document.getElementById("addItem").onclick = () => {
    const value = document.getElementById("newTask").value;
    if (value === "") {
        document.getElementById("newTask").focus();
        return
    }
    const info = new Info(value,false);
    call.setItem(info)
        .then(() => {
            renderTodo()
            document.getElementById("newTask").value = "";
            document.getElementById("newTask").focus();
        })
}
const deleteToDo = (id) => {
    call.DeleteItembyId(id)
            .then(() => {
                renderTodo()
            })
            .catch(()=>{
                console.log(error);
            })
}
const doneToDo = (id,mes,todo) => {
    const info = new Info(mes,todo);
    call.UpdateItemById(info,id)
        .then(() => {
            renderTodo()
        })

}
