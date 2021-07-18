import React, {
  ChangeEvent,
  Fragment,
  FunctionComponent,
  useState,
} from 'react';

import { Menu, Transition } from '@headlessui/react';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import Timeago from 'timeago-react';

type GistCommentProp = {
  comment: Comment;
  authorId: string;
  userId?: string;
  removeCommentHandler: (commentId: string) => void;
  updateCommentHandler: (commentId: string, commentText: string) => void;
};

export const GistComment: FunctionComponent<GistCommentProp> = ({
  comment,
  authorId,
  userId,
  removeCommentHandler,
  updateCommentHandler,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [currentCommentText, setCurrentCommentText] = useState(comment.comment);

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentCommentText(event.currentTarget.value);
  };

  const updateComment = () => {
    updateCommentHandler(comment.id, currentCommentText);
    setEditMode(false);
  };

  const editorMode = () => setEditMode(true);
  const readOnlyMode = () => setEditMode(false);

  const CommentMenu = () => (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full border px-1 py-1  text-sm font-medium  focus:outline-none">
              <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  <button
                    type="button"
                    onClick={editorMode}
                    className="block px-4 py-2 text-sm w-full text-left hover:bg-blue-600 hover:text-white"
                  >
                    Edit
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    type="button"
                    onClick={() => removeCommentHandler(comment.id)}
                    className="text-red-600 block px-4 py-2 text-sm w-full text-left hover:bg-red-600 hover:text-white"
                  >
                    Delete
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );

  return (
    <div className="flex flex-row gap-3">
      <img
        alt={`${comment.user.username} avatar`}
        src={`/assets/avatars/${comment.user.avatarUrl}.svg`}
        className="w-10 flex-0 h-10 rounded-full"
      />
      <div className="rounded w-full border text-sm border-gray-300 break-words">
        {editMode ? (
          <div className="flex flex-col items-end gap-2">
            <textarea
              onChange={handleCommentChange}
              className="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id="comment"
              placeholder="Enter your comment"
              name="comment"
              rows={3}
              cols={40}
              value={currentCommentText}
            />
            <div className="flex gap-2 p-2">
              <button
                type="button"
                onClick={readOnlyMode}
                className="px-6 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded bg-red-800 hover:bg-red-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={updateComment}
                className="px-6 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded bg-green-800 hover:bg-green-700"
              >
                Update Comment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-2 py-1 bg-gray-200">
              <div className="px-2">
                <p className="font-bold">
                  {comment.user.username}{' '}
                  <span className="text-gray-500 font-medium">
                    commented <Timeago datetime={comment.createdAt} />
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1">
                {comment.user.id === authorId ? (
                  <span className="rounded bg-indigo-200 px-2">Author</span>
                ) : null}
                {userId && userId === comment.user.id ? <CommentMenu /> : null}
              </div>
            </div>
            <p className="text-sm px-4 py-2">{comment.comment}</p>
          </>
        )}
      </div>
    </div>
  );
};
