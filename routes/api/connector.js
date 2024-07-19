const router = require("express").Router();
const boardRoutes = require("./board-routes");
const cardRoutes = require("./card-routes");
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");

router.use("/boards", boardRoutes);
router.use("/cards", cardRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

// Exports
module.exports = router;