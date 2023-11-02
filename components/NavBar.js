import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const NavBar = ({ blok }) => {
  return (
    <div className="NavBar" {...storyblokEditable(blok)}>
      {blok.nav.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default NavBar;
