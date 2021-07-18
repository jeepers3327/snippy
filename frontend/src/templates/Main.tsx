import { ReactNode } from 'react';

import { Meta } from '../layout/Meta';
import { Navbar } from '../layout/Navbar';

type IMainProps = {
  title?: string;
  hasTitle?: boolean;
  children: ReactNode;
  user?: User;
};

const Main = (props: IMainProps) => {
  return (
    <div className="flex flex-col h-screen antialiased w-full text-gray-700">
      <Meta title="Snippy" description="A simplified gists clone" />
      <Navbar user={props.user} />
      <div className="w-full px-3 max-w-screen-lg  mx-auto flex-grow">
        {props.hasTitle ? (
          <div className="border-b border-gray-300">
            <div className="pt-8 pb-4">
              <div className="font-bold text-3xl text-gray-600">
                {props.title}
              </div>
            </div>
          </div>
        ) : null}
        <div className="py-5 text-xl">{props.children}</div>
      </div>
    </div>
  );
};

export { Main };
