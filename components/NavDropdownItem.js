import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const NavDropdownItem = ({ blok }) => {
  return (
    <div className="NavDropdownItem" {...storyblokEditable(blok)}>
      <div className="NavDropdownItemName">{blok.name}</div>
        <ul>
          {blok.droplist_items.map((nestedBlok) => (
            <li><StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} /></li>
          ))}
        </ul>
    </div>
  );
};

export default NavDropdownItem;
