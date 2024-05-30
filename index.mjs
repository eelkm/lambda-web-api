import express from "express";
import serverless  from "serverless-http";
import example_routes from "./routes/example_route.mjs";

var app = express()

app.get('/api', (req, res) => {
  res.send('Hello World! :)');
});

app.use('/api/test', example_routes);

if (process.env.DEVELOPMENT){
  const port = 8000;
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

export const handler = serverless(app)

