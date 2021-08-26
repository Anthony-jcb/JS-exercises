const app = require("fastify")({ logger: false });
const { join } = require("path");
const templatesFolder = "templates";

app.register(require("fastify-file-upload"), {
  createParentPath: true,
});
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

app.post("/upload", {
  schema: {
    summary: "upload file",
    body: {
      type: "object",
      properties: {
        file: { type: "object" },
      },
      required: ["file"],
    },
  },
  handler: async (req, reply) => {  
    let response;
    try {
      const file = await req.body.file;
      const filepath = join(__dirname, "saved", file.name);
      file.mv(filepath)
      response = {
        name: file.name,
        path: filepath,
        rejected: file.truncated,
        status: 200,
        statusText: "File has been uploaded",
        ok: true,
      };
    } catch (error) {
      response = {
        status: 400,
        statusText: "File has not been uploaded",
        ok: false,
      };
    }
    return reply.send(response).code();
  },
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
