import React, { useEffect, FunctionComponent, useState } from 'react';

import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { v4 } from 'uuid';

import { setPublicGist, updateGist } from '../../utils/api';
import { UpdateGistActions } from './UpdateGistActions';
import { UpdateGistEditor } from './UpdateGistEditor';
import { UpdateGistHeader } from './UpdateGistHeader';

type UpdateGistProp = {
  gist: Gist;
};

export const UpdateGist: FunctionComponent<UpdateGistProp> = ({ gist }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<UpdateGistData>({
    id: gist.id,
    authorId: gist.author.id,
    description: gist.description,
    files: gist.files,
    isPrivate: gist.isPrivate,
  });

  const [filename] = useState<string>(gist.files[0]!.filename);
  const [deletedFiles, setDeletedFiles] = useState<string[]>([]);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateDescription = (content: string) => {
    setFormData({ ...formData, description: content });
  };

  const updateFileInfo = (id: string, data: Partial<UpdateFileInput>) => {
    const findFile = formData.files.find((file) => file.id === id);
    if (findFile) {
      const updatedFile = Object.assign(findFile, data);

      setFormData((prev) => {
        return {
          ...prev,
          files: prev.files.map((file) =>
            file.id === id ? updatedFile : file
          ),
        };
      });
    }
  };

  const addFile = () => {
    const newFile: UpdateFileInput = {
      id: `add-${v4()}`,
      gistId: gist.id,
      language: 'plaintext',
      filename: '',
      snippet: '',
    };
    setFormData((prevState) => {
      return { ...prevState, files: [...prevState.files, newFile] };
    });
  };

  const deleteFile = (id: string) => {
    if (!id.includes('add')) {
      setDeletedFiles((prevState) => [...prevState, id]);
    }

    setFormData((prevState) => {
      return {
        ...prevState,
        files: formData.files.filter((file) => file.id !== id),
      };
    });
  };

  const updateGistChanges = async () => {
    const payload = {
      authorId: formData.authorId,
      description: formData.description,
      isPrivate: formData.isPrivate,
      deletedGistFiles: deletedFiles,
      updatedGistFiles: formData.files,
    };

    try {
      await updateGist(gist.id, payload);
      router.push(`/${gist.author.username}/${gist.id}`);
    } catch (error) {
      toast.error(`Unexpected error occured!`);
    }
  };

  const setPublicGistHandler = async () => {
    try {
      await setPublicGist(gist.id);
      router.push(`/${gist.author.username}/${gist.id}`);
    } catch (error) {
      toast.error(`Unexpected error occured!`);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <UpdateGistHeader
        fileName={filename}
        isPrivate={formData.isPrivate}
        setPublic={setPublicGistHandler}
      />
      <UpdateGistEditor
        formData={formData}
        updateDescription={updateDescription}
        updateFileInfo={updateFileInfo}
        deleteFile={deleteFile}
      />
      <UpdateGistActions
        addFile={addFile}
        gist={gist}
        updateGist={updateGistChanges}
      />
      <Toaster />
    </>
  );
};
