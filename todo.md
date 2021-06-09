* Create Schema for DB
  * Create Tables inside of DB
    * Tables
      * Subscriber
        * id (Pk)
        * Name
        * Phone Number
        * Last Login
        * Last Watch
      * Request
        * id (PK)
        * title
        * movie_or_title
        * subscriber_id (FK)
  * Connect Node App to Database
  * Watch for inserts of Requests table
    * Download Content via API Call to Sonarr/Radarr
    * Send Message that's its done
  
  
