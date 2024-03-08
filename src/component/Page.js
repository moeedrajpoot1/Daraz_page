import React from 'react'
import { Link } from 'react-router-dom';

const Page = ({pro}) => {
function Change(){
let imgi=document.getElementById("pk");
imgi.src=" /images/carazol towel.jpg "
}
function Out(){
  let imgi = document.getElementById("pk");
  imgi.src="  /images/carzaol1.jpg  "
}
  return (
    <div className='container-fluid'>
    
    {/*///////// carazol part start/////////*/}
<div className='container-fluid my-2 cara '  >
<div  className='row cc'  >

<div className='col-md-2 side ' >
<div >

<ul class="list-group list-group-flush">
  <li class="list-group-item lip"><span><i class="bi bi-smartwatch i"></i></span>Watches </li>
  <li class="list-group-item lip"><span><i class="bi bi-arrow-through-heart i"></i></span>Health & Beauty</li>
  <li class="list-group-item lip "><span><i class="fa-solid fa-vest i"></i></span>Mens'Fashion</li>
  <li class="list-group-item lip  "><span><i class="fa-solid fa-person-breastfeeding i"></i></span>Mother & baby</li>
  <li class="list-group-item lip "><span><i class="fa-solid fa-volleyball i"></i></span>Sports </li>
  <li class="list-group-item lip "><span><i class="fa-solid fa-tv i"></i></span>TV & HOme</li>
  <li class="list-group-item lip "><span><i class="fa-solid fa-laptop-medical i"></i></span>Electronic Devices</li>

  
</ul>



</div>

</div>

<div className='col-md-10'>
<div id="carouselExampleIndicators" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner  rounded-4">
    <div className="carousel-item active    ">
      <img id='pk' onMouseOver={Change} onMouseLeave={Out} src=" /images/carzaol1.jpg  " className="d-block w-100 ww" alt="..." />
    </div>
    <div className="carousel-item">
      <img  src="/images/carasoul.png " className="d-block w-100 im " alt="..." />
    </div>
    <div className="carousel-item">
      <img src="  /images/carazol 3.jpg " className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>





</div>





</div>









</div>

{/*Deliver and payment part */}
<div className='container-fluid my-2 delivery round '>
<div className='row py-3  '>
<div className='col-md-2  li1'><span> <img src=' /images/safe payment.png '/>   </span> Safe Payments <span className='ptt'>|</span>  </div>
<div className='col-md-2 long'> <span> <img  src=' /images/national delivery.png '/></span>  <span className='national'>National Delivery </span><span className='ptt'  >|</span> </div>
<div className='col-md-2'> <span>   <img src=' /images/free and  easy.png '/> </span><span className='tss'>Free &  Returns</span><span className='ptt'  >|</span> </div>
<div className='col-md-2'><span>   <img src=' /images/best price guranted.png '/>  </span>Price Guaranteed <span className='ptt'  >|</span> </div>
<div className='col-md-2 long1'><span>   <img src='  /images/authentic.png    '/></span> <span className='tss1'>Authentic Products </span> <span className='ptt'  >|</span> </div>
<div className='col-md-2'><span>   <img src=' /images/daraz verified.png '/></span> Daraz Verified   </div>










</div>

</div>
<div className='ppp d-flex justify-content-between  my-1 '>
<div><img className='imgie b' src='  /images/round 1.png  '/><p className='rt' >Mart</p></div><span className='span1'>|</span>
<div><img className='imgie b' src=' /images/round 33.png '/><p className='rt'>Cosmetics</p></div><span className='span1'>|</span>
<div><img className='imgie b' src=' /images/round 55.png '/><p className='rt'>Beauty</p></div><span className='span1'>|</span>
<div><img className='imgie b' src='  /images/round beauty.png  '/><p className='rt'>Home & Decor</p></div><span className='span1'>|</span>
<div><img className='imgie b' src=' /images/round below 699.png   '/><p className='rt' >Free Delivary</p></div>
<div><img className='imgie b'  src=' /images/round bijli.png  '/><p className='rt' >Flash Sale</p></div><span className='span1'>|</span>
<div><img className='imgie b' src=' /images/round fashion.png '/><p className='rt' >Fashion</p></div><span className='span1'>|</span>
<div><img className='imgie b' src='/images/round gol baj.png  '/><p className='rt'>New on Daraz</p></div><span className='span1'>|</span>
<div><img className='imgie ' src='  /images/round mart.png '/><p className='rt'>Fashion</p></div>







</div>

{/*////// Cards portion/////*/}

<h3 className='d-flex align-content-lg-start flas mt-4 '>Flash Sale</h3>
<div  className='container-fluid cards'>
<ul  className='d-flex onsale'>
<li className='li11'> On Sale Now</li>
<li className='li111'  ><button className='shop'>SHOP MORE</button></li>
</ul>



<hr></hr>
<div className='container-fluid '>
<div className='row  '     >

{pro.map((x)=>{
  return(
  <div className='col-md-2 ms-4 my-3  '>
   
 <div className="card cardss ">
<img src={x.image} className="card-img-top" alt="..." />
<div className="card-body">
<p className="card-title titletext">{x.title}</p>
<p className="card-text paratext">RS {x.price}</p>
<p className="card-text parat3"><strike>RS.5000 </strike><span className='spant'>-70%</span></p>
</div>
</div>




  
  
  
  </div>
  )
  
  
  
  
  
     })}






</div>







</div>



</div>

{/*//////////////////Categories///////////*/}
<h4   className='heading0 d-flex align-content-lg-start mt-3'>Categories</h4>
<div className='container-fluid headingc d-flex ' >
<div className='w1'><a href="#"><img className='w' src=' /images/studia headphones.jpg  '/></a><p className='ctt' >Studio Headphones</p></div>
<div className='w1'  ><a href="#"><img className='w' src=' /images/trimmers.jpg  '/></a><p  className='ctt'  >Trimmers </p></div>
<div className='w1'      ><a href="#"><img className='w' src='  /images/mosti.jpg '/></a><p className='ctt'   >Moisturizers</p></div>
<div className='w1'   ><a href="#"><img className='w' src=' /images/Soundbar.png '/> </a> <p className='ctt'  >soundBar speakers</p>  </div>
<div className='w1'  ><a href="#"><img className='w' src=' /images/weekendrs.jpg'/></a><p className='ctt'   >Weekenders Bags</p></div>
<div className='w1'    ><a href="#"><img className='w' src='/images/water pumps.jpg '/></a><p className='ctt'    >Water Pumps</p></div>
<div className='w1'   ><a href="#"><img className='w' src=' /images/sewing machine.jpg'/></a><p className='ctt'  >Sewing Machine </p></div>
<div className='w1'  ><a href="#"><img className='w e' src=' /images/crossbody bags.jpg'/></a> <p className='ctt'   >Cross Body Bags</p></div>





</div> <hr className='hr1'></hr>

<div className='container-fluid headingc d-flex justify-content-between' >
<div className='w11' ><a href="#"><img className='w2' src=' /images/headlamps.jpg'/></a><p className='ct'  >Headlamps</p></div>
<div className='w11'  ><a href="#"><img className='w2' src='/images/watering system.jpg '/></a><p className='ct'  >Watering System</p> </div>
<div className='w11'   ><a href="#"><img className='w2' src='/images/black tea.jpg '/></a><p className='ct'  >Black Tea</p></div>
<div className='w11'   ><a href="#"><img className='w2' src=' /images/noodles.jpg'/></a><p className='ct'  >Noodles</p></div>
<div className='w11'   ><a href="#"><img className='w2' src='/images/stud earings.jpg '/></a><p className='ct'  >Stud Earrings</p></div>
<div className='w11'    ><a href="#"><img className='w2' src='/images/house slippers.jpg '/></a><p className='ct'  >House Slippers</p></div>
<div className='w11'    ><a href="#"><img className='w2' src='/images/boxing gloves.jpg'/></a><p className='ct'  >Boxing Gloves</p></div>
<div className='w11'    ><a href="#"><img className='w2 e' src='/images/jewellary srorage.jpg '/></a><p className='ct'  >Jewellary Storage</p></div> 





</div>
    {/*//////////////just for you///////////////////*/}
<h3 className='just d-flex align-content-lg-start mt-3 ' >Just For You</h3>

<div className='container-fluid js'>
<div className='container-fluid '>
<div className='row  '     >

{pro.map((x)=>{
  return(
  <div className='col-md-2 ms-4 my-3  '>
   
 <div className="card cardss ">
<img src={x.image} className="card-img-top" alt="..." />
<div className="card-body">
<p className="card-title titletext">{x.title}</p>
<p className="card-text paratext">RS {x.price}</p>
<p className="card-text parat3"><strike>RS.5000 </strike><span className='spant'>-70%</span></p>
<p className="card-text parat3"><span className='stars'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span></p>
</div>
</div>




  
  
  
  </div>
  )
  
  
  
  
  
     })}






</div>







</div>

<div className='container-fluid '>
<div className='row  '     >

{pro.map((x)=>{
  return(
  <div className='col-md-2 ms-4 my-3  '>
   
 <div className="card cardss ">
<img src={x.image} className="card-img-top" alt="..." />
<div className="card-body">
<p className="card-title titletext">{x.title}</p>
<p className="card-text paratext">RS {x.price}</p>
<p className="card-text parat3"><strike>RS.5000 </strike><span className='spant'>-70%</span></p>
<p className="card-text parat3"><span className='stars'><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span></p>
</div>
</div>




  
  
  
  </div>
  )
  
  
  
  
  
     })}






</div>







</div>

 







</div>
{/*//////Footer////////*/}
<button type="button" className="btn btn-outline-warning load border-2 my-3 pp">Load More</button>

<div className='container-fluid ftr'>
<div className='row my-3'>
<div className='col-md-3'>
<ul className='uf'>
<li className='cus'><h4>Customer Care</h4></li>
<li><a href=''>Help Center</a></li>
<li><a href=''>How to BUY</a></li>
<li><a href=''>Return & Refund</a></li>
<li><a href=''>Daraz Shop</a></li>
<li><a href=''>Contact Us</a></li>
<li><a href=''>Purchase Protection</a></li>
<li><a href=''>Daraz PIck UP Point</a></li>
<li className='cus mt-1'><h6>Make Money With Us</h6></li>
<li><a href=''>Daraz University</a></li>
<li><a href=''>Sell On Daraz</a></li>
</ul>





</div>





<div className='col-md-3'>

<ul className='uf'>
<li className='dar'><h4>Daraz</h4></li>
<li><a href=''>About US</a></li>
<li><a href=''>Digital Payments</a></li>
<li><a href=''>Daraz Donates</a></li>
<li><a href=''>Daraz Blog</a></li>
<li><a href=''>Terms & Conditions</a></li>
<li><a href=''>Privacy Policy</a></li>
<li><a href=''>NTN Number</a></li>
<li><a href=''>NTRN Number</a></li>
<li><a href=''>Online Shopping App</a></li>
<li><a href=''>Online Grocery Shopping</a></li>
<li><a href=''>Daraz Exclusive</a></li>
</ul>



</div>
<div className='col-md-3'>
<img className='imagee' src=' /images/imp0.png ' />




</div>

<div className='col-md-3'>
<img className='imageee' src=' /images/imp1.png ' />




</div>








</div>








</div>











    </div>
  )
}

export default Page
