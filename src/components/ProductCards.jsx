import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductCards = () => {
  const data = useLoaderData();
  const obj = useParams();
  return (
    <div>
      Coffee khaw
    </div>
  );
};

export default ProductCards;