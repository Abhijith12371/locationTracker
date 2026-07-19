import express from "express";

const app = express();

app.get("/track", async (req, res) => {
  // Get visitor IP
  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded
    ? forwarded.split(",")[0].trim()
    : req.socket.remoteAddress;

  console.log("Visitor IP:", ip);

  // Use an IP geolocation provider here
  // to convert the IP into an approximate location.

  res.send("Page opened successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});