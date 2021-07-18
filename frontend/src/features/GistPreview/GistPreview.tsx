import React, { FunctionComponent } from 'react';

import { GistMetaPreview } from './GistMetaPreview';
import { GistSnippetPreview } from './GistSnippetPreview';

type GistPreviewProps = {
  gist: PartialGist;
};
export const GistPreview: FunctionComponent<GistPreviewProps> = ({ gist }) => {
  return (
    <article className="mb-10">
      <GistMetaPreview gist={gist} />
      <GistSnippetPreview gist={gist} />
    </article>
  );
};
