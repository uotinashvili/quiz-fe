import { Component, h, State } from '@stencil/core';
import { IQuiz } from '../../../model/question.model';
import QuizService from '../../../services/quiz.service';
import { socket } from '../../../services/shared-socket';

@Component({
  tag: 'quiz-list-component',
  styleUrl: 'quiz-list.css',
})
export class QuizListComponent {
  @State() quizes: IQuiz[];

  quizService = new QuizService();

  @socket.Receive('refreshQuizList') onReceive(data: any): void {
    this.quizes = JSON.parse(data);
  }

  async componentWillLoad() {
    await this.loadQuizes();
  }

  async loadQuizes() {
    this.quizes = await this.quizService.getAllQuizes();
  }

  render() {
    return (
      <div>
        <ul class="list-group">
          {this.quizes &&
            this.quizes.map(quiz => {
              return (
                <li class="list-group-item">
                  <stencil-route-link url={`/quiz/questions/${quiz.id}`}>
                    <a>{quiz.title}</a>
                  </stencil-route-link>
                </li>
              );
            })}
        </ul>

        <stencil-router>
          <stencil-route url="/quiz/questions/:id" component="results-component" />
        </stencil-router>
      </div>
    );
  }
}
