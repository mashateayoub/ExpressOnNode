const express = require("express");
const app = express();
const router = express.Router();


// const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use("/api_v01", router.get("/", async (req, res) => {
      res.json({
        status: 200,
        message: "ExpressJS server runs successfully on port 5000.",
      });
  })
)

// app.use("/api/product", product);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));