const { twitterKey, twitterSecret } = require('./secrets');
// above we are requiring the secret authentication info from the secrets.json
// not desctructure version of the above
// const secrets = require("./secrets");
// how you would use it in the code: secrets.twitterKey, secrets.twitterSecret;
const https = require('https');
const { response } = require('express');

module.exports.getToken = function getToken(callbackToken) {
    console.log('running getToken');
    // this function get what's called the bearerToken from twitter
    // we will work this out in class
    let credentials = `${twitterKey}:${twitterSecret}`;
    let encodedCredentials = Buffer.from(credentials).toString('base64');

    const options = {
        host: 'api.twitter.com',
        path: '/oauth2/token',
        method: 'POST',
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
    };
    function reqCallback(response) {
        if (response.statusCode != 200) {
            // something went wrong with our request,
            // we are passing the status error code to our callbackToken function
            callbackToken(response.statusCode);
            return;
        }
        // if we reach this point of the code we have a valid response
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });

        response.on('end', () => {
            // console.log("body:", body);
            let parsedBody = JSON.parse(body);
            // console.log("parsedBody:", parsedBody.access_token);
            // all went good we are passing null, and the actual token to our callbackToken
            // function
            callbackToken(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, reqCallback);
    req.end('grant_type=client_credentials');
};

module.exports.getTweets = function getTweets(bearerToken, callbackTweets) {
    console.log('running getTweets with the token:', bearerToken);
    // this function will get tweets from the Twitter API
    // you will complete this function
    const options = {
        host: 'api.twitter.com',
        path:
            '/1.1/statuses/user_timeline.json?screen_name=nytimes&tweet_mode=extended',
        method: 'GET',
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    // listen for response
    // pass response to callback
    function reqCallback(response) {
        if (response.statusCode != 200) {
            // something went wrong with our request,
            // we are passing the status error code to our bearerToken function
            bearerToken(response.statusCode);
            return;
        }
        // if we reach this point of the code we have a valid response
        let unparsedTweets = '';
        response.on('data', (chunk) => {
            unparsedTweets += chunk;
        });

        response.on('end', () => {
            // console.log("unparsedTweets:", unparsedTweets);
            let parsedTweets = JSON.parse(unparsedTweets);
            // console.log('parsedTweets:', parsedTweets);
            // console.log('entities :>> ', parsedTweets[0].entities);
            // all went good we are passing null, and the actual token to our callbackToken
            // function
            callbackTweets(null, parsedTweets);
        });
    }
    const req = https.request(options, reqCallback);
    req.end('grant_type=client_credentials');
};

module.exports.filterTweets = function filterTweets(tweets) {
    // this function will clean up(filter) our tweet response from the twitter API
    // this is also for you to complete :)
    const tweetUrls = [];
    for (let i = 0; i < tweets.length; i++) {
        let currentTweetUrls = tweets[i].entities.urls;
        if (currentTweetUrls.length == 1) {
            console.log('one url :>> ', currentTweetUrls);
            tweetUrls.push(currentTweetUrls[0].url);
        }
    }
    console.log('tweetUrls :>> ', tweetUrls);
    return tweetUrls;
};
