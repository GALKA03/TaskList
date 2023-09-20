import express, { Request, Response, NextFunction } from "express";
import sequelize from "./db/database";
import router from "./router/index";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { dirname,join } from 'path';
require("dotenv").config();

const PORT = 8088;

export const app = express();



app.use(express.json());
app.use(cookieParser())

app.use(cors({
  origin: 'http://localhost:3000', // or your frontend's origin
  credentials: true,  // this is crucial
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
// app.use('/', express.static(join(__dirname, 'public')))
app.use("/", router());



app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
// app.post('/users', async (req, res) => {
//     try {
//         const user = await createUser(req.body);
//         return res.json(user);
//     } catch (error) {
//         console.error("Error:", error);  // Log the error
//         return res.status(500).json({ error: error.message });  // Send back the error message
//     }
// });

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL Connection has been established successfully.");
    
    await sequelize.sync();
    console.log("✅ Database synchronized.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}/`);
    });

  } catch (err) {
    console.error("❌ Unable to start the server:", err);
  }
};

startServer();


   
