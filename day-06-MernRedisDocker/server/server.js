import app from "./src/app.js";
import { connectDb } from "./src/config/db.js";

const port = process.env.PORT || 8080;

const startServer = async() => {
     connectDb();
     app.listen(port,()=>{
          console.log(`server is running at http://localhost:${port}`)
     })
}

startServer();