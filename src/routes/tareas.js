const express = require('express');
const router = express.Router();

router.get('/tareas',(req,res) => {
    res.render('tareas/all-tareas');
});

router.get('/tareas/add',(req,res) => {
    res.render('tareas/new-tareas');
});

router.get('/tareas/edit',(req,res) => {
    res.render('tareas/edit-tarea');
});
module.exports = router;

