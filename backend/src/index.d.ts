import {
  Gist,
  Comment,
  GistFile,
  Stargazers,
  User as UserModel,
} from '@prisma/client';

declare global {
  namespace Express {
    interface User extends UserModel {}
  }

  interface BaseGist extends Gist {}
  interface GistWithAuthor extends Gist {
    author: {
      id: string;
      name: string;
      avatarUrl: string;
      username: string;
    };
  }

  interface GistBaseResponse extends Gist {
    author: {
      id: string;
      name: string;
      avatarUrl: string;
      username: string;
    };
    files: GistFile[];
  }

  interface GistWithEntityCounts extends GistBaseResponse {
    _count: {
      comments: number;
      files: number;
      stargazers: number;
    };
  }

  interface GistDetails extends GistBaseResponse {
    author: {
      id: string;
      name: string;
      avatarUrl: string;
      username: string;
    };
    comments: (Comment & {
      user: {
        id: string;
        createdAt: Date;
        avatarUrl: string;
        username: string;
      };
    })[];
    files: GistFile[];
    stargazers: Stargazers[];
  }
}
