import { IncomingHttpHeaders } from 'http';

import axios from 'axios';

import { ResourceNotFoundError, UnauthenticatedError } from '../errors';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Gists
export const fetchAllGists = async () => {
  const result = await request.get(`/gists`).then((resp) => resp.data);

  return result;
};

export const fetchUserGists = async (username: string) => {
  const result = await request
    .get(`/gists/user/${username}`)
    .then((resp) => resp.data)
    .catch((error) => {
      throw new ResourceNotFoundError(error);
    });

  return result;
};

export const fetchOneGist = async (id: string) => {
  const result = await request
    .get(`/gists/${id}`)
    .then((resp) => resp.data)
    .catch((error) => {
      throw new ResourceNotFoundError(error);
    });

  return result;
};

export const searchGists = async (q: string) => {
  const result = await request
    .get(`/search?q=${q}`)
    .then((resp) => resp.data)
    .catch((error) => error);

  return result;
};

export const createGist = async (payload: CreateGistInput) => {
  const result = await request
    .post(`/gists`, payload)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });
  return result;
};

export const updateGist = async (id: string, payload: UpdateGistInput) => {
  const result = await request
    .patch(`/gists/${id}`, payload)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });
  return result;
};

export const deleteGist = async (username: string, gistId: string) => {
  const result = await request
    .delete(`/gists/${username}/${gistId}`)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });

  return result;
};

export const starGist = async (gistId: string) => {
  const result = await request
    .post(`/gists/${gistId}/star`)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });

  return result;
};

export const unstarGist = async (gistId: string) => {
  const result = await request
    .post(`/gists/${gistId}/unstar`)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });

  return result;
};

export const setPublicGist = async (gistId: string) => {
  const result = await request
    .patch(`/gists/${gistId}/public`)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });

  return result;
};

// Comments

export const addComment = async (payload: AddCommentInput) => {
  const comment = await request
    .post(`/comments`, payload)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });

  return comment;
};

export const updateComment = async (commentId: string, payload: string) => {
  const comment = await request
    .patch(`/comments/${commentId}`, { comment: payload })
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });

  return comment;
};

export const removeComment = async (commentId: string) => {
  const comment = await request
    .delete(`/comments/${commentId}`)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });

  return comment;
};

// Auth and Users

export const registerUser = async (payload: RegisterInput) => {
  const result = await request
    .post(`/users`, payload)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });
  return result;
};

export const loginUser = async (payload: LoginInput) => {
  const result = await request
    .post(`/auth/login`, payload)
    .then((resp) => resp.data)
    .catch((error) => {
      throw error;
    });
  return result;
};

export const logoutUser = async () => {
  await request.delete(`/auth/logout`);
};

export const checkAuthenticatedUser = async (headers: IncomingHttpHeaders) => {
  const result = await request
    .get(`/users/me`, {
      headers,
    })
    .then((resp) => resp.data)
    .catch((error) => {
      throw new UnauthenticatedError(error);
    });
  return result;
};

// Files
export const generateDownloadLink = (gistId: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/files/${gistId}/download`
}