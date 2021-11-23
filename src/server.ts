import "reflect-metadata";
import express from "express";

import {router} from "./routes"

import "./database";

const app = express();

app.use(express.json());
app.use(router);


app.get('/test', (request, response) => {
  
  return response.send("Ola com o método GET")
})
app.post('/test-post', (request, response) => {
  return response.send("Ola com o método POST")
})

app.listen(3000, () => console.log("server is running"))