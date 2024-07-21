const router = require("express").Router();
const boardRoutes = require("./board-routes");
const cardRoutes = require("./card-routes");
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const userRoutes = require("./user-routes");

router.use("/boards", boardRoutes);
router.use("/cards", cardRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/users", userRoutes);

// Exports
module.exports = router;