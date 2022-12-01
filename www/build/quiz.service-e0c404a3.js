class QuizService {
  constructor() {
    this.API_HOST = "http://localhost:3000";
  }
  async getAllQuizes() {
    try {
      console.log('host-', this.API_HOST);
      const response = await fetch(`${this.API_HOST}/quiz/all`);
      const json = await response.json();
      return json;
    }
    catch (err) {
      console.log(err);
    }
  }
  async getQuestionsByQuizId(id) {
    try {
      const response = await fetch(`${this.API_HOST}/quiz/questions/${id}`);
      const json = await response.json();
      return json;
    }
    catch (err) {
      console.log(err);
    }
  }
  async getResults(id) {
    try {
      const response = await fetch(`${this.API_HOST}/quiz/results/${id}`);
      const json = await response.json();
      return json;
    }
    catch (err) {
      console.log(err);
    }
  }
  async submitAnswers(answers) {
    try {
      const response = await fetch('${this.API_HOST}/quiz/result/sendanswers', {
        method: 'POST',
        body: JSON.stringify(answers),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('json-', json);
    }
    catch (err) {
      console.log(err);
    }
  }
  async submitQuiz(quiz) {
    try {
      const response = await fetch('${this.API_HOST}/quiz/create', {
        method: 'POST',
        body: JSON.stringify(quiz),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      console.log('json-', json);
    }
    catch (err) {
      console.log(err);
    }
  }
}

export { QuizService as Q };
