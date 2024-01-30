const app = require("express")();
const { Client } = require("pg");
const cors = require("cors");
var multer = require("multer");
var upload = multer();

app.use(upload.array());
app.use(
  cors({
    origin: [
      "http://localhost:8000",
      "http://localhost:3000",
      "https://rma.tillpistiak.com",
    ],
  })
);

app.get("/dogs", async (req, res) => {
  const client = new Client();
  client.connect();
  const result = await client.query("SELECT * FROM dogs");
  client.end();
  res.json(result.rows);
});

app.get("/comments", async (req, res) => {
  const dog = Number.parseInt(req.query.dog);
  const query = !Number.isNaN(dog)
    ? `SELECT * FROM comments WHERE dog_id = ${req.query.dog} ORDER BY comment_date DESC`
    : "SELECT * FROM comments";
  const client = new Client();
  client.connect();
  const result = await client.query(query);
  client.end();
  res.json(result.rows);
});

app.post("/comments", async (req, res) => {
  if (process.env.SERVER_MODE !== "readonly") {
    const client = new Client();
    client.connect();
    await client.query("begin");
    let { response, error } = await client.query(
      "INSERT INTO comments (comment, title, dog_id, author) VALUES ($1, $2, $3, $4)",
      [req.body.comment, req.body.title, req.body.dog, req.body.user]
    );
    if (!error) {
      await client.query("commit");
    }
    client.end();
  }
  res.sendStatus(202);
});

const port = process.env.PORT || 8004;

app.listen(port, () => console.log(`app listening on ${port}`));
