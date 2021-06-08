import { connect } from "react-redux";
//import { selectCategory } from "../../store/categories.js";
import { setCategory } from "../../store/products.js";

const Products = (props) => {
  console.log("Props on Product", props.productReducer);
  console.log("Props of Category", props.productReducer.activeCat);

  return (
    <div>
      <h2>{props.productReducer.activeCat}</h2>
      <ul>
        {props.productReducer.products.map((product) => {
          if (product.category === props.productReducer.activeCat) {
            return <li>{product.name}</li>;
          }
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productReducer: state.productReducer,
});

const mapDispathToProps = { setCategory };
export default connect(mapStateToProps, mapDispathToProps)(Products);
