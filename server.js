require('dotenv').config();

const multer = require('multer');
let upload = multer({ dest: '/tmp/' });

const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER
let Twilio = require('twilio');
let client = new Twilio(accountSid, authToken);

const fs = require('fs');
let membersData = fs.readFileSync('members.json');
let members = JSON.parse(membersData);
const phoneNumbers = members.phoneNumbers;


app.post('/', upload.single('thumb'), async (req, res) => {
    let payload = JSON.parse(req.body.payload);
    if (payload.event == 'library.new') {
        for (const phoneNumber of phoneNumbers) {
            await client.messages.create({
                body: `New Content: "${movieTitle}" was added to Plex.`,
                to: phoneNumber,  
                from: twilioPhoneNumber
            }) 
        }
    }
    console.log("Endpoint hit")
    console.log(payload)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
