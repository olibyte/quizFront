import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent {

    quizId
    questions

    constructor(private api: ApiService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.quizId = this.route.snapshot.paramMap.get('quizId');

        this.api.getQuestions(this.quizId).subscribe(res => {
            this.questions = res;

            this.questions.forEach(q => {
                q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
                shuffle(q.answers);
            });
        });
    }
    step = 0;

    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
}
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i-1], a[j]] = [a[j], a[i-1]];
    }
}