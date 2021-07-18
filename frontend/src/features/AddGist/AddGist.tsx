import React, { FunctionComponent, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { v4 } from 'uuid';

import { createGist } from '../../utils/api';
import { defaultLanguage } from '../../utils/languages';
import { AddGistActions } from './AddGistActions';
import { AddGistEditor } from './AddGistEditor';

type AddGistProp = {
  user: User;
};

export const AddGist: FunctionComponent<AddGistProp> = ({ user }) => {
  const [isMounted, setMounted] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState<CreateGistInput>({
    description: '',
    isPrivate: false,
    authorId: user.id,
    files: [
      {
        id: v4(),
        filename: '',
        language: defaultLanguage,
        snippet: '',
      },
    ],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateFileInfo = (id: string, data: Partial<CreateFileInput>) => {
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

  const deleteFile = (id: string) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        files: formData.files.filter((file) => file.id !== id),
      };
    });
  };

  const addFile = () => {
    const newFile: CreateFileInput = {
      id: v4(),
      filename: '',
      language: defaultLanguage,
      snippet: '',
    };
    setFormData((prevState) => {
      return { ...prevState, files: [...prevState.files, newFile] };
    });
  };

  const cancel = () => {
    router.push('/');
  };

  const createNewGist = async () => {
    let valid = true;

    if (formData.description === '') valid = false;

    formData.files.map((file) => {
      if (file.filename === '' || file.snippet === '') {
        valid = false;
      }

      return file;
    });

    if (!valid) {
      toast.error(`Description, filename, and snippets are required!`);
    } else {
      try {
        const gist = await createGist(formData);
        router.push(`/${gist.author.username}/${gist.id}`);
      } catch (error) {
        toast.error('Unexpected error occured!');
      }
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <AddGistEditor
        formData={formData}
        setFormData={setFormData}
        updateFileInfo={updateFileInfo}
        deleteFile={deleteFile}
      />

      <AddGistActions
        addFile={addFile}
        cancel={cancel}
        createGist={createNewGist}
      />
      <Toaster />
    </>
  );
};
