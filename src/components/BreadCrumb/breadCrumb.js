import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import '../../assets/scss/breadCrumb.css';

const BreadCrumb = () => {
  return (
    <div className="breadcrumbs">
      <div><Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="text.primary" href="/">
          Clothing
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/"
        >
          Women’s
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/"
        >
          Outerwear
        </Link>
      </Breadcrumbs></div>
    </div>
  );
};

export default BreadCrumb;