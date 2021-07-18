import { ParsedUrlQuery } from 'querystring';

import React from 'react';

import { SearchIcon } from '@heroicons/react/outline';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { GistSearchPreview } from '../features';
import { Main } from '../templates/Main';
import { checkAuthenticatedUser, searchGists } from '../utils/api';

type Props = {
  gists: GistSearch[];
  user?: User;
};

interface Params extends ParsedUrlQuery {
  q: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const params = context.query!;
  const { q } = params;

  if (!q) {
    return {
      notFound: true,
    };
  }

  try {
    const searchKey = q as string;
    const gists = await searchGists(searchKey);
    const user = await checkAuthenticatedUser(context.req.headers);
    return {
      props: {
        gists,
        user,
      },
    };
  } catch (error) {
    return {
      props: {
        gists: [],
      },
    };
  }
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Search = ({ gists, user }: PageProps) => {
  return (
    <Main user={user}>
      {gists.length > 0 ? (
        gists.map((gist) => <GistSearchPreview key={gist.id} gist={gist} />)
      ) : (
        <div className="text-gray-600 items-center justify-center flex py-24">
          <SearchIcon className="hidden md:block w-20 text-gray-500" />
          <p className="text-4xl text-gray-500">No search results found!</p>
        </div>
      )}
    </Main>
  );
};

export default Search;
