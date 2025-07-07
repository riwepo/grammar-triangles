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

const PAGE_EXPLANATIONS = {
  triangles: [
    {
      key: 1,
      content:
        "In English grammar, verbs have five main forms, often labeled as V1 to V5.",
    },
    {
      key: 2,
      content:
        "These numbers correspond to the labels on the points in the triangle above.",
    },
  ],
  pattern: [
    {
      key: 1,
      content:
        "In English grammar, there are two common helper verbs that can come before the main (or 'boss') verb.",
    },
    {
      key: 2,
      content:
        "Helper verb 'have' is shown in green, and occupies the first slot.",
    },
    {
      key: 3,
      content:
        "'Helper verb 'be' is shown in blue, and occupies the second slot.",
    },
    {
      key: 4,
      content:
        "Following the green helper verb 'have' will always be a Past Participle, V3, lower right corner form of verb.",
    },
    {
      key: 5,
      content:
        "Following the blue helper verb 'have' will always be a Present Participle, V4, center heart form of verb.",
    },
  ],
  modals: [
    {
      key: 1,
      content:
        "In English grammar, there is a special group of auxillary verbs called modal verbs, which include 'will', 'can', 'might' etc.",
    },
    {
      key: 2,
      content:
        "There are only about 20 modal verbs, while there are about 10,000 normal verbs.",
    },
    {
      key: 3,
      content:
        "Modal verbs are used in front of normal verbs, and express possibility, necessity, permission, ability, or obligation."
    },
    {
      key: 4,
      content:
        "Modal verbs only have one form. They don't fit into our verb triangle.",
    },
    {
      key: 5,
      content:
        "The verb following a modal verb is always in 'bare infinitive' form i.e. no 'to'. For example 'I can teach.'",
    },
    {
      key: 6,
      content:
        "To make a question when there is a modal verb, all we have to do is swap the subject and the modal. Try it above.",
    },
     {
      key: 7,
      content:
        "In the diagram above, we can make  588 differnet sentences by combining different subjects (7), modals (21) and aspects (4).",
    },
  ],
  tenses: [
    {
      key: 1,
      content:
        "In the diagram above we can make statements, negative statements and quetions for the 8 different tenses.",
    },
    {
      key: 2,
      content:
        "Notice how it is always the first verb in the sentence that changes with the subject and the past/present.",
    },
    {
      key: 3,
      content:
        "Notice how the helper verb 'do' is used in the simple tenses, to make negatives and questions."
    },
    {
      key: 4,
      content:
        "Notice how the 'not' always goes after the first verb when making negatives.",
    }, 
    {
      key: 5,
      content:
        "Notice how the subject swaps with first verb when making questions.",
    }, 
    {
      key: 6,
      content:
        "Notice how the 'ing' heart verb form 4 always always follows the blue 'be' helper verb.",
    },
    {
      key: 7,
      content:
        "Notice how the bottom right past participle verb form 3 always always follows the green 'have' helper verb.",
    },           
  ],
};

export { VERB_FORM_EXPLANATIONS, PAGE_EXPLANATIONS };
