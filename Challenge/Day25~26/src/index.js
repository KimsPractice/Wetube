import express from "express";
import request from "request";

const app = express();

app.get("/", (req, res) => {
  const {
    query: { url }
  } = req;

  const handleStatus = (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

    if (response.statusCode <= 445) {
      res.json({ up: true });
    } else {
      res.json({ up: false });
    }
    // console.log("body:", body); // Print the HTML for the Google homepage.
  };

  if (!url.includes("http://")) {
    request(`http://${url}`, handleStatus);
  } else {
    request(url, handleStatus);
  }
});

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
