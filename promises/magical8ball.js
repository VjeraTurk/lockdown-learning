const answers = [
  'It is certain',
  'Without a doubt',
  'Most likely',
  'Yes',
  'Reply hazy, try again',
  'Ask again later',
  'My reply is no',
  'No',
  'Very doubtful',
];

export function ask(question, callback) {

  const doesWork = Math.random() >= 0.5;

  if(callback) {
    setTimeout(() => {
      if(doesWork) {
        callback(null, answers[Math.floor(Math.random() * answers.length)]);
      } else {
        callback(new Error('Magical 8-ball is broken.'));
      }
    }, 1000);
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(doesWork) {
          resolve(answers[Math.floor(Math.random() * answers.length)]);
        } else {
          reject(new Error('Magical 8-ball is broken.'));
        }
      }, 1000);
    });
  }
}
