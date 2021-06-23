require('dotenv').config();

const multer = require('multer');
const upload = multer({ dest: '/tmp/' });

const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const Twilio = require('twilio');
const client = new Twilio(accountSid, authToken);

const fs = require('fs');
const membersData = fs.readFileSync('members.json');
const members = JSON.parse(membersData);
const phoneNumbers = members.phoneNumbers;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;


const sendNewContentNotification = async (title, phoneNumbers, contentType) => {
    for (const phoneNumber of phoneNumbers) {

        const message = `New Content: ${title} was added to Plex.` 
        await sendText(message, phoneNumber)
    }
}   
const sendText = async (message, to) => {
    await client.messages.create({
        body: message,
        to: to,
        from: twilioPhoneNumber
    });
}


app.post('/', upload.single('thumb'), async (req, res) => {
    let webhookJson = JSON.parse(req.body.payload);
    if (webhookJson.event == 'library.new') {

        // sending text messages for new movies
        if (webhookJSON.Metadata.librarySectionType === 'movie') {
            let title = webhookJSON.Metadata.title;
            await sendNewContentNotification(title, phoneNumbers, 'movie')
        }

        // sending text messages for new tv shows
        if (webhookJSON.Metadata.librarySectionType === 'show') {
            let title = webhookJSON.Metadata.title;
            await sendNewContentNotification(title, phoneNumbers, 'show');
        }        
    }

    if (webhookJson.event === "admin.database.corrupted") {
        await sendText("Plex Database was corrupted, please check on it.", myPhoneNumber)
    }
    
    if (webhookJson.event === "admin.database.backup") {
        await sendText("Plex Database was corrupted, please check on it.", myPhoneNumber)
    }
});

// Plex (event) -> Webhook -> Data (POST) -> Website -> Express interprets data

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


