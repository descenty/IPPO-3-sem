import express from "express";
import { news } from "./data.js";

export const router = express.Router();

router.get("", (req, res) => {
  res.render("home", { title: "Greetings form Handlebars" });
});
router.get("/login", (req, res) => {
  res.render("login", { title: "Greetings form Handlebars" });
});
router.post("/login", (req, res) => {
  res.render("lk", req.body);
});
router.get("/news", (req, res) => {
  res.render("news", { news: news });
});
router.get("/news/:uid?", (req, res) => {
  res.render("newsPage", news.find((news) => news.id == req.params.uid));
});
