const mongoose = require('mongoose');
const Product = mongoose.model('Product')
module.exports = {
    all: async (req, res) => {
        try {
            const products = await Product.find();
            res.json({products: products});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: (req, res) => {
        Product.findById({ _id : req.params.id })
            .then((data) => {
                res.json({product: data})
            })
            .catch(err => res.json(err));
    },
    // create: (req, res) => {
    //     const product = new Product(req.body);
    //     product.save()
    //         .then((data) => {
    //             res.json({newProduct: data});
    //         })
    //         .catch(err => res.json(err));
    // },
    create: (req, res) => {
        const product = new Product(req.body);
        console.log(product);
        product.save()
            .then((data) => {
                res.json({newProduct: data});
            })
            .catch(err => {
            const errors = Object.keys(err.errors).map(key => err.errors[key].message);
            res.status(402).json(errors);
            })
    },
    // update: (req, res) => {
    //     Product.updateOne({ _id : req.params.id }, req.body)
    //         .then((data) => {
    //             res.json({updatedProduct: data});
    //         })
    //         .catch(err => res.json(err));
    // },
    update: (req, res) => {
        console.log(req.body);
        console.log("49", req.params.id);
        Product.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true})
            .then((data) => {
                console.log("51", data);
                res.json({updatedProduct: data});
            })
            .catch(err => {
                const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                res.status(402).json(errors);
                })
    },
    delete: (req, res) => {
        Product.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
}
