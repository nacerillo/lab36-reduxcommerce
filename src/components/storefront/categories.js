import { connect } from "react-redux";
import { selectCategory, getCategories } from "../../store/categories.js";
import { Breadcrumbs, Link } from "@material-ui/core/";
import React, { useEffect } from "react";
const Categories = (props) => {
  useEffect(() => {
    console.log("HELLO");
    props.getCategories();
  }, []);

  console.log("PROPS ON CAT", props);
  const callActions = (name) => {
    props.selectCategory(name);
  };

  return (
    <>
      <h1>Categories</h1>
      <Breadcrumbs aria-label="breadcrumb">
        {props.categoryReducer.categories.map((category) => {
          {
            console.log(category.name);
          }
          return (
            <Link onClick={() => callActions(category.name)}>
              {category.name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </>
  );
};
const mapStateToProps = (state) => ({
  categoryReducer: state.categoryReducer,
});

const mapDispathToProps = { selectCategory, getCategories };
export default connect(mapStateToProps, mapDispathToProps)(Categories);
