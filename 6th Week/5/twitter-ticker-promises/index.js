const express = require('express');
const app = express();
const { getToken, getTweets, filterTweets } = require('./twitter');
const util = require('util');

const promisedToken = util.promisify(getToken);

app.use(express.static('./ticker'));
app.get('/data.json', (req, res) => {
    console.log('request for json has been made!');
    promisedToken
        .then((bearerToken) => {
            console.log('inside the callback of getToken in index.js');
            console.log('we have a token yayyyy:', bearerToken);
            return Promise.all([
                getTweets(bearerToken, 'nytimes'),
                getTweets(bearerToken, 'bbcworld'),
                getTweets(bearerToken, 'theonion'),
            ])
                .then((tweets) => {
                    const mergedTweets = [
                        ...tweets[0],
                        ...tweets[1],
                        ...tweets[2],
                    ];
                    const sortedMergedTweets = mergedTweets.sort((a, b) => {
                        return new Date(b.created_at) - new Date(a.created_at);
                    });
                    const filteredTweets = filterTweets(sortedMergedTweets);
                    res.json(filteredTweets);
                })
                .catch((err) => {
                    console.log('err in Promise.all :>> ', err);
                    res.sendStatus(500);
                });
        })
        .catch((err) => {
            console.log('err in getToken :>> ', err);
            res.sendStatus(500);
        });
});
app.listen(8080, () => console.log(`I'm all ears...`));
