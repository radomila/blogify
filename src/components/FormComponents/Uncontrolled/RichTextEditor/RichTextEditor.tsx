'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import { twMerge } from 'tailwind-merge';

import { Document } from '@tiptap/extension-document';
import Text from '@tiptap/extension-text';
import RichTextEditorToolbar from '@/components/FormComponents/Uncontrolled/RichTextEditor/RichTextEditorToolbar';
import CustomExtensions from '@/components/FormComponents/Uncontrolled/RichTextEditor/Extensions';
import Tooltip from '@/components/Components/Tooltip/Tooltip';
import { RichTextEditorProps } from '@/components/FormComponents/types';

const RichTextEditor = ({ value, onChange, className, label, isRequired, tooltipText, name, errorMessage }: RichTextEditorProps) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'min-h-[300px] max-h-[150px] w-full rounded-md rounded-tr-none rounded-tl-none bg-transparent border border-gray-400 focus:border-blue-500 focus:outline-none px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto',
      },
    },
    extensions: [Document, Text, ...CustomExtensions],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className={twMerge('w-full', className)}>
      <div
        className="flex items-center justify-between pb-2"
        role="group"
        aria-label="Rich text editor"
      >
        <div
          className="text-gray-800 text-lg font-medium"
          id={name}
        >
          {label}
          {isRequired && <span className="text-red-500 pl-1">*</span>}
        </div>
        <Tooltip text={tooltipText} />
      </div>
      {editor ? <RichTextEditorToolbar editor={editor} /> : null}
      <EditorContent editor={editor} />
      <div
        className="text-red-500"
        role="status"
        aria-label="Error message"
      >
        {errorMessage}
      </div>
    </div>
  );
};

export default RichTextEditor;
