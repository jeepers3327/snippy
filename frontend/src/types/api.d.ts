interface GistFile {
  id: string;
  gistId: string;
  language: string;
  filename: string;
  snippet: string;
}

interface Comment {
  id: string;
  comment: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
}

interface Gist {
  id: string;
  isPrivate: boolean;
  description: string;
  author: User;
  files: GistFile[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
  stargazers: Stargazers[];
}

interface Stargazers {
  gistId: string;
  userId: string;
}

interface GistSearch {
  id: string;
  description: string;
  avatarUrl: string;
  username: string;
  files: GistFile[];
  commentCounts: number;
  createdAt: string;
}

interface NestedEntitiesCount {
  comments?: number;
  files?: number;
  stargazers?: number;
}

interface PartialGist {
  id: string;
  isPrivate: boolean;
  stargazers: number;
  author: User;
  files: GistFile[];
  createdAt: string;
  updatedAt: string;
  _count: NestedEntitiesCount;
}
