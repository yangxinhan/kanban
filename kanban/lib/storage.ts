import { Issue } from '@/types/issue';

class IssueStorage {
  private issues: Issue[] = [];
  constructor() {
    this.issues = [
      { id: '1', title: '任務一', description: '敘述一', status: 'todo' },
      { id: '2', title: '任務二', description: '敘述二', status: 'doing' },
      { id: '3', title: '任務三', description: '敘述三', status: 'done' },
    ];
  }

  getAll() {
    return [...this.issues];
  }
}

export const storage = new IssueStorage();
