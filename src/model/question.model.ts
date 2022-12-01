export interface IQuiz {
    id: number;
    title: string;
    creatorId: string;
    creator: string;
    questions: IQuestion[];
}

export interface IQuestion {
    id: number;
    title: string;
    answers: IOption[];
}

interface IOption {
    id: number;
    option: string;
    correctAnswer?: boolean;
}

export interface ICreateQuiz {
    title: string;
    creator: string;
    creatorId: string;
    questions: ICreateQuestion[];
}

export interface ICreateQuestion {
    question: string;
    answer1: string;
    answer2: string;
    correctAnswer: string;
}

export interface SendAnswerDto {
    userName: string;
    quizId: number;
    answers: number[];
}

export interface IResult {
    id: number;
    userName: string;
    quizId: number;
    score: number;
    totalCount: number;
}