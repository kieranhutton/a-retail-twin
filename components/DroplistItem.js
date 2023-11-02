import { storyblokEditable } from "@storyblok/react";

const DroplistItem = ({ blok }) => (
  <div className="DropListItem" {...storyblokEditable(blok)}>
    <a href={blok.droplistlink.url}>{blok.droplistname}</a>
  </div>
);

export default DroplistItem;
