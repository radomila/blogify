import { Editor } from '@tiptap/core';
import { FontBoldIcon, FontItalicIcon, HeadingIcon, ImageIcon, ListBulletIcon, TextAlignCenterIcon, TextAlignLeftIcon, TextAlignRightIcon, TextIcon, UnderlineIcon } from '@radix-ui/react-icons';
import { Toolbar } from 'radix-ui';
import ToggleItemStyled from '@/components/FormComponents/Uncontrolled/RichTextEditor/ToggleItemStyled';
import UploadImageDialog from '@/components/Components/UploadImageDialog/UploadImageDialog';
import { useState } from 'react';

interface Props {
  editor: Editor;
}

const RichTextEditorToolbar = ({ editor }: Props) => {
  const [uploadImageDialogOpen, setUploadImageDialogOpen] = useState<boolean>(false);
  return (
    <Toolbar.Root
      className="flex w-full min-w-fit rounded-md rounded-br-none rounded-bl-none bg-white p-2.5 border border-b-0 border-[#57595B]"
      aria-label="Formatting options"
    >
      <Toolbar.ToggleGroup
        type="multiple"
        aria-label="Text formatting"
      >
        <ToggleItemStyled
          value="bold"
          aria-label="Bold"
          selected={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FontBoldIcon />
        </ToggleItemStyled>
        <ToggleItemStyled
          value="italic"
          aria-label="Italic"
          selected={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FontItalicIcon />
        </ToggleItemStyled>
        <ToggleItemStyled
          value="underline"
          aria-label="Underline"
          selected={editor.isActive('underline')}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon />
        </ToggleItemStyled>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className="w-px bg-[#57595B] mx-[10px]" />
      <Toolbar.ToggleGroup
        type="single"
        aria-label="Text alignment"
      >
        <ToggleItemStyled
          value="left"
          aria-label="Left aligned"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          selected={editor.isActive({ textAlign: 'left' })}
        >
          <TextAlignLeftIcon />
        </ToggleItemStyled>
        <ToggleItemStyled
          value="center"
          aria-label="Center aligned"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          selected={editor.isActive({ textAlign: 'center' })}
        >
          <TextAlignCenterIcon />
        </ToggleItemStyled>
        <ToggleItemStyled
          value="right"
          aria-label="Right aligned"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          selected={editor.isActive({ textAlign: 'right' })}
        >
          <TextAlignRightIcon />
        </ToggleItemStyled>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className="w-px bg-[#57595B] mx-[10px]" />
      <Toolbar.ToggleGroup
        type="single"
        aria-label="Text Format"
      >
        <ToggleItemStyled
          value="heading1"
          aria-label="Heading 1"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          selected={editor.isActive('heading', { level: 1 })}
        >
          <HeadingIcon />
        </ToggleItemStyled>
        <ToggleItemStyled
          value="heading2"
          aria-label="Heading 2"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          selected={editor.isActive('heading', { level: 2 })}
        >
          <HeadingIcon className="h-3.5 w-3.5" />
        </ToggleItemStyled>
        <ToggleItemStyled
          value="paragraph"
          aria-label="Paragraph"
          onClick={() => editor.chain().focus().setParagraph().run()}
          selected={editor.isActive('paragraph')}
        >
          <TextIcon />
        </ToggleItemStyled>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className="w-px bg-[#57595B] mx-[10px]" />
      <Toolbar.ToggleGroup
        type="single"
        aria-label="Lists"
      >
        <ToggleItemStyled
          value="bulletList"
          aria-label="Bullet List"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          selected={editor.isActive('bulletList')}
        >
          <ListBulletIcon />
        </ToggleItemStyled>
        <ToggleItemStyled
          value="orderedList"
          aria-label="Ordered List"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          selected={editor.isActive('orderedList')}
        >
          <ListBulletIcon className="h-3.5 w-3.5" />
        </ToggleItemStyled>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator className="w-px bg-[#57595B] mx-[10px]" />
      <Toolbar.ToggleGroup
        type="single"
        aria-label="Extras"
      >
        <ToggleItemStyled
          value="Image"
          aria-label="Image"
          onClick={() => {
            setUploadImageDialogOpen(true);
          }}
        >
          <ImageIcon />
        </ToggleItemStyled>
      </Toolbar.ToggleGroup>
      {uploadImageDialogOpen && (
        <UploadImageDialog
          open={uploadImageDialogOpen}
          setOpen={setUploadImageDialogOpen}
          onSubmitCallback={({ imageUrl, imageTitle }) => {
            editor
              .chain()
              .focus()
              .setImage({ src: imageUrl, alt: imageTitle, title: imageTitle, width: '300px', height: '300px' } as { src: string })
              .run();
          }}
        />
      )}
    </Toolbar.Root>
  );
};
export default RichTextEditorToolbar;
