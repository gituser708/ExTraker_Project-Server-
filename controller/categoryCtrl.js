const asyncHandler = require('express-async-handler');
const Transaction = require('../model/Transaction');
const Category = require('../model/Catagory');

const categoryCtrl = {
    create: asyncHandler(async (req, res) => {
        const { name, type } = req.body;
        if (!name || !type) {
            throw new Error("All fields are required!");
        };
        const normalizedName = name.toLowerCase();
        const validTypes = ["income", "expense"];

        if (!validTypes.includes(type.toLowerCase())) {
            throw new Error(`Invalid category type ${type}`);
        };
        const categoryExist = await Category.findOne({
            name: normalizedName,
            user: req.user
        });
        if (categoryExist) {
            throw new Error(`Category ${categoryExist.name} is already exist!`);
        };

        const category = await Category.create({
            name: normalizedName,
            user: req.user,
            type
        });
        res.status(201).json({
            message: 'Category created successfully...',
            category
        });
    }),

    lists: asyncHandler(async (req, res) => {
        const categories = await Category.find({ user: req.user });
        res.status(200).json({ categories });
    }),

    delete: asyncHandler(async (req, res) => {
        const category = await Category.findById(req.params.id);
        if (category && category.user.toString() === req.user.toString()) {
            const categoryName = category.name;
            await Category.findByIdAndDelete(req.params.id);
            await Transaction.deleteMany({ category: categoryName });

            res.json({ message: 'Category and related transactions deleted!' });
        } else {
            res.status(404).json({ message: 'Category not found or Unauthorized!' });
        };
    }),
};

module.exports = categoryCtrl;