import { GetServerSideProps } from 'next';

import { Login } from '../features';
import { checkAuthenticatedUser } from '../utils/api';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    await checkAuthenticatedUser(context.req.headers);
    return {
      redirect: {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

const LoginPage = () => {
  return (
    <div className="bg-plain min-h-screen items-center justify-center flex">
      <Login />
    </div>
  );
};

export default LoginPage;
