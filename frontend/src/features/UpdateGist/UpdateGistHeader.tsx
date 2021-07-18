import { FunctionComponent } from 'react';

import { TrashIcon } from '@heroicons/react/outline';

interface UpdateGistHeaderProps {
  isPrivate: boolean;
  fileName: string | undefined;
  setPublic: () => void;
}

export const UpdateGistHeader: FunctionComponent<UpdateGistHeaderProps> = ({
  isPrivate,
  fileName,
  setPublic,
}) => {
  return (
    <div className="md:flex md:justify-between border-b-2 border-b-gray-300">
      <div className="mb-2">
        <div className="md:px-2 inline-block">Editing {fileName}</div>
      </div>
      <div className="text-gray-400 text-xs mb-2 flex items-center gap-2">
        {isPrivate ? (
          <div className="rounded-md flex overflow-hidden w-full md:w-auto">
            <button
              type="button"
              onClick={setPublic}
              className="md:px-6 md:py-1 w-full py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded lg:block bg-gray-600 hover:bg-gray-700"
            >
              Make public
            </button>
          </div>
        ) : null}
        <div className="rounded-md flex overflow-hidden w-full md:w-auto">
          <button
            type="button"
            className="w-full font-bold text-red-700 bg-gray-700 block py-1 px-3 focus:outline-none outline-none hover:text-gray-100 hover:bg-red-600 hover:border-transparent"
          >
            <TrashIcon className="w-4 mr-1 inline" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
