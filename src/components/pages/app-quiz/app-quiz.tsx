import { Component, h, Listen } from '@stencil/core';
import { IoEmitter } from 'stencil-socket.io';
import { IQuestion, IQuiz, SendAnswerDto } from '../../../model/question.model';
import QuizService from '../../../services/quiz.service';
import { socket } from '../../../services/shared-socket';
import QuizView from '../../../views/quiz-view';

@Component({
  tag: 'app-quiz',
  styleUrl: 'app-quiz.css',
})
export class AppQuiz {
  quizes: IQuiz[];
  questions: IQuestion[];
  quizService = new QuizService();

  @socket.Emit('onCreateQuiz') createQuizEmmitter: IoEmitter<true>;
  @socket.Emit('onSendResults') sendResultsEmitter: IoEmitter<true>;

  @Listen('submitResults')
  async submitResults(event: CustomEvent<SendAnswerDto>) {
    const data = event.detail;
    await this.quizService.submitAnswers(data);
    this.sendResultsEmitter.emit(true);
  }

  @Listen('onSubmitQuiz')
  async onSubmitQuiz(event: CustomEvent<IQuiz>) {
    const data = event.detail;
    await this.quizService.submitQuiz(data);
    this.createQuizEmmitter.emit(true);
  }

  render() {
    const view = new QuizView();
    return (
      <layout-component>
        <div>{view.getQuizView()}</div>
      </layout-component>
    );
  }
}
