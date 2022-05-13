const express = require("express");
const router = express.Router();
const crudController = require("../controllers/crudController")

router.route('/v1/product/new').post(crudController.crudForm);
router.route('/getData').get(crudController.crudGetData);

module.exports = router;