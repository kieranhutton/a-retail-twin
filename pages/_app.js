import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import NavBar from "../components/NavBar";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import NavDropdownItem from "../components/NavDropdownItem";
import DroplistItem from "../components/DroplistItem";
import TopBar from "../components/TopBar";
import NavLink from "../components/NavLink";
import NavHead from "../components/NavHead";

const components = {
  feature: Feature,
  navBar: NavBar,
  teaser: Teaser,
  page: Page,
  navDropdownItem: NavDropdownItem,
  droplistItem: DroplistItem,
  topBar: TopBar,
  navLink: NavLink,
  navHead : NavHead
};

storyblokInit({
  accessToken: "YigyfKAtQL7Du66m6JdqjQtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
