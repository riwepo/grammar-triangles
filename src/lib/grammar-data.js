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
const SENTENCE_TYPES = {
  statement: "Statement",
  question: "Question",
  negative: "Negative",
};

const VERBS = {
  accept: {
    head: "accept",
    preterite: "accepted",
    pastParticiple: "accepted",
    presentParticiple: "accepting",
    thirdPersonSingular: "accepts",
  },
  allow: {
    head: "allow",
    preterite: "allowed",
    pastParticiple: "allowed",
    presentParticiple: "allowing",
    thirdPersonSingular: "allows",
  },
  ask: {
    head: "ask",
    preterite: "asked",
    pastParticiple: "asked",
    presentParticiple: "asking",
    thirdPersonSingular: "asks",
  },
  be: {
    head: "be",
    preterite: "was/were",
    pastParticiple: "been",
    presentParticiple: "being",
    thirdPersonSingular: "is",
  },
  become: {
    head: "become",
    preterite: "became",
    pastParticiple: "become",
    presentParticiple: "becoming",
    thirdPersonSingular: "becomes",
  },
  begin: {
    head: "begin",
    preterite: "began",
    pastParticiple: "begun",
    presentParticiple: "beginning",
    thirdPersonSingular: "begins",
  },
  believe: {
    head: "believe",
    preterite: "believed",
    pastParticiple: "believed",
    presentParticiple: "believing",
    thirdPersonSingular: "believes",
  },
  break: {
    head: "break",
    preterite: "broke",
    pastParticiple: "broken",
    presentParticiple: "breaking",
    thirdPersonSingular: "breaks",
  },
  bring: {
    head: "bring",
    preterite: "brought",
    pastParticiple: "brought",
    presentParticiple: "bringing",
    thirdPersonSingular: "brings",
  },
  build: {
    head: "build",
    preterite: "built",
    pastParticiple: "built",
    presentParticiple: "building",
    thirdPersonSingular: "builds",
  },
  buy: {
    head: "buy",
    preterite: "bought",
    pastParticiple: "bought",
    presentParticiple: "buying",
    thirdPersonSingular: "buys",
  },
  call: {
    head: "call",
    preterite: "called",
    pastParticiple: "called",
    presentParticiple: "calling",
    thirdPersonSingular: "calls",
  },
  carry: {
    head: "carry",
    preterite: "carried",
    pastParticiple: "carried",
    presentParticiple: "carrying",
    thirdPersonSingular: "carries",
  },
  change: {
    head: "change",
    preterite: "changed",
    pastParticiple: "changed",
    presentParticiple: "changing",
    thirdPersonSingular: "changes",
  },
  choose: {
    head: "choose",
    preterite: "chose",
    pastParticiple: "chosen",
    presentParticiple: "choosing",
    thirdPersonSingular: "chooses",
  },
  come: {
    head: "come",
    preterite: "came",
    pastParticiple: "come",
    presentParticiple: "coming",
    thirdPersonSingular: "comes",
  },
  consider: {
    head: "consider",
    preterite: "considered",
    pastParticiple: "considered",
    presentParticiple: "considering",
    thirdPersonSingular: "considers",
  },
  continue: {
    head: "continue",
    preterite: "continued",
    pastParticiple: "continued",
    presentParticiple: "continuing",
    thirdPersonSingular: "continues",
  },
  create: {
    head: "create",
    preterite: "created",
    pastParticiple: "created",
    presentParticiple: "creating",
    thirdPersonSingular: "creates",
  },
  decide: {
    head: "decide",
    preterite: "decided",
    pastParticiple: "decided",
    presentParticiple: "deciding",
    thirdPersonSingular: "decides",
  },
  describe: {
    head: "describe",
    preterite: "described",
    pastParticiple: "described",
    presentParticiple: "describing",
    thirdPersonSingular: "describes",
  },
  develop: {
    head: "develop",
    preterite: "developed",
    pastParticiple: "developed",
    presentParticiple: "developing",
    thirdPersonSingular: "develops",
  },
  die: {
    head: "die",
    preterite: "died",
    pastParticiple: "died",
    presentParticiple: "dying",
    thirdPersonSingular: "dies",
  },
  do: {
    head: "do",
    preterite: "did",
    pastParticiple: "done",
    presentParticiple: "doing",
    thirdPersonSingular: "does",
  },
  draw: {
    head: "draw",
    preterite: "drew",
    pastParticiple: "drawn",
    presentParticiple: "drawing",
    thirdPersonSingular: "draws",
  },
  drive: {
    head: "drive",
    preterite: "drove",
    pastParticiple: "driven",
    presentParticiple: "driving",
    thirdPersonSingular: "drives",
  },
  eat: {
    head: "eat",
    preterite: "ate",
    pastParticiple: "eaten",
    presentParticiple: "eating",
    thirdPersonSingular: "eats",
  },
  end: {
    head: "end",
    preterite: "ended",
    pastParticiple: "ended",
    presentParticiple: "ending",
    thirdPersonSingular: "ends",
  },
  explain: {
    head: "explain",
    preterite: "explained",
    pastParticiple: "explained",
    presentParticiple: "explaining",
    thirdPersonSingular: "explains",
  },
  fall: {
    head: "fall",
    preterite: "fell",
    pastParticiple: "fallen",
    presentParticiple: "falling",
    thirdPersonSingular: "falls",
  },
  feel: {
    head: "feel",
    preterite: "felt",
    pastParticiple: "felt",
    presentParticiple: "feeling",
    thirdPersonSingular: "feels",
  },
  find: {
    head: "find",
    preterite: "found",
    pastParticiple: "found",
    presentParticiple: "finding",
    thirdPersonSingular: "finds",
  },
  follow: {
    head: "follow",
    preterite: "followed",
    pastParticiple: "followed",
    presentParticiple: "following",
    thirdPersonSingular: "follows",
  },
  get: {
    head: "get",
    preterite: "got",
    pastParticiple: "gotten",
    presentParticiple: "getting",
    thirdPersonSingular: "gets",
  },
  give: {
    head: "give",
    preterite: "gave",
    pastParticiple: "given",
    presentParticiple: "giving",
    thirdPersonSingular: "gives",
  },
  go: {
    head: "go",
    preterite: "went",
    pastParticiple: "gone",
    presentParticiple: "going",
    thirdPersonSingular: "goes",
  },
  grow: {
    head: "grow",
    preterite: "grew",
    pastParticiple: "grown",
    presentParticiple: "growing",
    thirdPersonSingular: "grows",
  },
  happen: {
    head: "happen",
    preterite: "happened",
    pastParticiple: "happened",
    presentParticiple: "happening",
    thirdPersonSingular: "happens",
  },
  have: {
    head: "have",
    preterite: "had",
    pastParticiple: "had",
    presentParticiple: "having",
    thirdPersonSingular: "has",
  },
  hear: {
    head: "hear",
    preterite: "heard",
    pastParticiple: "heard",
    presentParticiple: "hearing",
    thirdPersonSingular: "hears",
  },
  help: {
    head: "help",
    preterite: "helped",
    pastParticiple: "helped",
    presentParticiple: "helping",
    thirdPersonSingular: "helps",
  },
  hold: {
    head: "hold",
    preterite: "held",
    pastParticiple: "held",
    presentParticiple: "holding",
    thirdPersonSingular: "holds",
  },
  hope: {
    head: "hope",
    preterite: "hoped",
    pastParticiple: "hoped",
    presentParticiple: "hoping",
    thirdPersonSingular: "hopes",
  },
  include: {
    head: "include",
    preterite: "included",
    pastParticiple: "included",
    presentParticiple: "including",
    thirdPersonSingular: "includes",
  },
  increase: {
    head: "increase",
    preterite: "increased",
    pastParticiple: "increased",
    presentParticiple: "increasing",
    thirdPersonSingular: "increases",
  },
  keep: {
    head: "keep",
    preterite: "kept",
    pastParticiple: "kept",
    presentParticiple: "keeping",
    thirdPersonSingular: "keeps",
  },
  know: {
    head: "know",
    preterite: "knew",
    pastParticiple: "known",
    presentParticiple: "knowing",
    thirdPersonSingular: "knows",
  },
  learn: {
    head: "learn",
    preterite: "learned",
    pastParticiple: "learned",
    presentParticiple: "learning",
    thirdPersonSingular: "learns",
  },
  leave: {
    head: "leave",
    preterite: "left",
    pastParticiple: "left",
    presentParticiple: "leaving",
    thirdPersonSingular: "leaves",
  },
  let: {
    head: "let",
    preterite: "let",
    pastParticiple: "let",
    presentParticiple: "letting",
    thirdPersonSingular: "lets",
  },
  like: {
    head: "like",
    preterite: "liked",
    pastParticiple: "liked",
    presentParticiple: "liking",
    thirdPersonSingular: "likes",
  },
  live: {
    head: "live",
    preterite: "lived",
    pastParticiple: "lived",
    presentParticiple: "living",
    thirdPersonSingular: "lives",
  },
  look: {
    head: "look",
    preterite: "looked",
    pastParticiple: "looked",
    presentParticiple: "looking",
    thirdPersonSingular: "looks",
  },
  lose: {
    head: "lose",
    preterite: "lost",
    pastParticiple: "lost",
    presentParticiple: "losing",
    thirdPersonSingular: "loses",
  },
  love: {
    head: "love",
    preterite: "loved",
    pastParticiple: "loved",
    presentParticiple: "loving",
    thirdPersonSingular: "loves",
  },
  make: {
    head: "make",
    preterite: "made",
    pastParticiple: "made",
    presentParticiple: "making",
    thirdPersonSingular: "makes",
  },
  mean: {
    head: "mean",
    preterite: "meant",
    pastParticiple: "meant",
    presentParticiple: "meaning",
    thirdPersonSingular: "means",
  },
  meet: {
    head: "meet",
    preterite: "met",
    pastParticiple: "met",
    presentParticiple: "meeting",
    thirdPersonSingular: "meets",
  },
  move: {
    head: "move",
    preterite: "moved",
    pastParticiple: "moved",
    presentParticiple: "moving",
    thirdPersonSingular: "moves",
  },
  need: {
    head: "need",
    preterite: "needed",
    pastParticiple: "needed",
    presentParticiple: "needing",
    thirdPersonSingular: "needs",
  },
  offer: {
    head: "offer",
    preterite: "offered",
    pastParticiple: "offered",
    presentParticiple: "offering",
    thirdPersonSingular: "offers",
  },
  open: {
    head: "open",
    preterite: "opened",
    pastParticiple: "opened",
    presentParticiple: "opening",
    thirdPersonSingular: "opens",
  },
  pay: {
    head: "pay",
    preterite: "paid",
    pastParticiple: "paid",
    presentParticiple: "paying",
    thirdPersonSingular: "pays",
  },
  play: {
    head: "play",
    preterite: "played",
    pastParticiple: "played",
    presentParticiple: "playing",
    thirdPersonSingular: "plays",
  },
  put: {
    head: "put",
    preterite: "put",
    pastParticiple: "put",
    presentParticiple: "putting",
    thirdPersonSingular: "puts",
  },
  read: {
    head: "read",
    preterite: "read",
    pastParticiple: "read",
    presentParticiple: "reading",
    thirdPersonSingular: "reads",
  },
  remember: {
    head: "remember",
    preterite: "remembered",
    pastParticiple: "remembered",
    presentParticiple: "remembering",
    thirdPersonSingular: "remembers",
  },
  run: {
    head: "run",
    preterite: "ran",
    pastParticiple: "run",
    presentParticiple: "running",
    thirdPersonSingular: "runs",
  },
  say: {
    head: "say",
    preterite: "said",
    pastParticiple: "said",
    presentParticiple: "saying",
    thirdPersonSingular: "says",
  },
  see: {
    head: "see",
    preterite: "saw",
    pastParticiple: "seen",
    presentParticiple: "seeing",
    thirdPersonSingular: "sees",
  },
  seem: {
    head: "seem",
    preterite: "seemed",
    pastParticiple: "seemed",
    presentParticiple: "seeming",
    thirdPersonSingular: "seems",
  },
  sell: {
    head: "sell",
    preterite: "sold",
    pastParticiple: "sold",
    presentParticiple: "selling",
    thirdPersonSingular: "sells",
  },
  send: {
    head: "send",
    preterite: "sent",
    pastParticiple: "sent",
    presentParticiple: "sending",
    thirdPersonSingular: "sends",
  },
  set: {
    head: "set",
    preterite: "set",
    pastParticiple: "set",
    presentParticiple: "setting",
    thirdPersonSingular: "sets",
  },
  show: {
    head: "show",
    preterite: "showed",
    pastParticiple: "shown",
    presentParticiple: "showing",
    thirdPersonSingular: "shows",
  },
  sit: {
    head: "sit",
    preterite: "sat",
    pastParticiple: "sat",
    presentParticiple: "sitting",
    thirdPersonSingular: "sits",
  },
  sleep: {
    head: "sleep",
    preterite: "slept",
    pastParticiple: "slept",
    presentParticiple: "sleeping",
    thirdPersonSingular: "sleeps",
  },
  speak: {
    head: "speak",
    preterite: "spoke",
    pastParticiple: "spoken",
    presentParticiple: "speaking",
    thirdPersonSingular: "speaks",
  },
  spend: {
    head: "spend",
    preterite: "spent",
    pastParticiple: "spent",
    presentParticiple: "spending",
    thirdPersonSingular: "spends",
  },
  stand: {
    head: "stand",
    preterite: "stood",
    pastParticiple: "stood",
    presentParticiple: "standing",
    thirdPersonSingular: "stands",
  },
  start: {
    head: "start",
    preterite: "started",
    pastParticiple: "started",
    presentParticiple: "starting",
    thirdPersonSingular: "starts",
  },
  stay: {
    head: "stay",
    preterite: "stayed",
    pastParticiple: "stayed",
    presentParticiple: "staying",
    thirdPersonSingular: "stays",
  },
  stop: {
    head: "stop",
    preterite: "stopped",
    pastParticiple: "stopped",
    presentParticiple: "stopping",
    thirdPersonSingular: "stops",
  },
  study: {
    head: "study",
    preterite: "studied",
    pastParticiple: "studied",
    presentParticiple: "studying",
    thirdPersonSingular: "studies",
  },
  take: {
    head: "take",
    preterite: "took",
    pastParticiple: "taken",
    presentParticiple: "taking",
    thirdPersonSingular: "takes",
  },
  talk: {
    head: "talk",
    preterite: "talked",
    pastParticiple: "talked",
    presentParticiple: "talking",
    thirdPersonSingular: "talks",
  },
  teach: {
    head: "teach",
    preterite: "taught",
    pastParticiple: "taught",
    presentParticiple: "teaching",
    thirdPersonSingular: "teaches",
  },
  tell: {
    head: "tell",
    preterite: "told",
    pastParticiple: "told",
    presentParticiple: "telling",
    thirdPersonSingular: "tells",
  },
  think: {
    head: "think",
    preterite: "thought",
    pastParticiple: "thought",
    presentParticiple: "thinking",
    thirdPersonSingular: "thinks",
  },
  throw: {
    head: "throw",
    preterite: "threw",
    pastParticiple: "thrown",
    presentParticiple: "throwing",
    thirdPersonSingular: "throws",
  },
  touch: {
    head: "touch",
    preterite: "touched",
    pastParticiple: "touched",
    presentParticiple: "touching",
    thirdPersonSingular: "touches",
  },
  travel: {
    head: "travel",
    preterite: "traveled",
    pastParticiple: "traveled",
    presentParticiple: "traveling",
    thirdPersonSingular: "travels",
  },
  try: {
    head: "try",
    preterite: "tried",
    pastParticiple: "tried",
    presentParticiple: "trying",
    thirdPersonSingular: "tries",
  },
  turn: {
    head: "turn",
    preterite: "turned",
    pastParticiple: "turned",
    presentParticiple: "turning",
    thirdPersonSingular: "turns",
  },
  understand: {
    head: "understand",
    preterite: "understood",
    pastParticiple: "understood",
    presentParticiple: "understanding",
    thirdPersonSingular: "understands",
  },
  use: {
    head: "use",
    preterite: "used",
    pastParticiple: "used",
    presentParticiple: "using",
    thirdPersonSingular: "uses",
  },
  wait: {
    head: "wait",
    preterite: "waited",
    pastParticiple: "waited",
    presentParticiple: "waiting",
    thirdPersonSingular: "waits",
  },
  walk: {
    head: "walk",
    preterite: "walked",
    pastParticiple: "walked",
    presentParticiple: "walking",
    thirdPersonSingular: "walks",
  },
  want: {
    head: "want",
    preterite: "wanted",
    pastParticiple: "wanted",
    presentParticiple: "wanting",
    thirdPersonSingular: "wants",
  },
  work: {
    head: "work",
    preterite: "worked",
    pastParticiple: "worked",
    presentParticiple: "working",
    thirdPersonSingular: "works",
  },
};

const VERB_FORM_EXPLANATIONS = {
  base: {
    heading: "V1 - Base Form",
    howToCreate: "This is itself the base form.",
    creationExamples: [
      {
        key: 1,
        value: "---",
      },
    ],
    uses: [
      {
        key: 1,
        heading: "Present simple tense",
        description:
          "This tense is used to describe actions, facts, or situations that are habitual, general truths, scheduled events, or instructions.",
        examples: [
          { key: 1, value: "I <b>teach</b> grammar." },
          { key: 2, value: "They <b>drink</b> coffee every morning" },
          { key: 3, value: "The trains <b>leave</b> at 8 PM" },
          { key: 4, value: "You <b>turn</b> left at the traffic light" },
        ],
      },
      {
        key: 2,
        heading: "To plus infinitives",
        description: `We use this term when the base form of the verb is preceded by 'to'.
                      This structure is used in many ways in English.
                      It can be used as an adjective, an adverb, or a noun.
                      They key to remember is that if there is a 'to' in front, the verb is never acting as a verb.`,
        examples: [
          {
            key: 1,
            value:
              "She gave me a book <b>to read</b>. - adjective describing noun 'book'",
          },
          {
            key: 2,
            value:
              "She studies hard <b>to succeed</b>. - adverb modifying verb 'study'",
          },
          {
            key: 3,
            value:
              "This problem is difficult <b>to solve</b>. - adverb modifying adjective 'difficult'",
          },
          {
            key: 4,
            value:
              "He wants <b>to learn</b> grammar. - 'to learn' is a noun, the object of 'wants'",
          },
        ],
      },
      {
        key: 3,
        heading: "Bare infinitives",
        description: `We use this term when the base form of the verb appears without the preceding 'to'.
        This structure is used after modal verbs and with verbs of perception, permission, or causation.
        The key to remember is that the bare infinitive always acts as a verb.`,
        examples: [
          {
            key: 1,
            value: "She can <b>swim</b> very fast. - after modal verb 'can'",
          },
          {
            key: 2,
            value:
              "I saw him <b>run</b> across the street. - with verb of perception 'saw'",
          },
          {
            key: 3,
            value:
              "He made me <b>apologize</b>. - with verb of causation 'make'",
          },
        ],
      },
    ],
  },
  pastSimple: {
    heading: "V2 - Past Simple",
    howToCreate: `For regular verbs the past simple is the same as the past participle.
       We add -ed to the base verb.
       Sometimes a small spelling change is needed.
       Some verbs are irregular and the change is unpredictable.`,
    creationExamples: [
      { key: 1, value: "walk -> walked (simply add '-ed')" },
      { key: 2, value: "study -> studied (small spelling change)" },
      { key: 3, value: "go -> went (irregular)" },
    ],
    uses: [
      {
        key: 1,
        heading: "Past simple tense",
        description: `This tense is used to describe actions that happened and finished in the past.
           It is the backbone of past narratives, as it helps describe sequences of events that happened in a clear, chronological order.`,
        examples: [
          { key: 1, value: "Yesterday I studi<b>ed</b> a lot of grammar." },
          {
            key: 2,
            value:
              "He <b>woke</b> up late, rush<b>ed</b> to catch the bus, and arriv<b>ed</b> at work just in time.",
          },
        ],
      },
      {
        key: 2,
        heading: "Second conditional sentences",
        description: `Second conditional sentences describe hypothetical situations in the present or future that are unlikely or impossible.
        They follow the structure if + past simple, (then) would + base verb.`,
        examples: [
          {
            key: 1,
            value:
              "If I studi<b>ed</b> grammar for four hours every day, I would be very good at it.",
          },
          {
            key: 2,
            value: "If she <b>won</b> the lottery, she would travel the world.",
          },
        ],
      },
      {
        key: 3,
        heading: "Reported speech",
        description:
          "Reported speech can shift to past simple if the original statement is in present simple. ",
        examples: [
          {
            key: 1,
            value:
              "Direct - 'I live in Sydney', she said. Reported - She said that she liv<b>ed</b> in Sydney",
          },
          {
            key: 2,
            value:
              "Direct - 'I work at a bank', she said. Reported - He said that he work<b>ed</b> at a bank",
          },
        ],
      },
    ],
  },
  pastParticiple: {
    heading: "V3 - Past Participle",
    howToCreate: `For regular verbs the past participle is the same as the past simple.
       We add -ed to the base verb.
       Sometimes a small spelling change is needed.
       Some verbs are irregular and the change is unpredictable.`,
    creationExamples: [
      { key: 1, value: "talk -> talked (simply add '-ed')" },
      {
        key: 2,
        value:
          "believe -> believed (small spelling change, only need to add 'd')",
      },
      { key: 3, value: "begin -> begun (irregular)" },
    ],
    uses: [
      {
        key: 1,
        heading: "All perfect tenses",
        description: `These tenses include the present perfect, the present perfect continuous, the past perfect and the past perfect continuous.
        These tenses emphasize a connection between different points in time.`,
        examples: [
          { key: 1, value: "He has studi<b>ed</b> grammar." },
          { key: 2, value: "She has <b>been</b> studying grammar." },
          { key: 3, value: "They had studi<b>ed</b> grammar." },
          { key: 4, value: "They had <b>been</b> studying grammar." },
        ],
      },
      {
        key: 3,
        heading: "Passive voice",
        description: `The past participle is a fundamental part of all passive tenses, regardless of whether the sentence is in the present, past, or future.
          The past participle is used with a form of the verb 'to be' to indicate that the subject is receiving the action.`,
        examples: [
          { key: 1, value: "Grammar is studi<b>ed</b> by many people." },
          { key: 2, value: "Grammar was studi<b>ed</b> in the past." },
          { key: 3, value: "Grammar will be studi<b>ed</b> in the future." },
          { key: 4, value: "Grammar has been studi<b>ed</b> for many years." },
        ],
      },
      {
        key: 4,
        heading: "Adjectives",
        description:
          "A past participle can act as an adjective, either directly on a noun, or as part of a participle phrase.",
        examples: [
          { key: 1, value: "The brok<b>en</b> window needs to be repaired." },
          {
            key: 2,
            value:
              "Grammar, develop<b>ed</b> many years ago, it still important today.",
          },
        ],
      },
    ],
  },
  presentParticiple: {
    heading: "V4 - Present Participle",
    howToCreate: `We add -ing to the base verb.
       Sometimes a small spelling change is needed.`,
    creationExamples: [
      { key: 1, value: "accept -> accepting (simply add '-ing')" },
      {
        key: 2,
        value: "change -> changing (small spelling change, drop the 'e')",
      },
    ],
    uses: [
      {
        key: 1,
        heading: "All continuous tenses",
        description: `These tenses include the present continuous, present perfect continuous, past continuous and past perfect continuous.
          These tenses emphasize an action in progress at a particular time.`,
        examples: [
          { key: 1, value: "He is study<b>ing</b> grammar." },
          { key: 2, value: "He has been study<b>ing</b> grammar." },
          { key: 3, value: "He was study<b>ing</b> grammar." },
          { key: 4, value: "He had been stud<b>ing</b> grammar." },
        ],
      },
      {
        key: 5,
        heading: "Adjectives",
        description:
          "A present participle can act as an adjective, either directly on a noun, or as part of a participle phrase.",
        examples: [
          { key: 1, value: "He finds study bor<b>ing</b>." },
          {
            key: 2,
            value: "The boy, smil<b>ing</b> happily, studied.",
          },
        ],
      },
      {
        key: 6,
        heading: "Gerunds",
        description: "A gerund is when a present participle acts as a noun.",
        examples: [
          {
            key: 1,
            value:
              "Study<b>ing</b> grammar is one of the coolest things you can do.",
          },
        ],
      },
    ],
  },
  thirdPersonSingular: {
    heading: "V5 - Third Person Singular",
    howToCreate: `We add -s to the base verb.
       Sometimes a small spelling change is needed.`,
    creationExamples: [
      { key: 1, value: "build -> builds (simply add '-s')" },
      {
        key: 2,
        value:
          "carry -> carries (small spelling change, drop '-y' and add '-ies')",
      },
    ],
    uses: [
      {
        key: 1,
        heading: "Present simple tense",
        description: `The -s is added for the present simple tense when the subject is a third person.
        The subject pronoun will be either he, she, or it.`,
        examples: [
          {
            key: 1,
            value: "He find<b>s</b> grammar very difficult.",
          },
          {
            key: 2,
            value: "However she learn<b>s</b> it very easily.",
          },
          {
            key: 3,
            value: "It doe<b>s</b> not seem too complicated.",
          },
        ],
      },
    ],
  },
};

export {
  VERBS,
  MODAL_VERBS,
  SENTENCE_TYPES,
  SUBJECT_PRONOUNS,
  VERB_FORM_EXPLANATIONS,
};
