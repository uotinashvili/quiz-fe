import { MatchResults } from '@stencil-community/router';
import { Component, h, Prop, State, Watch } from '@stencil/core';
import { IResult } from '../../../model/question.model';
import QuizService from '../../../services/quiz.service';
import { socket } from '../../../services/shared-socket';

@Component({
  tag: 'results-component',
  styleUrl: 'results.css',
})
export class ResultsComponent {
  @Prop() match: MatchResults;
  @State() quizId: number = 0;
  @State() results: IResult[];

  @socket.Receive('refreshResults') onReceive(response: boolean): void {
    if (response) {
      this.getResults(this.quizId.toString());
    }
  }

  quizService = new QuizService();

  async componentWillLoad() {
    this.quizId = +this.match.params.id;
    this.getResults(this.quizId.toString());
  }

  @Watch('match')
  reload() {
    this.quizId = +this.match.params.id;
    this.getResults(this.match.params.id);
  }

  async getResults(id: string) {
    this.results = await this.quizService.getResults(id);
  }

  render() {
    return (
      <div>
        {this.results && <h3>results</h3>}
        <table class="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Total Count</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.results &&
              this.results.map(result => {
                return (
                  <tr>
                    <td>{result.userName}</td>
                    <td>{result.totalCount}</td>
                    <td>{result.score}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
