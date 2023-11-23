import { app } from "./app";
import cron from "node-cron";
import { ClientWalletController } from "./controllers/WalletsController/ClientWalletController/ClientWalletController";
import swaggerDocs from "./swagger";
app.listen(8080, () => {
  swaggerDocs(app);
  console.log("Server is running!");
  cron.schedule("0 0 4 1 * *", async () => {
    ClientWalletController.creditRoutine();
  });
});
