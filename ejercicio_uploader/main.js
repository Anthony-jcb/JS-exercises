const app = require("fastify")({ logger: false });
const { join } = require("path");
const templatesFolder = "templates";

//app.register(require("fastify-helmet"));
//app.register(require("fastify-formbody"));
//app.register(require("fastify-multipart"), { attachFieldsToBody: true });
app.register(require("fastify-file-upload"));

app.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
  includeViewExtension: true,
  root: join(__dirname, templatesFolder),
});

app.register(require("fastify-static"), {
  root: join(__dirname, "/public"),
  prefix: "/public/",
});

app.get("/", async (req, reply) => {
  return reply.view("index", {});
});

app.post('/upload', function (req, reply) {
  const files = req.raw.files
  console.log(files)
  let fileArr = []
  for(let key in files){
    fileArr.push({
      name: files[key].name,
      mimetype: files[key].mimetype
    })
  }
  reply.send(files)
})

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
