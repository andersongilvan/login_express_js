import mongoose from "mongoose"


async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://torresdinho8:W4ZKKXbLmdXEQ6Y9@cluster0.ibtkyge.mongodb.net/projet?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection
}

export default conectaNaDatabase