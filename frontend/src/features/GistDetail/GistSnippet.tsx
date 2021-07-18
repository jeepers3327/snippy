import { FunctionComponent } from 'react';

import Highlight from 'react-syntax-highlighter';
import atom from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-light';

type GistSnippetProps = {
  file: GistFile;
};

export const GistSnippet: FunctionComponent<GistSnippetProps> = ({ file }) => {
  return (
    <Highlight
      lineNumberStyle={{
        '--tw-text-opacity': 1,
        color: 'rgba(203, 213, 224, var(--tw-text-opacity))',
      }}
      showLineNumbers
      language={file.language}
      style={atom}
      customStyle={{ fontSize: 'small' }}
    >
      {file.snippet}
    </Highlight>
  );
};
