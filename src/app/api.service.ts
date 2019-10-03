import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    constructor(private http: HttpClient) { }

    getQuestions() {
        return this.http.get('https://localhost:44342/api/questions');
    }
    postQuestion(question) {
        this.http.post('https://localhost:44342/api/questions', question).subscribe(res => {
            console.log(res)
        })
    }
    putQuestion(question) {
        this.http.put(`https://localhost:44342/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res)
        })
    }
    selectQuestion(question) {
        this.selectedQuestion.next(question);
    }
}