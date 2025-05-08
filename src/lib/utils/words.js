const VERBS = {
  eat: {
    head: "eat",
    preterite: "ate",
    pastParticiple: "eaten",
    presentParticiple: "eating",
    thirdPersonSingular: "eats",
  },
  be: {
    head: "be",
    preterite: "was",
    pastParticiple: "been",
    presentParticiple: "beeing",
    thirdPersonSingular: "is",
  },
  have: {
    head: "have",
    preterite: "had",
    pastParticiple: "had",
    presentParticiple: "having",
    thirdPersonSingular: "has",
  },
  speak: {
    head: "speak",
    preterite: "spoke",
    pastParticiple: "spoken",
    presentParticiple: "speaking",
    thirdPersonSingular: "speaks",
  },
  choose: {
    head: "choose",
    preterite: "chose",
    pastParticiple: "chosen",
    presentParticiple: "choosing",
    thirdPersonSingular: "chooses",
  },
  // put in play, write, speak
};

const MODAL_VERBS = [
  "will",
  "won't",
  "would",
  "wouldn't",
  "can",
  "can't",
  "could",
  "could't",
  "may",
  "may not",
  "might",
  "mightn't",
  "must",
  "mustn't",
  "shall",
  "shan't",
  "should",
  "shouldn't",
  "ought to",
  "oughtn't to",
  "needn't",
];

const SUBJECT_PRONOUNS = ["I", "you", "he", "she", "it", "we", "they"];

export { VERBS, MODAL_VERBS, SUBJECT_PRONOUNS };
