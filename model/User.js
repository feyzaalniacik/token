const {Schema, model} = require("mongoose")

const User = new Schema ({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    roles : [{type: String, ref: 'Role'}] // users kaydı olurken role ile bağlantılı olmak zorunda. bu sebeple referans olarak role sayfası alınır.
})