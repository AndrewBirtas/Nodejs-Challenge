const operation = require("../controller/controller.js");

module.exports = (app) => {

    app.post("/search", operation.search);

    app.post("/filter", operation.filter);

    app.post("/new", operation.new);
}