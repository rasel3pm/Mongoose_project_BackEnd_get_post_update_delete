const router = require('express').Router();
const product = require('../model/Product')



router.post('/create', async(req, res) => {
    const produc = await new product(req.body)
    const data = await produc.save();

    if (data) {
        res.status(200).json({ message: "Success" })
    } else {
        res.status(501).json({ Message: "Data is not found" })
    }
})
router.get('/', async(req, res) => {
    const data = await product.find();

    if (data) {
        res.status(200).json({ message: data })
    } else {
        res.status(501).json({ Message: "Data is not found" })
    }
});


router.patch('/:id', async(req, res) => {
    const data = await product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });

    if (data) {
        res.status(200).json({ message: "updated Success" })
    } else {
        res.status(501).json({ Message: "updated Data is not found" })
    }
});

router.delete('/:id', (req, res) => {
    product.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Delete product", data })
        } else {
            res.status(501).json({ Message: "Delete Data is not found" })
        }
    });

})


module.exports = router