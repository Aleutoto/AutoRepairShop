const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

router.use(bodyParser.json());

const db = {
    mechanics: [],
    parts: [],
    orders: []
};

function findMechanicById(mechanicId) {
    return db.mechanics.find(m => m.id == mechanicId);
}

function findPartById(partId) {
    return db.parts.find(p => p.id == partId);
}

function findOrderById(orderId) {
    return db.orders.find(o => o.id == orderId);
}

router.get('/mechanics', (req, res) => {
    res.json(db.mechanics);
});

router.get('/mechanics/:mechanicId', (req, res) => {
    const { mechanicId } = req.params;
    const mechanic = findMechanicById(mechanicId);
    if (!mechanic) {
        return res.status(404).send('Mechanic not found');
    }
    res.json(mechanic);
});

router.post('/mechanics', (req, res) => {
    const mechanicData = req.body;
    db.mechanics.push(mechanicData);
    res.status(201).send('Mechanic added');
});

router.put('/mechanics/:mechanicId', (req, res) => {
    const { mechanicId } = req.params;
    const mechanicData = req.body;
    const mechanic = findMechanicById(mechanicId);
    if (!mechanic) {
        return res.status(404).send('Mechanic not found for update');
    }
    res.send('Mechanic updated');
});

router.delete('/mechanics/:mechanicId', (req, res) => {
    const { mechanicId } = req.params;
    const index = db.mechanics.findIndex(m => m.id == mechanicId);
    if (index === -1) {
        return res.status(404).send('Mechanic not found to delete');
    }
    db.mechanics.splice(index, 1);
    res.send('Mechanic deleted');
});

router.get('/parts', (req, res) => {
    res.json(db.parts);
});

router.get('/orders', (req, res) => {
    res.json(db.orders);
});

module.exports = router;