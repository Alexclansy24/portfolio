export interface NavItem {
  href: string;
  label: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  icon: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  icon: string;
  category?: string;
  year?: string;
  status?: 'Completed' | 'In Progress' | 'Planning';
}

// ... rest of your existing types


export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Full markdown/HTML content
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  icon: string;
  author: string;
  published: boolean;
}

// ... rest of your existing types


