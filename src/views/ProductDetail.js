import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  //   useEffect(() => {
  //     const getProductList = async () => {
  //       try {
  //         fetch("http://localhost:5000/get-product")
  //           .then((response) => response.json())
  //           .then((data) => {
  //             setProductList(data);
  //             // console.log("ProductList:", ProductList);
  //             // console.log(data);
  //           });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getProductList();
  //   }, []);

  return (
    <section>
      <Navigation />
      <>Product Detail</>
    </section>
  );
};

export default ProductDetail;
