import catigories from "./catigories"

export default class products {
    id = 0 
    name = ""
    description = ""
    categoryId = 0
    stockQuantity = 0
    price = 0
    createDate = new Date()
    updateDate = new Date()
    isDelete = false
    category = new catigories

}