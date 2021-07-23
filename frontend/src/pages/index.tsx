import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { GistPreview } from '../features';
import { Main } from '../templates/Main';
import { checkAuthenticatedUser, fetchAllGists } from '../utils/api';

interface Props {
  gists: PartialGist[];
  user?: User;
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const gists = await fetchAllGists();
  console.log(gists);
  console.log(context.req.headers);
  
  let user;

  console.log('Fetching current user');
  console.log(context.req.headers.cookie);
  console.log(await checkAuthenticatedUser(context.req.headers));

  try {
    user = await checkAuthenticatedUser(context.req.headers);
    console.log(user);
    return {
      props: {
        user,
        gists,
      },
    };
  } catch {
    return {
      props: {
        gists,
      },
    };
  }
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Index = ({ gists, user }: PageProps) => {
  return (
    <Main user={user} hasTitle title="Discover gists">
      {gists.length > 1 ? (
        gists.map((gist) => <GistPreview key={gist.id} gist={gist} />)
      ) : (
        <div className="flex flex-col items-center justify-center h-3/4">
          <p className="text-4xl text-gray-500">
            There are currently no snippets created!
          </p>
        </div>
      )}
    </Main>
  );
};

export default Index;
