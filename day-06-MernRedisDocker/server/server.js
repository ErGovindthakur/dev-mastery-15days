import app from "./src/app.js";

const port = process.env.PORT || 8080;

const startServer = async() => {
     app.listen(port,()=>{
          console.log(`server is running at http://localhost:${port}`)
     })
}

startServer();