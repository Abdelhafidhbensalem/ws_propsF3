import React from 'react'
import "./RecetteCard.css" 

const RecetteCard = ({recette,Alertitle}) => {
  return (
    <div>
<div id="container">	
  {/* Start	Product details */}
  <div className="product-details">
    {/* 	Product Name */}
    <h1>{recette.label}</h1>
    {/* 		<span class="hint new">New</span> */}
    {/* 		<span class="hint free-shipping">Free Shipping</span> */}
    {/* 		the Product rating */}
    <span className="hint-star star">
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star" aria-hidden="true" />
      <i className="fa fa-star-half-o" aria-hidden="true" />
      <i className="fa fa-star-o" aria-hidden="true" />
    </span>
    {/* The most important information about the product */}
    <p className="information"> Cuisine:{recette.cuisineType}</p>
    {/* 		Control */}
    <div className="control">
      {/* Start Button buying */}
      <button className="btn" onClick={()=>Alertitle(recette.label)}>
        {/* 		the Price */}
        <span className="price">{Math.ceil(recette.calories)}</span>
        {/* 		shopping cart icon*/}
        <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
        {/* 		Buy Now / ADD to Cart*/}
        <span className="buy">Buy Now</span>
      </button>
      {/* End Button buying */}
    </div>
  </div>
  {/* 	End	Product details   */}
  {/* 	Start product image & Information */}
  <div className="product-image">
    <img src={recette.image} alt="Omar Dsoky" />
    {/* 	product Information*/}
    <div className="info">
      <h2>The Description</h2>
      <ul>{

         recette.ingredientLines.map(el=>
(            <li><strong>{el} </strong></li>
)
)
          }
      </ul>
    </div>
  </div>
  {/*  End product image  */}
</div>
</div>
  )
}

export default RecetteCard