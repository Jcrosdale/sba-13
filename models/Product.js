//import { Schema, model } = require('mongoose');

// Define a productSchema
const productSchema = new Schema ({
    // name: String, required
    name: {
        type: String,
        required: true
    },
    // description: String, required
    description: {
        type: String,
        required: true
    },
    // price: Number, required, must be greater than 0.
    price: {
        type: Number,
        required: true,
        min: [1]
    },
    // category: String, required
    category: {
        type: String,
        required: true
    },
    // inStock: Boolean, defaults to true.
    inStock: {
        type: Boolean,
        default: true
    },
    // tags: An Array of Strings.
    tags: {
        type: Array,
        items: {
            type: String
        }
    },
    // createdAt: Date, defaults to the current date and time.
    createdAt: {
        type: Date,
        default: Date.now
    }
}
)

// Compile this schema into a model named Product and export it.
const Product = model('Product', productSchema)