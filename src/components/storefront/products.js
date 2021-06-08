import { connect } from "react-redux";
//import { selectCategory } from "../../store/categories.js";
import { setCategory } from "../../store/products.js";
//import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const Products = (props) => {
  // console.log("Props on Product", props.productReducer);
  //console.log("Props of Category", props.productReducer.activeCat);
  const classes = useStyles();
  return (
    <div>
      <h2>{props.productReducer.activeCat}</h2>
      <ul>
        {props.productReducer.products.map((product) => {
          if (product.category === props.productReducer.activeCat) {
            return (
              <li>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia className={classes.media} title={product.name} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </li>
            );
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
