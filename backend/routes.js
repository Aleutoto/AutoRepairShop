const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

router.get('/mechanics', (req, res) => {
});

router.get('/mechanics/:mechanicId', (req, res) => {
    const { mechanicId } = req.params;
});

router.post('/mechanics', (req, res) => {
    const mechanicData = req.body;
});

router.put('/mechanics/:mechanicId', (req, res) => {
    const { mechanicId } = req.params;
    const mechanicData = req.body;
});

router.delete('/mechanics/:mechanicId', (req, res) => {
    const { mechanicId } = req.params;
});

router.get('/parts', (req, res) => {
});

router.get('/parts/:partId', (req, res) => {
    const { partId } = req.params;
});

router.post('/parts', (req, res) => {
    const partData = req.body;
});

router.put('/parts/:partId', (req, res) => {
    const { partId } = req.params;
    const partData = req.body;
});

router.delete('/parts/:partId', (req, res) => {
    const { partId } = req.params;
});

router.get('/orders', (req, res) => {
});

router.get('/orders/:orderId', (req, res) => {
    const { orderId } = req.params;
});

router.post('/orders', (req, res) => {
    const orderData = req.body;
});

router.put('/orders/:orderId', (req, res) => {
    const { orderId } = req.params;
    const orderData = req.body;
});

router.delete('/orders/:orderId', (req, res) => {
    const { orderId } = req.params;
});

module.exports = router;