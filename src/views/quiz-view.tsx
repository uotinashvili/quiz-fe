import { h } from '@stencil/core';
import state from '../model/store';

export default class QuizView {
  getQuizView() {
    return (
      <div>
        {state.user.token && (
          <div class="row">
            <div class="col-lg-3">
              <div class="row">
                <h3 class="col-lg-6">Quiz List</h3>
                <div class="col-lg-6">
                  <stencil-route-link url="/quiz/create">
                    <a class="btn btn-outline-primary">create new quiz</a>
                  </stencil-route-link>
                </div>
              </div>
              <quiz-list-component></quiz-list-component>
            </div>

            <div class="col-lg-9">
              <stencil-router>
                <stencil-route url="/quiz/create" component="create-quiz-component" />
              </stencil-router>

              <stencil-router>
                <stencil-route url="/quiz/questions/:id" component="question-component" />
              </stencil-router>
            </div>
          </div>
        ) || (
          <div>
            <unauthorized-component></unauthorized-component>
          </div>
        )}
      </div>
    );
  }
}
