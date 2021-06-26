require('dotenv').config();

const multer = require('multer');
const upload = multer({ dest: '/tmp/' });

const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.post('/', upload.single('thumb'), async (req, res) => {
    let webhookJson = JSON.parse(req.body.payload);
    if (webhookJson.event == 'library.new') {
        // sending text messages for new movies
        if (webhookJSON.Metadata.librarySectionType === 'movie') {
            let title = webhookJSON.Metadata.title;
            await sendNewContentNotification(title, phoneNumbers, 'movie');
        }

        // sending text messages for new tv shows
        if (webhookJSON.Metadata.librarySectionType === 'show') {
            let title = webhookJSON.Metadata.title;
            await sendNewContentNotification(title, phoneNumbers, 'show');
        }
    }

    if (webhookJson.event === 'admin.database.corrupted') {
        await sendText('Plex Database was corrupted, please check on it.', myPhoneNumber);
    }

    if (webhookJson.event === 'admin.database.backup') {
        await sendText('Plex Database was corrupted, please check on it.', myPhoneNumber);
    }
});

// Plex (event) -> Webhook -> Data (POST) -> Website -> Express interprets data

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
