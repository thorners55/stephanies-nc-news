# Stephanie's NC News

# How to run

- You will need at least Node.js version 13

- Clone this repo:
  git clone https://github.com/thorners55/stephanies-nc-news

- cd into stephanies-nc-news

- Install dependencies:
  npm install

- To run the website on a local server
  npm start

# General app information

- Made as part of Northcoders coursework - created the API using PSQL, hosted using Heroku, deployed using Netlify. The repository for backend functionality can be found at https://github.com/thorners55/nc-news

- A news site, similar to Reddit - a user can post comments, delete their own comments, vote on articles, etc. At the moment there is no functionality to post your own article - all articles available on the site were present at database seeding.

- A site user can choose their username from a dropdown list. Users are free to change which user they are at any time. Upon a site user's first visit, they are automatically logged in as cooljmessy. Once they have changed to a different user, this is saved in local storage, and will automatically load up as that user the next time the site is visited or the page is refreshed.

- Site users can view all articles, or view articles by topic. From the drop down list, users can choose to sort articles by the date posted, the comment count, or the votes, in ascending or descending order (defaults to descending). Site users can view the profile for a particular username, which includes articles written by that username.

- Using the address bar, it is also possible for a user to request to view articles by author, title, article_id, created_at, votes, or comment_count, and sort by asc or desc. Further information for endpoints are available at https://stephanies-news.herokuapp.com/api/

- Article, topic, and user request URLs work by chaining the everything after /api/ onto https://stephanies-nc-news.netlify.com , e.g. https://stephanies-nc-news.netlify.com/topics/cooking

# Links

- Deployed version: https://stephanies-nc-news.netlify.com
- Repository for backend API functionality https://github.com/thorners55/nc-news
