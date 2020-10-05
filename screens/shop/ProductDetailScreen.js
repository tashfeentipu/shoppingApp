import React from "react";
import {
  ScrollView,
  Button,
  Image,
  View,
  Text,
  StyleSheet,
} from "react-native";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../store/actions/cart";

const ProductDetail = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.action}>
        <Button
          color={Colors.primary}
          title="Add To Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)} </Text>
      <Text style={styles.description}>{selectedProduct.description} </Text>
    </ScrollView>
  );
};

ProductDetail.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  action: {
    marginVertical: 10,
    alignItems: "center",
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
  },
});

export default ProductDetail;
