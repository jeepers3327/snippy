import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';

import { TrashIcon } from '@heroicons/react/outline';
import { Controlled as CodeMirror } from 'react-codemirror2';

import { findLanguage } from '../../utils/helper';

interface AddGistEditorProps {
  updateFileInfo: (id: string, data: Partial<UpdateFileInput>) => void;
  deleteFile: (id: string) => void;
  formData: CreateGistInput;
  setFormData: Dispatch<SetStateAction<CreateGistInput>>;
}

export const AddGistEditor: FunctionComponent<AddGistEditorProps> = ({
  formData,
  setFormData,
  deleteFile,
  updateFileInfo,
}) => {
  return (
    <>
      <div className="pt-5 pb-3">
        <input
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
          className="bg-gray-100 px-3 py-1 text-sm text-gray-900 rounded-md border border-gray-300 w-full focus:outline-none focus:border-transparent focus:ring-blue-400 focus:ring-2"
          type="text"
          placeholder="Description"
        />
      </div>

      {formData &&
        formData.files.map((file) => (
          <div key={file.id} className="mb-5">
            <div className="py-2 px-3 border-b border-gray-200 bg-gray-200 text-gray-800 flex gap-3 items-center">
              <input
                onChange={(e) =>
                  updateFileInfo(file.id, {
                    filename: e.target.value,
                    language: findLanguage(e.target.value),
                  })
                }
                value={file.filename}
                className="w-full bg-gray-100 pl-3 py-1 text-sm text-gray-900 lg:w-2/3 rounded-sm border border-gray-300 focus:outline-none focus:border-transparent focus:ring-blue-400 focus:ring-2"
                type="text"
                placeholder="Filename"
              />
              {formData.files.length > 1 ? (
                <button
                  type="button"
                  onClick={() => deleteFile(file.id)}
                  className="px-2 py-1 text-sm text-white focus:outline-none shadow font-medium transition ease-in duration-200 rounded hidden lg:block bg-red-400 hover:bg-red-500"
                >
                  <TrashIcon className="w-5" />
                </button>
              ) : null}
            </div>

            <div className="border border-gray-300 rounded-b-md">
              <CodeMirror
                value={file.snippet}
                className="text-sm"
                options={{
                  mode: 'text',
                  theme: 'base-16',
                  lineNumbers: true,
                }}
                onBeforeChange={(_editor, _data, value) => {
                  updateFileInfo(file.id, { snippet: value });
                }}
                onChange={(_editor, _data, _value) => {}}
              />
            </div>
          </div>
        ))}

      <div className="flex items-start pb-1">
        <div className="flex items-center h-5">
          <input
            onChange={(e) =>
              setFormData({ ...formData, isPrivate: e.target.checked })
            }
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            id="secretGist"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="secretGist" className="font-medium text-gray-700">
            Make secret gist
          </label>
        </div>
      </div>
    </>
  );
};
