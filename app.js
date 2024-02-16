// MIXED MESSAGES
// define object of arrays
const mixedMessages = {
  greeting: [
    "Hello",
    "Hi there",
    "Greetings",
    "Good morning",
    "Hey",
    "Howdy",
    "Hiya",
    "Salutations",
    "Yo",
    "Hi friend",
  ],
  subjects: [
    "world",
    "friend",
    "there",
    "you",
    "universe",
    "stranger",
    "dreamer",
    "adventurer",
    "soulmate",
    "companion",
  ],
  jokes: [
    "Do you know why the bicycle couldn't stand up by itself? Because it was two-tired!",
    "Do you know what the pirate said on his 80th birthday? Aye Matey!",
    "Do you know what's orange and sounds like a parrot? A carrot!",
    "Do you know why the math book looked sad? Because it had too many problems.",
    "Do you know why the tomato turned red? Because it saw the salad dressing!",
    "Do you know what's brown and sticky? A stick!",
    "Do you know why the scarecrow won an award? Because he was outstanding in his field!",
    "Do you know why the golfer brought two pairs of pants? In case he got a hole in one!",
    "Do you know why the tomato blushed? Because it saw the salad dressing!",
    "Do you know what's green, fuzzy, and if it fell out of a tree, it would kill you? A pool table.",
  ],
};

// function to generate random message

function generateRandomMessage(messageArrays) {
  const randomGreet =
    messageArrays.greeting[
      Math.floor(Math.random() * messageArrays.greeting.length)
    ];
  const randomSubject =
    messageArrays.subjects[
      Math.floor(Math.random() * messageArrays.subjects.length)
    ];
  const randomJoke =
    messageArrays.jokes[Math.floor(Math.random() * messageArrays.jokes.length)];

  return `${randomGreet}, ${randomSubject}! ${randomJoke}.`;
}

console.log(generateRandomMessage(mixedMessages));
