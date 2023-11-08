import { component$ } from "@builder.io/qwik";
import { Banner } from "./banner";
import { Navbar } from "./navbar";

export const Header = component$(() => (
  <>
    <Navbar />
    <Banner />
  </>
));
