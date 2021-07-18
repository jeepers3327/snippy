import { FunctionComponent } from 'react';

import Highlight from 'react-syntax-highlighter';

type GistSnippetSearchPreviewProps = {
  gist: GistSearch;
};

export const GistSnippetSearchPreview: FunctionComponent<GistSnippetSearchPreviewProps> =
  ({ gist }) => {
    return (
      <a
        className="block group relative mt-2 md:mt-1 border border-gray-600 rounded-md overflow-hidden hover:border-blue-500"
        href={`/${gist.username}/${gist.id}`}
      >
        <Highlight
          className="h-40 overflow-hidden text-sm"
          showLineNumbers
          language={gist.files[0]?.language}
        >
          {gist.files[0]?.snippet}
        </Highlight>
        <p className="opacity-0 absolute top-0 right-0 bg-blue-500 text-gray-100 px-2 py-1 text-xs group-hover:opacity-100">
          View <span className="font-bold">{gist.files[0]?.filename}</span>
        </p>
      </a>
    );
  };
