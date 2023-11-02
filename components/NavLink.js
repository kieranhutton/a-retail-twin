import { storyblokEditable } from "@storyblok/react";

const NavLink = ({ blok }) => (
  <div className="NavLink" {...storyblokEditable(blok)}>
    <img class="NavLink_img" src={blok.icon.filename}></img>{blok.label}
  </div>
);

export default NavLink;
