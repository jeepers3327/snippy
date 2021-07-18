import { ParsedUrlQuery } from 'querystring';

import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

import { ResourceNotFoundError } from '../../errors';
import { GistPreview } from '../../features';
import { Main } from '../../templates/Main';
import { checkAuthenticatedUser, fetchUserGists } from '../../utils/api';

type Props = {
  gists: PartialGist[];
  user?: User;
};

interface Params extends ParsedUrlQuery {
  username: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  const params = context.params!;
  const { username } = params;

  let user = null;
  let gists = null;

  try {
    gists = await fetchUserGists(username);
    user = await checkAuthenticatedUser(context.req.headers);

    return {
      props: {
        gists,
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
        gists,
        user,
      },
    };
  }
};

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const GistDetailPage = ({ gists, user }: PageProps) => {
  return (
    <Main user={user}>
      {gists.length > 0 ? (
        gists.map((gist) =>
          gist.isPrivate && gist.author.id !== user?.id ? null : (
            <GistPreview key={gist.id} gist={gist} />
          )
        )
      ) : (
        <section className="text-gray-600 body-font flex h-3/4">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                You haven&apos;t created a gist!
              </h1>
              <p className="mb-8 leading-relaxed">
                This section will display your created gists. You can create
                your gist by clicking the button below.
              </p>
              <div className="flex justify-center">
                <Link href="/new">
                  <button
                    type="button"
                    className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
                  >
                    Create a new gist
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </Main>
  );
};

export default GistDetailPage;
