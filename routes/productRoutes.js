const router = require('express').Router();
const { Product } = require('../../models');

// POST /api/products (Create a product)
router.post('/api/products', async (req, res) => {
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

// GET /api/products/:id (Read a Single Product)
router.get('/api/products/:id', async (req, res) => {
    try {
        // Retrieves a single product by its _id
        const products = await Product.findById(req.params.id);
        // If the product is found, responds with the product object.
        res.json(products);
    } catch (err) {
        // If no product is found, responds with a 404 status code.
        res.status(404).json(err);
    }
})

// PUT /api/products/:id (Update a Product)
router.put('/api/products/:id', async(req, res) => {
    try {
        // Updates a product by its _id with the data from req.body.
        // Responds with the updated product data (use the { new: true } option).
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    } catch(err) {
        // If no product is found to update, responds with a 404 status code.
        res.status(404).json(err);
    }
})

// DELETE /api/products/:id (Delete a Product)
router.delete('/api/products/:id', async(req, res) => {
    try {
        // Deletes a product by its _id.
        const products = await Note.findByIdAndDelete(req.params.id);
        // If successful, responds with a success message.
        res.json({ message: 'Product successfully deleted.' });
    } catch(err) {
        // If no product is found to delete, responds with a 404 status code.
        res.status(404).json(err);
    }
})

// GET /api/products (Read All Products with Advanced Querying)
router.get('/api/products', async(req, res) => {
    const pageSize = 10; // Limit = 10
    // It should retrieve all products
    Product.find({ 
        // category: Filter products by a specific category.
        category: 'Categories',
        // minPrice: Filter products with a price greater than or equal to this value.
        minPrice:
        // maxPrice: Filter products with a price less than or equal to this value.
        maxPrice: 
    })
    // sortBy: Sort results. For example, price_asc for ascending price or price_desc for descending price.
    .sort({})
    // page & limit: For pagination (defaulting to page 1, limit 10).
    .lmit(pageSize)
    // Respond with an array of the resulting products.
    .then(list => {
        console.log('Final list of products:', list);
    })
    .catch(err => {
        console.error('Unable to display list of products', err);
    });
})


// Dynamically build the Mongoose query based on which query parameters are provided.
