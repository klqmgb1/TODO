var callApi = new CallApi();

function getEle(id) {
    return document.getElementById(id);
  }

const renderHTML = () => {
    callApi.getItem()
    .then((result) => {
        render.todo(result.data, "todo")
        render.completed(result.data,"completed")
    })
    .catch((error) => { 
        console.log(error);
    })
}
renderTodo()