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
    },
    {
        q: "marched in a protest."
    },
    {
        q: "overdrafted my bank account."
    },
    {
        q: "read a partner's text messages."
    },
    {
        q: "been hospitalized for something."
    },
    {
        q: "sang in public."
    },
    {
        q: "sent a stranger a drink."
    },
    {
        q: "accepted a drink from a stranger."
    },
    {
        q: "lied about my income."
    },
    {
        q: "thought a friend's baby was ugly."
    },
    {
        q: "won more than $50 gambling."
    },
    {
        q: "lost more than $50 gambling."
    },
    {
        q: "lied about my age."
    },
    {
        q: "cut in line on purpose."
    },
    {
        q: "snooped through a friend's room, cabinets or property."
    },
    {
        q: "worked with someone I couldn't stand."
    },
    {
        q: "been in a talent show."
    },
    {
        q: "driven a stick shift."
    },
    {
        q: "been scuba diving."
    },
    {
        q: "purposely given someone bad advice."
    },
    {
        q: "thrown someone else a surprise party."
    },
    {
        q: "been dumpster diving."
    },
    {
        q: "returned something after I wore it."
    },
    {
        q: "been in a helicopter."
    },
    {
        q: "parked in a handicap spot."
    },
    {
        q: "changed a tyre."
    },
    {
        q: "broken someone else's heart."
    },
    {
        q: "wished I had kids."
    },
    {
        q: "drank an entire bottle of wine."
    },
    {
        q: "witnessed a crime."
    },
    {
        q: "donated blood."
    },
    {
        q: "dropped a baby."
    },
    {
        q: "run a red light."
    },
    {
        q: "been the subject of a rumor that wasn't true."
    },
    {
        q: "spread a rumor I knew wasn't true."
    },
    {
        q: "cried at work."
    },
    {
        q: "left a mean YouTube comment."
    },
    {
        q: "called the cops on someone."
    },
    {
        q: "left a negative review."
    },
    {
        q: "blamed someone else for my mistake at work."
    },
    {
        q: "stolen something from my workplace."
    },
    {
        q: "had a paranormal experience."
    }
];

const order = initialiseOrder(questions.length);
let current = order.pop();

const questionText = document.getElementById("question");
console.log(current)
questionText.innerHTML = questions[current].q;

nextButton = document.getElementById("next");

nextButton.addEventListener("click", function(){
    current = order.pop();
    console.log(order.length);
    if (order.length == 0) {
        questionText.innerHTML = "The end";
        order = initialiseOrder(questions.length)
    } else {
        questionText.innerHTML = questions[current].q;
    }
});

function initialiseOrder(length) {
    let order = [];
    for (let i = 0; i < length; i++) {
        order[i] = i;
    }
    /*
    RANDOMISING THE ARRAY/ORDER 
    apparently statring from the end is standard 
    as it "gives the elements towards the end 
    an equal chance to "being swapped"" 
    */
    for (let i = length - 1; i > 0; i--) {
        const randIndx = Math.floor(Math.random() * i);
        [order[i], order[randIndx]] = [order[randIndx], order[i]];
    }
    for (x in order) {
        console.log(order[x]);
    }

    return order;
}
