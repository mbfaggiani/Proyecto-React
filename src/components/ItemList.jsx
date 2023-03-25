import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              flavor={product.flavor}
              description={product.description}
              price={product.price}
              stock={product.stock}
              category={product.category}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ItemList);
