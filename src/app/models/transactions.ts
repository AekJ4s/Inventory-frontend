import products from "./products"
import transactionTypes from "./transactionTypes"

export default class transactions {
    id = 0 
    productId = 0
    transactionTypesID = 0
    quantity = 0
    createDate = new Date()
    updateDate = new Date()
    isDelete = false

    transactionType = new transactionTypes 
    product = new products
}