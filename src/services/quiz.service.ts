import { IQuestion, IQuiz, IResult, SendAnswerDto } from "../model/question.model";

export default class QuizService {
    API_HOST = process.env.API_HOST;
    
    constructor() {}

    async getAllQuizes(): Promise<IQuiz[]> {
        try {
            const response = await fetch(`${this.API_HOST}/quiz/all`);
            const json = await response.json() as IQuiz[];

            return json;
        } catch (err) {
            console.error(err);
        }
    }

    async getQuestionsByQuizId(id: string): Promise<IQuestion[]> {
        try {
            const response = await fetch(`${this.API_HOST}/quiz/questions/${id}`);
            const json = await response.json() as IQuestion[];

            return json;
        } catch (err) {
            console.error(err);
        }
    }

    async getResults(id: string): Promise<IResult[]> {
        try {
            const response = await fetch(`${this.API_HOST}/quiz/results/${id}`);
            const json = await response.json() as IResult[];

            return json;
        } catch (err) {
            console.error(err);
        }
    }

    async submitAnswers(answers: SendAnswerDto) {
        try {
            const response = await fetch(`${this.API_HOST}/quiz/result/sendanswers`, {
                method: 'POST',
                body: JSON.stringify(answers),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
        } catch (err) {
            console.error(err);
        }
    }

    async submitQuiz(quiz: IQuiz) {
        try {
            const response = await fetch(`${this.API_HOST}/quiz/create`, {
                method: 'POST',
                body: JSON.stringify(quiz),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
        } catch (err) {
            console.error(err);
        }
    }
}