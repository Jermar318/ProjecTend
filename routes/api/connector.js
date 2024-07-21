const router = require("express").Router();
const boardRoutes = require("./board-routes");
const cardRoutes = require("./card-routes");
const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const taskRoutes = require("./task-routes");
const userRoutes = require("./user-routes");
//const commentRoutes = require("./comment-routes");

router.use("/boards", boardRoutes);
router.use("/cards", cardRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);
//router.use("/comments", commentRoutes);

// Exports
module.exports = router;