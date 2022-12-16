class CallApi{
    constructor(url){
        this.url = url;
    }

    getItem(){
        return axios({ //! Trả về Promise chứa mảng data
            url:"https://637b699710a6f23f7fa80a5c.mockapi.io/api/todolist",
            method:"GET"
        })
    }
    getItemApi(id){
        return axios({ //! Trả về Promise chứa Item
            url:`https://637b699710a6f23f7fa80a5c.mockapi.io/api/todolist/${id}`,
            method:"GET"
        })
    }
    addItemApi(item){
        return axios({ //! Set dữ liệu, trả về Promise
            url:"https://637b699710a6f23f7fa80a5c.mockapi.io/api/todolist",
            method:"POST",
            data: item
        })
    }
    updateItemApi(item,id){
        return axios({ // !Cập nhật dữ liệu, trả về Promise
            url:`https://637b699710a6f23f7fa80a5c.mockapi.io/api/todolist${id}`,
            method:"PUT",
            data:item
        })
    }
    DeleteItemApi(id){
        return axios({ //! Xóa dữ liệu, trả về Promise
            url:`https://637b699710a6f23f7fa80a5c.mockapi.io/api/todolist/${id}`,
            method:"DELETE",
        })
    }
}