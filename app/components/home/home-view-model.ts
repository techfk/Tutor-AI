import { Observable } from '@nativescript/core';
import { AIService } from '../../services/ai-service';

export class HomeViewModel extends Observable {
  private aiService: AIService;
  private _welcomeMessage: string;
  private _lastStudySession: string;
  private _recommendations: Array<any>;

  constructor() {
    super();
    this.aiService = new AIService();
    this.initializeData();
  }

  async initializeData() {
    this.welcomeMessage = 'Welcome back, Student!';
    this.lastStudySession = 'Last study session: 2 hours ago';
    this.recommendations = await this.loadRecommendations();
  }

  async loadRecommendations() {
    const recommendations = await this.aiService.generateRecommendations('user123');
    return recommendations.map(rec => ({
      title: rec,
      description: 'Recommended based on your study pattern'
    }));
  }

  get welcomeMessage(): string {
    return this._welcomeMessage;
  }

  set welcomeMessage(value: string) {
    if (this._welcomeMessage !== value) {
      this._welcomeMessage = value;
      this.notifyPropertyChange('welcomeMessage', value);
    }
  }

  get lastStudySession(): string {
    return this._lastStudySession;
  }

  set lastStudySession(value: string) {
    if (this._lastStudySession !== value) {
      this._lastStudySession = value;
      this.notifyPropertyChange('lastStudySession', value);
    }
  }

  get recommendations(): Array<any> {
    return this._recommendations;
  }

  set recommendations(value: Array<any>) {
    if (this._recommendations !== value) {
      this._recommendations = value;
      this.notifyPropertyChange('recommendations', value);
    }
  }

  onAskQuestion() {
    // Implement question asking logic
    console.log('Ask Question tapped');
  }

  onViewNotes() {
    // Implement notes viewing logic
    console.log('View Notes tapped');
  }

  onStartQuiz() {
    // Implement quiz starting logic
    console.log('Start Quiz tapped');
  }

  onViewProgress() {
    // Implement progress viewing logic
    console.log('View Progress tapped');
  }
}