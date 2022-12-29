class CallApi {
    constructor(url){
        this.url = url;
    }
    getItem(){
        return axios({ 
            url:this.url,
            method:"GET"
        })
    }
    getItemById(id){
        return axios({ 
            url:`${this.url}/${id}`,
            method:"GET"
        })
    }
    setItem(item){
        return axios({ 
            url:this.url,
            method:"POST",
            data: item
        })
    }
    UpdateItemById(item,id){
        return axios({ 
            url:`${this.url}/${id}`,
            method:"PUT",
            data:item
        })
    }
    DeleteItembyId(id){
        return axios({ 
            url:`${this.url}/${id}`,
            method:"DELETE",
        })
    }
}