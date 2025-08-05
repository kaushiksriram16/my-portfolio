interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export const projects: Project[] = [
    { id: 1, title: 'Smart-Expense-Tracker', description: 'An AI powered smart companion for analyzing your expenses.', category: 'Web App', imageUrl: 'https://placehold.co/600x400/f3f4f6/1f2937?text=Project+One' },
    { id: 2, title: 'Film-Explore', description: 'A movie exploration app that lets you create watch lists and discover new films.', category: 'Web App', imageUrl: '/images/film-explore.jpg' },
    { id: 3, title: 'ToDo Application', description: 'A personal task management tool to keep track of your to-dos.', category: 'Web App', imageUrl: '/images/to-do.jpg' },
]