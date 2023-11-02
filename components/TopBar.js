import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const TopBar = ({ blok }) => {
  return (
    <div className="TopBar" {...storyblokEditable(blok)}>
      {blok.content.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default TopBar;
