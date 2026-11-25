const router = require('express').Router();
const { Product } = require('../../models');

// POST /api/products - Create a product
router.post('./api/products', async (req, res) => {
    try {
        // Creates a new product based on the req.body.
        const product = await Product.create(req.body);
        const token = signToken(product);
        // Responds with the newly created product and a 201 status code.
        res.status(201).json({ token, product });
    } catch (err) {
        // If validation fails, it should return a 400 status code with a descriptive error message.
        res.status(400).json({
            message: 'Validation failed.',
            errror: err.message
        });

    }
});