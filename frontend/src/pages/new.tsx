import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { AddGist } from '../features';
import { Main } from '../templates/Main';
import { checkAuthenticatedUser } from '../utils/api';

type Props = {
  user: User;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  try {
    const user = await checkAuthenticatedUser(context.req.headers);
    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      redirect: {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    };
  }
};

type NewGistPageProp = InferGetServerSidePropsType<typeof getServerSideProps>;

const NewGistPage = ({ user }: NewGistPageProp) => {
  return (
    <Main user={user}>
      <AddGist user={user} />
    </Main>
  );
};

export default NewGistPage;
