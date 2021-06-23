* Database Service [x]
  * Create Schema for DB [x]
  * Create Tables inside of DB [x]
    * Tables [x]
      * Subscriber [x]
        * id (Pk)
        * Name
        * Phone Number
        * Last Login
        * Last Watch
      * Request [x]
        * id (PK)
        * title
        * movie_or_title
        * subscriber_id (FK)
  
* API Service []
  * Connect Node App to Database (Sequlize ORM) []
  * Twilio Incoming Text Message (POST)
    * Add Content Request Information to DB []
      * Request Data
      * Subscriber Data (Who Made The Request) []
    * Send Request to Sonarr/Radarr
      * Reach Out To See Content Can Be Found []
        * Return Text Message if Can't be Found []
      * Confirm Download (yes/no) []
      * Download Content via API Call to Sonarr/Radarr []
    * Send Message that's its done []
  * Plex Webhook
    * Add to Database on Certain Events[]
      * User starts playing Plex []
        * User info is stored in DB

