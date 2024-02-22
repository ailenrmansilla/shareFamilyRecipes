import React, { ReactNode } from "react";
import Navbar from "@/ui/navbar";

type Props = {
  children: ReactNode;
};

// React.FC is React functional component that accepts props of type Props (see above)
// <Props> defines the type of props the Blog component expects
const Layout: React.FC<Props> = (props) => (
  // (props) =>  defines the implementation of the Blog component as an arrow function
  // The function takes a single argument named (props), which represents the props passed to the component
  // after that, we have the JSX code that will be rendered by the component when used
  // This code typically uses the received props to construct the UI elements
  <div>
    <Navbar />
    <div className="layout">{props.children}</div>
  </div>
);

export default Layout;
