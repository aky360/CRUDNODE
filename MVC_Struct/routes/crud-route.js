var express = require('express');
var crudController = require('../controllers/crud-controller');

var router = express.Router();

router.get('/form', crudController.crudForm);

router.post('/create', crudController.createCrud);

router.get('/fetch', crudController.fetchCrud);

router.get('/edit/:id', crudController.editCrud);

router.post('/edit/:id', crudController.updateCrud);

router.get('/delete/:id', crudController.deleteCrud);


module.exports = router;