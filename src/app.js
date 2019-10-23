import express from "express"
import { prisma } from "../generated/prisma-client"

const app = express()

app.get("/", async (req, res) => {
  res.send("Hello world")
})

export default app
