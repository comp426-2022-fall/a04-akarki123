#!/usr/bin/env node

import express from 'express';
import minimist from 'minimist';
import { roll } from './lib/roll.js';

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;
