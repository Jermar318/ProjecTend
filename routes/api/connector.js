const router = require("express").Router();
const boardRoutes = require("./board-routes");
const cardRoutes = require("./card-routes");
const userRoutes = require("./user-routes");
const commentRoutes = require("./comment-routes");
const authRoutes = require("./auth-routes");

router.use("/users", userRoutes);
router.use("/boards", boardRoutes);
router.use("/cards", cardRoutes);
router.use("/comments", commentRoutes);
router.use("/auth", authRoutes);

// Exports
module.exports = router;