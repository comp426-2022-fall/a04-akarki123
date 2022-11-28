#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.get('/app/', (req, res, next) => {
	res.status(200).send('OK');
})

app.get('*', (req, res) => {
	res.status(404).send('NOT FOUND');
})
