interface LoginInput {
  username: string;
  password: string;
}

interface RegisterInput {
  name: string;
  avatarUrl: string;
  username: string;
  password: string;
}

interface CreateFileInput {
  id: string;
  filename: string;
  snippet: string;
  language: string;
}

interface UpdateFileInput {
  id: string;
  gistId: string;
  filename: string;
  snippet: string;
  language: string;
}

interface CreateGistInput {
  description: string;
  isPrivate: boolean;
  authorId: string;
  files: CreateFileInput[];
}

interface UpdateGistData {
  id: string;
  description: string;
  authorId: string;
  isPrivate: boolean;
  files: GistFile[];
}

interface UpdateGistInput {
  authorId: string;
  description: string;
  isPrivate: boolean;
  deletedGistFiles: string[];
  updatedGistFiles: UpdateFileInput[];
}

interface AddCommentInput {
  comment: string;
  userId: string;
  gistId: string;
}
