const express = require("express")
const cors = require("cors")
const port = 8080
const app = express()

require("./server/config/mongoose.config");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require("./server/routes/products.routes")
routes(app)

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));