import React, { Component } from "react";
 
class Product extends Component {
  render() {
    return (
      <div >
       <div class="productbg">
          


      </div>
      <div>

          <h2 class="myheader">Products</h2>
          <p class="underline"></p>

          
      </div>
      <div class="container">
  <main class="gridProduct">
  <article class="productitems myhomeitems">
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./Kamvo-premium-image.png')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="text productheading"> Kamvo Enterprise Project Management</h4>
        <p class="Ptag productpara">Kamvo is an in-house designed Enterprise Project Management with an….</p> <p class="Ptag productpara">Read More</p>
        </div> 
    </div>     
      </div>
    </article>
   
    <article class="myhomeitems">
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./Cloudkart-Box@2x.jpg')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="text productheading">CloudKart Digital eCommerce</h4>
        <p class="Ptag productpara">CloudKart is an eCommerce product designed by Resemble Systems to…</p><p class="Ptag productpara">Read More</p>
        </div> 
    </div>    
      </div>
    </article>
    <article class="myhomeitems">
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./thump.jpg')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="text productheading"> IdeatePro KAIZEN Innovation Management</h4>
        <p class="Ptag productpara">IdeatePro is an in-house designed Kaizen based product for enterprise…</p><p class="Ptag productpara">Read More</p>
        </div> 
    </div>    
      </div>
    </article>
    <article class="myhomeitems">
      <div>
      <div class="left-container">
      <div class="card-Left">
    <img class="imgsize1" src={require('./reconicle.jpg')}  alt="image"></img> </div>
      </div>
      
    <div class="right-container">
    <div class="card-Right">
      <h4  class="text productheading"> General Ledger Reconciliation</h4>
        <p class="Ptag productpara">GLReconcile is an house designed product for Banking sector to…</p><p class="Ptag productpara">Read More</p>
        </div> 
    </div>    
      </div>
    </article>
  </main>
</div>
      </div>
    );
  }
}
 
export default Product;