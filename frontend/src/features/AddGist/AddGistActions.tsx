import { FunctionComponent } from 'react';

interface GistActions {
  addFile: () => void;
  cancel: () => void;
  createGist: () => void;
}

export const AddGistActions: FunctionComponent<GistActions> = ({
  addFile,
  cancel,
  createGist,
}) => {
  return (
    <div className="pt-2 text-xs mb-2 flex justify-between gap-2">
      <div className="rounded-md flex text-white justify-center overflow-hidden md:w-auto">
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
          <button
            type="button"
            onClick={cancel}
            className="px-6 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded bg-gray-600 hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>

        <div className="rounded-md flex justify-center overflow-hidden md:w-auto">
          <button
            type="button"
            onClick={createGist}
            className=" w-full text-white font-bold bg-green-700 block py-1 px-3 focus:outline-none outline-none hover:bg-green-600"
          >
            Create Gist
          </button>
        </div>
      </div>
    </div>
  );
};
