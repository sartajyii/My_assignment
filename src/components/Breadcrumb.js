
function BreadCrumb(){
    return(
     <div className="breadcrumb-box">
        <nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li><a href="/" className="image-after active">candidates</a></li>
    <li><a href="/products">robert hardy</a></li>
      <li><a href="/products" className="last-chip">id-231</a></li>
 


  </ol>
</nav>
<div className="right-btn-section">
<button className="request-btn">request for profile</button>
<button className="request-btn">pervious</button>
<button className="request-btn">next</button>
</div>
     </div>
    )
}
export default BreadCrumb;