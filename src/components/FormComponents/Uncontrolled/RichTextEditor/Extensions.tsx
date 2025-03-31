import { Paragraph } from '@tiptap/extension-paragraph';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import { mergeAttributes } from '@tiptap/core';

export const CustomParagraph = Paragraph.extend({
  addAttributes() {
    return {
      'aria-label': {
        default: 'Paragraph',
      },
    };
  },
});

export const CustomBold = Bold.extend({
  addAttributes() {
    return {
      'aria-label': {
        default: 'Bold text',
      },
    };
  },
});

export const CustomItalic = Italic.extend({
  addAttributes() {
    return {
      'aria-label': {
        default: 'Italic text',
      },
    };
  },
});

export const CustomUnderline = Underline.extend({
  addAttributes() {
    return {
      'aria-label': {
        default: 'Underline text',
      },
    };
  },
});

export const CustomTextAlign = TextAlign.configure({
  types: ['heading', 'paragraph'],
  alignments: ['left', 'right', 'center'],
  defaultAlignment: 'left',
});

const headingClasses: Record<number, string> = {
  1: 'text-3xl',
  2: 'text-2xl',
};
export const CustomHeading = Heading.extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level: number = hasLevel ? node.attrs.level : this.options.levels[0];
    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${headingClasses[level]}`,
      }),
      0,
    ];
  },
}).configure({
  levels: [1, 2],
});

export const CustomBulletList = BulletList.extend({
  addAttributes() {
    return {
      'aria-label': {
        default: 'Bullet List',
      },
      class: {
        default: 'list-disc ml-5',
      },
    };
  },
});

export const CustomOrderedList = OrderedList.extend({
  addAttributes() {
    return {
      'aria-label': {
        default: 'Ordered List',
      },
      class: {
        default: 'list-decimal ml-5',
      },
    };
  },
});

export const CustomListItem = ListItem.extend({
  addAttributes() {
    return {
      'aria-label': {
        default: 'Item in a list',
      },
    };
  },
});

export const CustomImage = Image.extend({
  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (element) => ({
          src: element.getAttribute('src'),
        }),
        renderHTML: (attributes) => {
          if (!attributes.src) {
            return {};
          }

          return {
            src: typeof attributes.src === 'object' ? attributes.src.src : attributes.src,
          };
        },
      },
      alt: {
        default: null,
        parseHTML: (element) => ({
          alt: element.getAttribute('alt'),
        }),
        renderHTML: (attributes) => {
          if (!attributes.alt) {
            return {};
          }

          return {
            alt: typeof attributes.alt === 'object' ? attributes.alt.alt : attributes.alt,
          };
        },
      },
      title: {
        default: null,
        parseHTML: (element) => ({
          title: element.getAttribute('title'),
        }),
        renderHTML: (attributes) => {
          if (!attributes.title) {
            return {};
          }

          return {
            title: typeof attributes.title === 'object' ? attributes.title.title : attributes.title,
          };
        },
      },
      width: {
        default: null,
        parseHTML: (element) => ({
          width: element.getAttribute('width'),
        }),
        renderHTML: (attributes) => {
          if (!attributes.width) {
            return {};
          }

          return {
            width: typeof attributes.width === 'object' ? attributes.width.width : attributes.width,
          };
        },
      },
      height: {
        default: null,
        parseHTML: (element) => ({
          height: element.getAttribute('height'),
        }),
        renderHTML: (attributes) => {
          if (!attributes.height) {
            return {};
          }

          return {
            height: attributes.height,
          };
        },
      },
    };
  },
});

const CustomExtensions = [CustomParagraph, CustomBold, CustomItalic, CustomUnderline, CustomTextAlign, CustomHeading, CustomBulletList, CustomOrderedList, CustomListItem, CustomImage, Dropcursor];

export default CustomExtensions;
