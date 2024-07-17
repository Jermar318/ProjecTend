const router = require("express").Router();
const boardRoutes = require("./board-routes");
const cardRoutes = require("./card-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/boards", boardRoutes);
router.use("/cards", cardRoutes);

// Exports
module.exports = router;