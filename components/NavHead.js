import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const NavHead = ({ blok }) => {
  return (
    <div className="NavHead" {...storyblokEditable(blok)}>
      {blok.bars.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default NavHead;
