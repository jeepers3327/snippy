import React, { FunctionComponent } from 'react';

import {
  StarIcon,
  DownloadIcon,
  TrashIcon,
  PencilIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import Timeago from 'timeago-react';

type GistMetaProps = {
  gist: Gist;
  user?: User;
  stargazers: number;
  isStarred?: boolean;
  deleteGistHandler: () => void;
  starGistHandler: () => void;
  unstarGistHandler: () => void;
};

export const GistMeta: FunctionComponent<GistMetaProps> = ({
  gist,
  user,
  stargazers,
  isStarred,
  deleteGistHandler,
  starGistHandler,
  unstarGistHandler,
}) => {
  return (
    <>
      <div className="md:flex md:justify-between border-b-2 border-b-gray-300">
        <div className="mb-2">
          <span className="hidden md:inline-block">
            <img
              className="rounded-full w-10"
              src={`/assets/avatars/${gist.author.avatarUrl}.svg`}
              alt="profile"
            />
          </span>
          <div className="md:px-2 inline-block">
            <span className="text-gray-200">
              <a
                className="text-blue-500 hover:underline"
                href={`/${gist.author.username}`}
              >
                {gist.author.username}
              </a>
              <span className="text-gray-700 text-md mx-1">/</span>
              <a
                className="text-blue-500 hover:underline"
                href={`/${gist.author.username}/${gist.id}`}
              >
                {gist.files[0]?.filename}
              </a>
              {gist.isPrivate ? (
                <span className="rounded-full bg-gray-200 border text-sm text-gray-700 px-1 ml-1">
                  Secret
                </span>
              ) : null}
            </span>
            <div className="text-gray-600 text-sm">
              Created <Timeago datetime={gist.createdAt} />
            </div>
          </div>
        </div>
        <div className="text-gray-400 text-xs mb-2 flex items-center gap-2">
          {user && user.id === gist.author.id ? (
            <>
              <div className="rounded-md flex text-gray-300 bg-gray-700 justify-center overflow-hidden w-full md:w-auto">
                <Link href={`/${gist.author.username}/${gist.id}/edit`}>
                  <button
                    type="button"
                    className="border w-full md:rounded-tl-md md:rounded-bl-md border-gray-600 block py-1 px-3 focus:outline-none outline-none hover:border-gray-400"
                  >
                    <PencilIcon className="w-4 mr-1 inline" />
                    Edit
                  </button>
                </Link>
              </div>
              <div className="rounded-md flex text-red-600 text-bold bg-gray-700 justify-center overflow-hidden w-full md:w-auto">
                <button
                  type="button"
                  onClick={deleteGistHandler}
                  className="border w-full font-bold md:rounded-tl-md md:rounded-bl-md border-gray-600 block py-1 px-3 focus:outline-none outline-none hover:text-gray-100 hover:bg-red-600 hover:border-transparent"
                >
                  <TrashIcon className="w-4 mr-1 inline" />
                  Delete
                </button>
              </div>
            </>
          ) : null}
          <div className="rounded-md flex text-gray-300 bg-gray-700 justify-center overflow-hidden w-full md:w-auto">
            {isStarred ? (
              <>
                <button
                  type="button"
                  onClick={unstarGistHandler}
                  className="border w-full md:rounded-tl-md md:rounded-bl-md border-gray-600 block py-1 px-3 focus:outline-none outline-none hover:border-gray-400"
                >
                  <StarIcon className="w-4 mr-1 inline" />
                  Unstar
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={starGistHandler}
                  className="border w-full md:rounded-tl-md md:rounded-bl-md border-gray-600 block py-1 px-3 focus:outline-none outline-none hover:border-gray-400"
                >
                  <StarIcon className="w-4 mr-1 inline" />
                  Star
                </button>
              </>
            )}
            <span className="hidden md:block border-t border-b border-r rounded-tr-md rounded-br-md border-gray-600 py-1 px-3 hover:text-gray-500 cursor-pointer font-bold">
              {stargazers}
            </span>
          </div>
          <div className="rounded-md flex text-gray-300 bg-gray-700 justify-center overflow-hidden w-full hidden md:block  md:w-auto">
            <a
              href={`http://localhost:4000/files/${gist.id}/download`}
              role="button"
              className="border w-full md:rounded-tl-md md:rounded-bl-md border-gray-600 block py-1 px-3 focus:outline-none outline-none hover:border-gray-400"
            >
              <DownloadIcon className="w-4 mr-1 inline" />
              Download
            </a>
          </div>
        </div>
      </div>

      <p className="pt-5 pb-3 break-words text-sm">{gist.description}</p>
    </>
  );
};
