import { FunctionComponent } from 'react';

import { AnnotationIcon, CodeIcon, StarIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Timeago from 'timeago-react';

type GistMetaPreviewProps = {
  gist: PartialGist;
};

export const GistMetaPreview: FunctionComponent<GistMetaPreviewProps> = ({
  gist,
}) => {
  return (
    <div className="md:flex md:justify-between">
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
            <Link href={`/${gist.author.username}`}>
              <a className="text-blue-500 hover:underline">
                {gist.author.username}
              </a>
            </Link>
            <span className="text-gray-700 text-md mx-1">/</span>
            <Link href={`/${gist.author.username}/${gist.id}`}>
              <a className="text-blue-500  hover:underline">
                {gist.files[0]?.filename}
              </a>
            </Link>
          </span>
          <div className="text-gray-600 text-sm">
            Created <Timeago datetime={gist.createdAt} />
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <span className="text-sm inline-block">
          <CodeIcon className="w-4 inline mr-1" />
          {gist._count.files && gist._count.files > 1
            ? `${gist.files.length} files`
            : `${gist.files.length} file`}
        </span>
        <span className="text-sm inline-block">
          <AnnotationIcon className="w-4 inline mr-1" />
          {gist._count.comments} comments
        </span>
        <span className="text-sm inline-block">
          <StarIcon className="w-4 inline mr-1" />
          {gist._count.stargazers} stars
        </span>
      </div>
    </div>
  );
};
