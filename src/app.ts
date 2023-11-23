import express from "express";
import cors from "cors";
import { clientRouter } from "./routes/clientRoutes";
import { userRouter } from "./routes/userRoutes";
import { clientWalletRouter } from "./routes/clientWalletRoutes";
import { transactionRouter } from "./routes/transactionsRoutes";
import { productRouter } from "./routes/productRoutes";
import { categoryRouter } from "./routes/categoryRoutes";
import { userWalletRouter } from "./routes/userWalletRoutes";
import { orderRouter } from "./routes/orderRoutes";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/client", express.json(), clientRouter);
app.use("/user", express.json(), userRouter);
app.use("/clientwallet", express.json(), clientWalletRouter);
app.use("/transactions", express.json(), transactionRouter);
app.use("/userwallet", express.json(), userWalletRouter);
app.use("/product", express.json(), productRouter);
app.use("/category", express.json(), categoryRouter);
app.use("/order", express.json(), orderRouter);

app.get("/", (request, response) => {
  return response.status(201).send("Hello World!");
});

export { app };
