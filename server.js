#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/app/', (req, res, next) => {
	res.status(200).send('OK');
});
app.get('/app/roll/', (req, res, next) => {
	res.status(200).send(roll(6, 2, 1));
});
app.post('/app/roll/', (req, res, next) => {
	res.status(200).send(roll(req.body.sides, req.body.dice, req.body.rolls));
});
app.get('/app/roll/:sides/', (req, res, next) => {
	res.status(200).send(roll(req.params.sides, 2, 1));
});
app.get('/app/roll/:sides/:dice/', (req, res, next) => {
	res.status(200).send(roll(req.params.sides, req.params.dice, 1));
});
app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	res.status(200).send(roll(req.params.sides, req.params.dice, req.params.rolls));
});

app.get('*', (req, res) => {
	res.status(404).send('NOT FOUND');
});

app.listen(port);
