const router = require("express").Router();
const pool = require("../db");

//TODO: list of all passwords
router.get("/passwords", async (req, res) => {
  try {
    const allPasswords = await pool.query("SELECT * FROM passwords");
    res.json({
      type: "success",
      passwords: allPasswords.rows,
    });
  } catch (error) {
    console.log(error.message);
    req.status(500).json("Internal Server Error!");
  }
});

//TODO: add new password

module.exports = router;
