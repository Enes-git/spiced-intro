const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({   // this object has many properties like "question"
    input: process.stdin,
    output: process.stdout,
});

const story = {
    enterance: chalk.cyan(`You arrived the land of Valhala which is in turmoil with shattered kingdoms and the ongoing civil war. 
    At the inn near the Grand Lake you were given a quest of retrieving the long forgotten sword of the 
    ancient kings. It is believed that the sword is hidden within the Darkwood Forrest but nobody knows 
    where exactly it lays...`),
    q: chalk.yellow("You have the opportunity to save this wretched land and become a hero! Will you tke the quest?"),
    answers: {
        yes: {
            q: chalk.yellow(`Great! Welcome to your saga adventurer!
            After a quick preperation you started your journey on the road to the Darkwood Forrest.
            Will you follow the main road?`),
            answers: {
                yes: {
                    q: chalk.yellow(`Your path leads you into a small fight between a pack of wolves and a local hunter. 
                    The poor man is wounded and cries for help.
                    Will you help the stranger?`),
                    answers: {
                        yes: chalk.red(`You quickly draw your sword and dive into the fight. Things go pretty well untill 
                        the Blight Wolf of the myths appear behind the big oak tree that you use to take cover.
                        You do not have a chance... and are killed savagely. Your body is torn apart by the whole 
                        pack and you name is quickly forgotten.`),
                        no: chalk.red(`While trying to sneak behind a big oak tree you find yourself just in front of the 
                        the mighty Blight Wolf of the myths! You have no chance agains the beast who tear you apart quickly. 
                        You are dead and forgotten but your soul lingers in agony knowing that you were a coward!`)
                    }
                },
                no: chalk.red("You choose not to follow the road and lost in the wilderness...")
            },
        },
        no: chalk.red(`Well, you lived an ordinary life among the common folk. The only thing you were worried about was 
        wether you can manage to find something to eat that night until you were savagely killed in a fight 
        with the local bandits for two big red apples...`),
    },
};


console.log(story.enterance);

function askQuestion(storyObj) {
    rl.question(storyObj.q, (answer) => {
        // check if the user has given us an answer we can understand
        if (storyObj.answers[answer]) {
            // IF the user has given us an answer we understand, 
            // we ultimately want to do multiple different things!
            // IF the answer leads to more story line, ask the next question
            if (answer === "yes" && typeof answer == "object") {
                console.log(storyObj.answers["yes"]);
                askQuestion(storyObj.answers[answer]);

            } else {
                // IF the answer leads to end the game, print the last line and close 
                // our interface
                console.log(storyObj.answers["no"]);
                rl.close(); // ends our communication
            }
        } else {
            // user has given an answer our story does not understand, 
            // so we want to ask the same question again
            console.log(chalk.red("well you don't have so much options!"));
            askQuestion(storyObj);
        }
    });

}

askQuestion(story);