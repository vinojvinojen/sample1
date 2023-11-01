const jsonserver = require('json-server');
const cors = require('cors'); // Import the cors 
const server = jsonserver.create();
const router=jsonserver.router("./db.json");
const middleware=jsonserver.defaults (
    {
        static:"./build"
    }
)


const app = express();

// Add the cors middleware to your Express app
app.use(cors());

// Your other Express app configurations and routes go here

// Start your Express server
const port = process.env.PORT || 5000;
server.use(middleware);
server.use(
    jsonserver.rewriter({
        "/api/*":"/$1",
    })
)

server.use(router)
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
