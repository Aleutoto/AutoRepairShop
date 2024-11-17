const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const MechanicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    }
});

const Mechanic = mongoose.model('Mechanic', MechanicSchema);

const PartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Part = mongoose.model('Part', PartSchema);

const OrderSchema = new mongoose.Schema({
    mechanic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mechanic',
        required: true
    },
    parts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Part'
    }],
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', OrderSchema);

async function createMechanic(mechanicData) {
    try {
        const mechanic = new Mechanic(mechanicData);
        await mechanic.save();
        console.log('Mechanic saved successfully:', mechanic);
    } catch (err) {
        console.error('Error saving mechanic:', err.message);
    }
}

module.exports = {
    Mechanic,
    Part,
    Order,
    createMechanic 
};