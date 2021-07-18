import { FunctionComponent } from 'react';

import Link from 'next/link';

interface UpdateGistActionsProps {
  addFile: () => void;
  gist: Gist;
  updateGist: () => void;
}

export const UpdateGistActions: FunctionComponent<UpdateGistActionsProps> = ({
  addFile,
  gist,
  updateGist,
}) => {
  return (
    <div className="pt-2 text-xs mb-2 flex justify-between gap-2">
      <div className="rounded-md flex text-white justify-center overflow-hiddenmd:w-auto">
        <button
          type="button"
          onClick={addFile}
          className="px-6 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded bg-gray-600 hover:bg-gray-700"
        >
          Add file
        </button>
      </div>
      <div className="flex flex-row md:justify-between gap-2">
        <div className="rounded-md flex justify-center overflow-hidden  md:w-auto">
          <Link href={`/${gist.author.username}/${gist.id}`}>
            <button
              type="button"
              className="px-6 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded bg-gray-600 hover:bg-gray-700"
            >
              Cancel
            </button>
          </Link>
        </div>

        <div className="rounded-md flex justify-center overflow-hidden md:w-auto">
          <button
            type="button"
            onClick={updateGist}
            className=" w-full text-white font-bold bg-green-700 block py-1 px-3 focus:outline-none outline-none hover:bg-green-600"
          >
            Update Gist
          </button>
        </div>
      </div>
    </div>
  );
};
