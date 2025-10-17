const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const PORT = 5000; 

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/task-tracking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");

app.use("/users", userRoutes);
app.use("/api", taskRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
