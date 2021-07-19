const { Router } = require('express');
const { Activity } = require('../models/activity');
const SMSController = require('../controllers/smsController');
const multer = require('multer');
const upload = multer({ dest: '/tmp/' });
const router = Router();

module.exports = () => {
    const activityController = new activityController();
    const smsController = new SMSController();

    router.post('/', upload.single('thumb'), async (req, res) => {
        const webhookJson = JSON.parse(req.body.payload);
        const contentType = webhookJSON.Metadata.librarySectionType;
        const title = webhookJSON.Metadata.title;

        if (webhookJson.event == 'library.new') {
            if (contentType === 'movie') {
                await smsController.sendNewMovieNotification(title);
            }

            await smsController.sendNewContentNotification(title);
        }
    });

    return router;
};
