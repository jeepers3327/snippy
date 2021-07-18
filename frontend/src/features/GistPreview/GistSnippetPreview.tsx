import { FunctionComponent } from 'react';

import Link from 'next/link';
import Highlight from 'react-syntax-highlighter';

type GistSnippetPreviewProps = {
  gist: PartialGist;
};

export const GistSnippetPreview: FunctionComponent<GistSnippetPreviewProps> = ({
  gist,
}) => {
  return (
    <Link href={`/${gist.author.username}/${gist.id}`}>
      <a className="block group relative mt-2 md:mt-1 border border-gray-600 rounded-md overflow-hidden hover:border-blue-500">
        <Highlight
          className="max-h-40 overflow-hidden text-sm"
          showLineNumbers
          language={gist.files[0]?.language}
        >
          {gist.files[0]?.snippet}
        </Highlight>
        <p className="opacity-0 absolute top-0 right-0 bg-blue-500 text-gray-100 px-2 py-1 text-xs group-hover:opacity-100">
          View <span className="font-bold">{gist.files[0]?.filename}</span>
        </p>
      </a>
    </Link>
  );
};
