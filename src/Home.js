import React from "react";
import Product from "./Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/uk-certifiedrefurbished/renewed/UK_AR_Storebanner_Jul19.jpg"
          alt="Banner"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Headphone"
            price={29.99}
            image="https://elcopcbonline.com/photos/product/4/176/4.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Sunglass"
            price={20.99}
            image="https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Addidas"
            price={50.99}
            image="data:image/jpeg;base64,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"
            rating={4}
          />
          <Product
            id="4"
            title="Digital Camera"
            price={45.99}
            image="https://i1.adis.ws/i/canon/EOS-r5_Martin_Bissig_Lifestyle_hero-e90f9dd2-be19-11ea-b23c-8c04ba195b5f?w=100%&sm=aspect&aspect=16:9&qlt=80&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)"
            rating={4}
          />
          <Product
            id="5"
            title="Apple iPhone 11"
            price={499.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtB2bYnypOYNeNun6TOcv0SAfPO62uP-y47Q&usqp=CAU"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="55 LG ULTRA HD 4K TV"
            price={399.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo8JDqBsYcjGwSPdHEibYHEND1GGJQWEf8Rg&usqp=CAU"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
