const app = require("fastify")({ logger: true });
const path = require("path");
const resolve = require("path").resolve;
const templatesFolder = "templates";

//app.register(helmet);

app.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
  includeViewExtension: true,
  templates: path.join(__dirname, templatesFolder),
});

/* app.register(require("fastify-static"), {
  root: path.join(__dirname, "/public"),
  prefix: "/public/",
}); */

app.get("/", async (req, reply) => {
  const name = req.query.name || "Anonymous";
  return reply.view("index", { name });
});

const start = async () => {
  try {
    await app.listen(3000);
    console.log("Server listening on port 3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
