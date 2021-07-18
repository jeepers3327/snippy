import React, { FunctionComponent } from 'react';

import { GistMetaSearchPreview } from './GistMetaSearchPreview';
import { GistSnippetSearchPreview } from './GistSnippetSearchPreview';

type GistSearchPreviewProps = {
  gist: GistSearch;
};

export const GistSearchPreview: FunctionComponent<GistSearchPreviewProps> = ({
  gist,
}) => {
  return (
    <article className="mb-10">
      <GistMetaSearchPreview gist={gist} />
      <GistSnippetSearchPreview gist={gist} />
    </article>
  );
};
