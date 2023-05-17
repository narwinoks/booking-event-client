import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
const Main = ({
  children,
  title,
  description,
  keywords,
  author,
  activeNavbar,
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header active={activeNavbar} />
      <main className="min-h-[90vh] bg-[#FAFAFA]">{children}</main>
      <Footer />
    </div>
  );
};

Main.defaultProps = {
  title: "Booking App",
  description: "Wins Project",
  keywords: "mern,react,node,mongodb",
  author: "narnowin oks",
};

export default Main;
