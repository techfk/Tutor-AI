export interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  content: string;
  type: 'note' | 'quiz' | 'flashcard';
  createdAt: Date;
  updatedAt: Date;
}