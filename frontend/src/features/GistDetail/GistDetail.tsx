import React, {
  ChangeEvent,
  Fragment,
  FunctionComponent,
  useState,
  useEffect,
} from 'react';

import { CodeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import {
  addComment,
  deleteGist,
  removeComment,
  starGist,
  unstarGist,
  updateComment,
} from '../../utils/api';
import { openRawCodeDialog } from '../../utils/helper';
import { GistComment } from './GistComment';
import { GistMeta } from './GistMeta';
import { GistSnippet } from './GistSnippet';

type GistDetailProps = {
  gist: Gist;
  user?: User;
};

export const GistDetail: FunctionComponent<GistDetailProps> = ({
  gist,
  user,
}) => {
  const router = useRouter();

  const [isStarred, setStarred] = useState(false);
  const [stargazers, setStargazers] = useState(gist.stargazers.length);
  const [comments, setComments] = useState<Comment[]>(gist.comments);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (user) {
      const hasStarred = gist.stargazers.some(
        (s: Stargazers) => s.userId === user.id
      );

      setStarred(hasStarred);
    }
  }, [user, gist.stargazers]);

  const handleCommentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(event.currentTarget.value);
  };

  const deleteGistHandler = async () => {
    if (window.confirm('Are you sure to delete this gist?')) {
      try {
        if (user) {
          await deleteGist(user.username, gist.id);
          toast.success('Gist has been deleted!');
          router.push(`/`);
        }
      } catch {
        toast.error('Unexpected error occured!');
      }
    }
  };

  const starGistHandler = async () => {
    try {
      const result = await starGist(gist.id);
      setStargazers(result._count.stargazers);
      setStarred(true);
    } catch (error) {
      toast.error('You need to sign it to star this gist!', {
        className: 'text-sm',
      });
    }
  };

  const unstarGistHandler = async () => {
    try {
      const result = await unstarGist(gist.id);
      setStargazers(result._count.stargazers);
      setStarred(false);
    } catch (error) {
      toast.error('You need to sign it to unstar this gist!', {
        className: 'text-sm',
      });
    }
  };

  const addCommentHandler = async () => {
    try {
      const payload = {
        gistId: gist.id,
        userId: user!.id,
        comment: commentText,
      };
      const comment = await addComment(payload);
      setCommentText('');
      setComments((prevComments) => [...prevComments, comment]);
    } catch (error) {
      toast.error('You need to sign it to unstar this gist!', {
        className: 'text-sm',
      });
    }
  };

  const updateCommentHandler = async (
    commentId: string,
    updatedCommentText: string
  ) => {
    try {
      const updatedComment = await updateComment(commentId, updatedCommentText);

      setComments((prevComments) => {
        return prevComments.map((comment) =>
          comment.id === commentId ? updatedComment : comment
        );
      });
    } catch (error) {
      toast.error('You need to sign it to unstar this gist!', {
        className: 'text-sm',
      });
    }
  };

  const removeCommentHandler = async (commentId: string) => {
    if (window.confirm('Are you sure to delete this comment?')) {
      try {
        await removeComment(commentId);
        setComments((prevComments) => {
          const updatedComments = prevComments.filter(
            (comment) => comment.id !== commentId
          );
          return updatedComments;
        });
      } catch (error) {
        toast.error('You need to sign it to unstar this gist!', {
          className: 'text-sm',
        });
      }
    }
  };

  return (
    <>
      <Toaster />
      <div key={gist.id} className="mb-10">
        <GistMeta
          stargazers={stargazers}
          isStarred={isStarred}
          deleteGistHandler={deleteGistHandler}
          starGistHandler={starGistHandler}
          unstarGistHandler={unstarGistHandler}
          user={user}
          gist={gist}
        />
        {gist.files.map((file) => (
          <Fragment key={file.id}>
            <div className="py-2 px-3 border-b border-gray-500 bg-gray-600 flex items-start">
              <p className="flex-auto text-white font-jetbrains text-xs tracking-wide font-bold px-3 py-1">
                <CodeIcon className="w-4 inline-block text-gray-400 mr-2" />
                <span className="cursor-pointer hover:underline">
                  {file.filename}
                </span>
              </p>
              <button
                type="button"
                onClick={() => openRawCodeDialog(file.snippet)}
                className="px-6 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded bg-gray-700 hover:bg-gray-800"
              >
                View raw file
              </button>
            </div>
            <div className="border border-gray-300 mb-10">
              <GistSnippet file={file} />
            </div>
          </Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {comments.map((comment) => (
          <GistComment
            key={comment.id}
            comment={comment}
            authorId={gist.author.id}
            userId={user?.id}
            removeCommentHandler={removeCommentHandler}
            updateCommentHandler={updateCommentHandler}
          />
        ))}
      </div>
      <div className="border-t-md border-t-2 border-t-gray-300 my-5" />
      <div className="flex flex-col items-end gap-2">
        {user ? (
          <>
            <textarea
              onChange={handleCommentInput}
              className="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id="comment"
              placeholder="Enter your comment"
              name="comment"
              rows={3}
              cols={40}
              value={commentText}
            />
            <button
              type="button"
              onClick={addCommentHandler}
              className="px-6 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded bg-green-800 hover:bg-green-700"
            >
              Comment
            </button>
          </>
        ) : (
          <div className="w-full bg-gray-200 p-4 rounded text-sm">
            <Link href="/register">
              <button
                type="button"
                className="px-6 py-1 text-sm text-gray-100 focus:outline-none shadow font-medium transition ease-in duration-100 rounded bg-green-700 hover:bg-green-600"
              >
                Sign up
              </button>
            </Link>{' '}
            to leave a comment. Already have an account?{' '}
            <Link href="/login">
              <a className="text-blue-600">Sign in to comment</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
