/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil-community/router";
import { IQuiz, SendAnswerDto } from "./model/question.model";
export namespace Components {
    interface AppAuth {
    }
    interface AppHome {
    }
    interface AppQuiz {
    }
    interface AppRoot {
    }
    interface CreateQuizComponent {
        "history": RouterHistory;
    }
    interface LayoutComponent {
    }
    interface QuestionComponent {
        "match": MatchResults;
    }
    interface QuizListComponent {
    }
    interface ResultsComponent {
        "match": MatchResults;
    }
    interface TimerComponent {
    }
    interface UnauthorizedComponent {
    }
}
declare global {
    interface HTMLAppAuthElement extends Components.AppAuth, HTMLStencilElement {
    }
    var HTMLAppAuthElement: {
        prototype: HTMLAppAuthElement;
        new (): HTMLAppAuthElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppQuizElement extends Components.AppQuiz, HTMLStencilElement {
    }
    var HTMLAppQuizElement: {
        prototype: HTMLAppQuizElement;
        new (): HTMLAppQuizElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCreateQuizComponentElement extends Components.CreateQuizComponent, HTMLStencilElement {
    }
    var HTMLCreateQuizComponentElement: {
        prototype: HTMLCreateQuizComponentElement;
        new (): HTMLCreateQuizComponentElement;
    };
    interface HTMLLayoutComponentElement extends Components.LayoutComponent, HTMLStencilElement {
    }
    var HTMLLayoutComponentElement: {
        prototype: HTMLLayoutComponentElement;
        new (): HTMLLayoutComponentElement;
    };
    interface HTMLQuestionComponentElement extends Components.QuestionComponent, HTMLStencilElement {
    }
    var HTMLQuestionComponentElement: {
        prototype: HTMLQuestionComponentElement;
        new (): HTMLQuestionComponentElement;
    };
    interface HTMLQuizListComponentElement extends Components.QuizListComponent, HTMLStencilElement {
    }
    var HTMLQuizListComponentElement: {
        prototype: HTMLQuizListComponentElement;
        new (): HTMLQuizListComponentElement;
    };
    interface HTMLResultsComponentElement extends Components.ResultsComponent, HTMLStencilElement {
    }
    var HTMLResultsComponentElement: {
        prototype: HTMLResultsComponentElement;
        new (): HTMLResultsComponentElement;
    };
    interface HTMLTimerComponentElement extends Components.TimerComponent, HTMLStencilElement {
    }
    var HTMLTimerComponentElement: {
        prototype: HTMLTimerComponentElement;
        new (): HTMLTimerComponentElement;
    };
    interface HTMLUnauthorizedComponentElement extends Components.UnauthorizedComponent, HTMLStencilElement {
    }
    var HTMLUnauthorizedComponentElement: {
        prototype: HTMLUnauthorizedComponentElement;
        new (): HTMLUnauthorizedComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-auth": HTMLAppAuthElement;
        "app-home": HTMLAppHomeElement;
        "app-quiz": HTMLAppQuizElement;
        "app-root": HTMLAppRootElement;
        "create-quiz-component": HTMLCreateQuizComponentElement;
        "layout-component": HTMLLayoutComponentElement;
        "question-component": HTMLQuestionComponentElement;
        "quiz-list-component": HTMLQuizListComponentElement;
        "results-component": HTMLResultsComponentElement;
        "timer-component": HTMLTimerComponentElement;
        "unauthorized-component": HTMLUnauthorizedComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppAuth {
    }
    interface AppHome {
    }
    interface AppQuiz {
    }
    interface AppRoot {
    }
    interface CreateQuizComponent {
        "history"?: RouterHistory;
        "onOnSubmitQuiz"?: (event: CustomEvent<IQuiz>) => void;
    }
    interface LayoutComponent {
    }
    interface QuestionComponent {
        "match"?: MatchResults;
        "onSubmitResults"?: (event: CustomEvent<SendAnswerDto>) => void;
    }
    interface QuizListComponent {
    }
    interface ResultsComponent {
        "match"?: MatchResults;
    }
    interface TimerComponent {
    }
    interface UnauthorizedComponent {
    }
    interface IntrinsicElements {
        "app-auth": AppAuth;
        "app-home": AppHome;
        "app-quiz": AppQuiz;
        "app-root": AppRoot;
        "create-quiz-component": CreateQuizComponent;
        "layout-component": LayoutComponent;
        "question-component": QuestionComponent;
        "quiz-list-component": QuizListComponent;
        "results-component": ResultsComponent;
        "timer-component": TimerComponent;
        "unauthorized-component": UnauthorizedComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-auth": LocalJSX.AppAuth & JSXBase.HTMLAttributes<HTMLAppAuthElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-quiz": LocalJSX.AppQuiz & JSXBase.HTMLAttributes<HTMLAppQuizElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "create-quiz-component": LocalJSX.CreateQuizComponent & JSXBase.HTMLAttributes<HTMLCreateQuizComponentElement>;
            "layout-component": LocalJSX.LayoutComponent & JSXBase.HTMLAttributes<HTMLLayoutComponentElement>;
            "question-component": LocalJSX.QuestionComponent & JSXBase.HTMLAttributes<HTMLQuestionComponentElement>;
            "quiz-list-component": LocalJSX.QuizListComponent & JSXBase.HTMLAttributes<HTMLQuizListComponentElement>;
            "results-component": LocalJSX.ResultsComponent & JSXBase.HTMLAttributes<HTMLResultsComponentElement>;
            "timer-component": LocalJSX.TimerComponent & JSXBase.HTMLAttributes<HTMLTimerComponentElement>;
            "unauthorized-component": LocalJSX.UnauthorizedComponent & JSXBase.HTMLAttributes<HTMLUnauthorizedComponentElement>;
        }
    }
}
