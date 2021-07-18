import { ParsedUrlQuery } from 'querystring';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { UpdateGist } from '../../../features/UpdateGist';
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

  try {
    const gist = await fetchOneGist(gid);
    const user = await checkAuthenticatedUser(context.req.headers);

    if (gist.author.id !== user.id) {
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
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const GistEditPage = ({ gist, user }: PageProps) => {
  return (
    <Main user={user}>
      <UpdateGist gist={gist} />
    </Main>
  );
};

export default GistEditPage;
