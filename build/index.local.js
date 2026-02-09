"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const PORT = process.env.PORT;
_1.app.listen(PORT, () => console.log('App started on port', PORT));
