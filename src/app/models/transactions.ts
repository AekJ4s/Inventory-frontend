import products from "./products"
import transactionTypes from "./transactionTypes"

export default class transactions {
    id = 0 
    prodcutId = 0
    transactionTypesID = 0
    quantity = ""
    createDate = new Date()
    updateDate = new Date()
    isDelete = false

    transactionType = new transactionTypes 
    product = new products
}