import { connect } from "react-redux";
import { selectCategory, getCategories } from "../../store/categories.js";
import { Breadcrumbs, Link } from "@material-ui/core/";
import { useEffect } from "react";
const Categories = (props) => {
  console.log("PROPS ON CAT", props);
  const callActions = (name) => {
    props.selectCategory(name);
  };

  useEffect(() => {
    props.getCategories();
  }, []);
  return (
    <>
      <h1>Categories</h1>
      <Breadcrumbs aria-label="breadcrumb">
        {props.categoryReducer.map((category) => {
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
