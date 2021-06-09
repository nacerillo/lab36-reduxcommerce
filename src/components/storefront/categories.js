import { connect } from "react-redux";
import { selectCategory } from "../../store/categories.js";
import { setCategory } from "../../store/products.js";
import { Breadcrumbs, Link } from "@material-ui/core/";
const Categories = (props) => {
  console.log("PROPS ON CAT", props);
  const callActions = (name) => {
    props.selectCategory(name);
    props.setCategory(name);
  };
  return (
    <>
      <h1>Categories</h1>
      <Breadcrumbs aria-label="breadcrumb">
        {props.categoryReducer.categories.map((category) => {
          return (
            <Link onClick={() => callActions(category.name)}>
              {category.displayName}
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

const mapDispathToProps = { selectCategory, setCategory };
export default connect(mapStateToProps, mapDispathToProps)(Categories);
