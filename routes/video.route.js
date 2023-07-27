const express = require('express');

// router middleware -> router object
const router = express.Router();

const videoController = require("../controllers/video.controller")


router.get('/', videoController.getVideos);

router.get('/products', videoController.getProducts);

router.get('/:id/product', videoController.getProductByID);

router.get('/comments', videoController.getComments);

router.get('/:id/comment', videoController.getCommentByID);

router.post('/submit', videoController.submitComment);

router.post('/add', videoController.addVideo);



// router.get('/video/comments', async(req, res) => {
//     try {
//         const videos = await Video.findById('64bd15e08fc799b964fd8c1a');
//         res.json(videos);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });



module.exports = router;