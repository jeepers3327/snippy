export const AuthorCustomSelect = {
  select: {
    id: true,
    name: true,
    username: true,
    avatarUrl: true,
  },
};

export const UserCommentCustomSelect = {
  select: {
    createdAt: true,
    avatarUrl: true,
    username: true,
    id: true,
  },
};

export const GistFilter = {
  author: AuthorCustomSelect,
  comments: {
    include: {
      user: {
        select: UserCommentCustomSelect,
      },
    },
  },
  files: true,
};
