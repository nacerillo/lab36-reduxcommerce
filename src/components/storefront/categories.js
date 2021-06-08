import { connect } from "react-redux";
import { selectCategory } from "../../store/categories.js";
import { setCategory } from "../../store/products.js";

const Categories = (props) => {
  console.log("PROPS ON CAT", props);
  const callActions = (name) => {
    props.selectCategory(name);
    props.setCategory(name);
  };
  return (
    <div>
      <h2>Categories</h2>

      <ul>
        {props.categoryReducer.categories.map((category) => {
          return (
            <li onClick={() => callActions(category.name)}>
              {category.displayName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  categoryReducer: state.categoryReducer,
});

const mapDispathToProps = { selectCategory, setCategory };
export default connect(mapStateToProps, mapDispathToProps)(Categories);
