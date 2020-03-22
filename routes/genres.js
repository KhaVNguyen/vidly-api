const express = require('express');
const Joi = require('joi');
const { genreSchema, Genre, validateGenre } = require('../models/genre');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const router = express.Router();

router.get('/', async (req, res) => {
  const genres = await Genre.find().sort('name');
  res.send(genres);
});

router.get('/another', async (req, res) => {
  res.send('hi there');
});

// router.get('/:id', async (req, res) => {
//   const genre = await Genre.findById(req.params.id);
//   if (!genre) {
//     res.status(404).send('The genre with the given ID was not found');
//   }
//   res.send(genre);
// });

// router.post('/', auth, async (req, res) => {
//   const { error } = validateGenre(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
//   let genre = new Genre({ name: req.body.name });
//   genre = await genre.save();
//   res.send(genre);
// });

// router.put('/:id', async (req, res) => {
//   const { error } = validateGenre(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
//   let genre = await Genre.findById(req.params.id);
//   if (!genre) {
//     res.status(404).send('The genre with the given ID was not found');
//   }
//   genre.set({
//     name: req.body.name,
//   });
//   genre = await genre.save();
//   // OR
//   // const genre = await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name}, {new : true})
//   res.send(genre);
// });

// router.delete('/:id', [auth, admin], async (req, res) => {
//   const genre = await Genre.findByIdAndDelete(req.params.id);
//   if (!genre) {
//     res.status(404).send('The genre with the given ID was not found');
//   }
//   res.send(genre);
// });

module.exports = router;
