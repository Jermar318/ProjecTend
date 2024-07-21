const router = require("express").Router();
const cardRoutes = require("./card-routes");
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const userRoutes = require("./user-routes");

router.use("/cards", cardRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/users", userRoutes);

// Exports
module.exports = router;