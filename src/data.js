export const data = {
  questions: [
    {
      q: 'Who is the creator of Vue?',
      answers: [
        { text: 'Mark Zuckerberg', is_correct: false },
        { text: 'Elon Musk', is_correct: false },
        { text: 'Evan You', is_correct: true },
        { text: 'Brendan Eich', is_correct: false },
      ],
    },
    {
      q: 'In what programming language is Vue written?',
      answers: [
        { text: 'C#', is_correct: false },
        { text: 'JavaScript', is_correct: true },
        { text: 'Java', is_correct: false },
        { text: 'Python', is_correct: false },
      ],
    },
    {
      q: 'What is a Single-File Component?',
      answers: [
        {
          text: 'A file with a .vue extension that contains a Vue component.',
          is_correct: true,
        },
        {
          text: 'A JavaScript file that contains the logic for a Component.',
          is_correct: false,
        },
        {
          text: 'An HTML file that represent one Component in your application.',
          is_correct: false,
        },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 2,
      title: 'Try again!',
      desc: 'Do a little more studying and you may succeed!',
    },
    {
      min: 3,
      max: 3,
      title: "Wow, you're a genius!",
      desc: 'Studying has definitely paid off for you!',
    },
  ],
};
