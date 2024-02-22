const joi =require("joi")

const validateCreateBook=(book)=>{
    const schema=joi.object({
        title:joi.string().min(3).max(100).required(),
        author:joi.string().min(3).max(100),
        genre:joi.string().min(3).max(100),
        price:joi.number()
    })
    return schema.validate(book)

}

const validateUpdateBook=(bookIdEditService)=>{
    const schema=joi.object({
        title:joi.string().min(3).max(100).required(),
        author:joi.string().min(3).max(100),
        genre:joi.string().min(3).max(100),
        price:joi.number()
    })
    return schema.validate(bookIdEditService)

}

module.exports={
    validateCreateBook,
    validateUpdateBook
}
