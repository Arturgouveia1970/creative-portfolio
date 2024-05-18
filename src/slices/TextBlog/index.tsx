import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `TextBlog`.
 */
export type TextBlogProps = SliceComponentProps<Content.TextBlogSlice>;

/**
 * Component for "TextBlog" Slices.
 */
const TextBlog = ({ slice }: TextBlogProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />
    </div>
    
  );
};

export default TextBlog;
