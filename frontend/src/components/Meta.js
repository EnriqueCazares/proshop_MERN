import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Bienvenido a ProShop",
  keywords: "electronicos, compra de electronicos, electronicos baratos",
  description: "Vendemos los mejores productos, al mejor precio",
};

export default Meta;
