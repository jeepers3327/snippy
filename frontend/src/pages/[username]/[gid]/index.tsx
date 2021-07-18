import { ParsedUrlQuery } from 'querystring';

import React from 'react';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { ResourceNotFoundError } from '../../../errors';
import { GistDetail } from '../../../features/GistDetail/GistDetail';
import { Main } from '../../../templates/Main';
import { checkAuthenticatedUser, fetchOneGist } from '../../../utils/api';

type Props = {
  gist: Gist;
  user?: User;
};

interface Params extends ParsedUrlQuery {
  gid: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const params = context.params!;
  const { gid } = params;

  let user = null;
  let gist = null;

  try {
    gist = await fetchOneGist(gid);
    user = await checkAuthenticatedUser(context.req.headers);

    return {
      props: {
        gist,
        user,
      },
    };
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        gist,
        user,
      },
    };
  }
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const GistDetailPage = ({ gist, user }: PageProps) => {
  return (
    <Main user={user}>
      <GistDetail user={user} gist={gist} />
    </Main>
  );
};

export default GistDetailPage;
