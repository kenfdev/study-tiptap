import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FC } from 'react';

export const Editor: FC = () => {
  // Create the editor instance using the starter kit
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello, this is your new editor!</p>', // optional initial content
  });

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '4px',
        minHeight: '100px',
      }}
    >
      <EditorContent editor={editor} />
    </div>
  );
};
