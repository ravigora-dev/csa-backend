const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/email");

dotenv.config({ override: true });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("✅ Email API is running!");
});

app.use("/api", emailRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
