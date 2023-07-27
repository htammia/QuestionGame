const questions = [
    {
        q: "had an imaginary friend."
    },
    {
        q: "had a crush on a cartoon character."
    },
    {
        q: "fallen asleep at school/work."
    },
    {
        q: "called someone the wrong name (more than once)."
    },
    {
        q: "accidentally said “I love you” to someone."
    },
    {
        q: "said “I love you” before the other person."
    },
    {
        q: "accidentally set something on fire."
    },
    {
        q: "eaten dog/cat food."
    },
    {
        q: "cried in public."
    },
    {
        q: "been late for an interview."
    },
    {
        q: "forgotten a coworker's name."
    },
    {
        q: "written and recorded a song."
    },
    {
        q: "been fired from a job."
    },
    {
        q: "unshared my location with a friend."
    },
    {
        q: "cried when a fictional character died."
    },
    {
        q: "had a dirty dream about a super unexpected person."
    },
    {
        q: "taken credit for someone else's work."
    },
    {
        q: "got banned from a specific store or location."
    },
    {
        q: "participated in a Tiktok challenge."
    },
    {
        q: "been jealous of my friends."
    },
    {
        q: "cooked dinner naked."
    },
    {
        q: "cheated on a test."
    },
    {
        q: "received a nude."
    },
    {
        q: "taken out gum and stuck it somewhere “for later.”"
    },
    {
        q: "flirted with someone to get a free drink."
    },
    {
        q: "butt-dialed someone."
    },
    {
        q: "gone to work hungover."
    },
    {
        q: "faked an orgasm."
    },
    {
        q: "used someone else's Netflix account."
    },
    {
        q: "pretended to get a text to leave a date/outing."
    },
    {
        q: "screamed at a scary movie."
    },
    {
        q: "pretended to be sick to get out of something."
    },
    {
        q: "fancied a friend's parent."
    },
    {
        q: "fake-cried to get something."
    },
    {
        q: "told someone's secret."
    },
    {
        q: "given someone a fake mobile number."
    },
    {
        q: "lied about liking a gift someone gave me."
    },
    {
        q: "cut my own hair."
    },
    {
        q: "lied to my parents."
    },
    {
        q: "accidentally spelled my name wrong."
    },
    {
        q: "completed an entire colouring book."
    },
    {
        q: "Googled someone before a date."
    },
    {
        q: "used someone else's toothbrush."
    },
    {
        q: "pulled an all nighter."
    },
    {
        q: "ignored someone I knew in public."
    },
    {
        q: "hitchhiked a ride."
    },
    {
        q: "lied in this game."
    },
    {
        q: "lied to my boss."
    },
    {
        q: "edited my selfies."
    }
];
let current = 0;
const order = initialiseOrder(questions.length);

const questionText = document.getElementById("question");

questionText.innerHTML = questions[current].q;

nextButton = document.getElementById("next");

nextButton.addEventListener("click", function(){
    current++;
    if (current == questions.length) {
        questionText.innerHTML = "The end";
        current = 0;
    } else {
        questionText.innerHTML = questions[current].q;
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function initialiseOrder(length) {
    let order = [];
    for (let i = 0; i < length; i++) {
        order[i] = i;
    }

    //copied from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    let currentIndex = length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [order[currentIndex], order[randomIndex]] = [
            order[randomIndex], order[currentIndex]];
    }

    return order;
}
