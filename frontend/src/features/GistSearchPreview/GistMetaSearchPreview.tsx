import { FunctionComponent } from 'react';

import { AnnotationIcon, CodeIcon, StarIcon } from '@heroicons/react/outline';
import Timeago from 'timeago-react';

type GistMetaSearchPreviewProps = {
  gist: GistSearch;
};

export const GistMetaSearchPreview: FunctionComponent<GistMetaSearchPreviewProps> =
  ({ gist }) => {
    return (
      <div className="md:flex md:justify-between">
        <div className="mb-2">
          <span className="hidden md:inline-block">
            <img
              className="rounded-full w-10"
              src={`/assets/avatars/${gist.avatarUrl}.svg`}
              alt="profile"
            />
          </span>
          <div className="md:px-2 inline-block">
            <span className="text-gray-200">
              <a
                className="text-blue-500 hover:underline"
                href={`/${gist.username}`}
              >
                {gist.username}
              </a>
              <span className="text-gray-700 text-md mx-1">/</span>
              <a
                className="text-blue-500  hover:underline"
                href={`/${gist.username}/${gist.id}`}
              >
                {gist.files[0]?.filename}
              </a>
            </span>
            <div className="text-gray-600 text-sm">
              Created <Timeago datetime={gist.createdAt} />
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <span className="text-sm inline-block">
            <CodeIcon className="w-4 inline mr-1" />
            {gist.files.length > 1
              ? `${gist.files.length} files`
              : `${gist.files.length} file`}
          </span>
          <span className="text-sm inline-block">
            <AnnotationIcon className="w-4 inline mr-1" />
            {gist.commentCounts} comments
          </span>
          <span className="text-sm inline-block">
            <StarIcon className="w-4 inline mr-1" />2 stars
          </span>
        </div>
      </div>
    );
  };
