import express from "express";
import handlebars from "express-handlebars";
import bodyParser from "body-parser";
import { router } from "./routes.js";

const app = express();

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("views", "./views");
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

const host = "127.0.0.1";
const port = 5500;

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
