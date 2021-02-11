const express = require('express');
const app = express();
const { getToken, getTweets, filterTweets } = require('./twitter');

// serve our twitter project
app.use(express.static('./ticker'));
// ========================================================
//handle the request for data of headlines from the clientside
app.get('/data.json', (req, res) => {
    console.log('request for json has been made!');
    // ultimately the goal is to do four tings now
    //1. get the token to be able to get tweets from the twitter API,
    // when we have the token...
    getToken((err, bearerToken) => {
        console.log('inside the callback of getToken in index.js');
        if (err) {
            console.log(
                'ho ho ho! sth went wrong in getToken in index.js:',
                err
            );
            res.sendStatus(500); // server error
        } else {
            console.log('we have a token yayyyy:', bearerToken);
            //2. make a request for tweets using the token
            getTweets(bearerToken, (err, tweets) => {
                //cons log tweets!!
                //3. filter the tweets we got in step 2.
                const filteredTweets = filterTweets(tweets);
                //4. send back those filtered tweeets as json to the client side
                res.json(filteredTweets);
            });
        }
    });
});
// ==================================================================
app.listen(8080, () => console.log(`I'm all ears...`));
