"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get('/', (req, res) => {
    res.json({ status: "all good 👍" });
});
exports.app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const result = await db_1.pool.query(`INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING *`, [name, email, password]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to insert user' });
    }
});
exports.app.get('/users', async (req, res) => {
    try {
        const results = await db_1.pool.query(`
            SELECT * FROM users
        `);
        res.json(results.rows);
    }
    catch (error) {
        console.log(error);
    }
});
