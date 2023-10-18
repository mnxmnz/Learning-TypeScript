export class Question {
  protected static readonly answer: 'bash';
  protected static readonly prompt = "What's an ogre's favorite programming language?";

  guess(getAnswer: (prompt: string) => string) {
    const answer = getAnswer(Question.prompt);

    // OK
    if (answer === Question.answer) {
      console.log('You got it!');
    } else {
      console.log('Try again...');
    }
  }
}

Question.answer;
// ERROR: 'answer' 속성은 보호된 속성이며 'Question' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
