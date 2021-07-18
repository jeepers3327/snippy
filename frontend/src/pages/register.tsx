import { GetServerSideProps } from 'next';

import { Register } from '../features';
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

const RegisterPage = () => {
  return (
    <div className="bg-plain min-h-screen items-center justify-center flex">
      <Register />
    </div>
  );
};

export default RegisterPage;
