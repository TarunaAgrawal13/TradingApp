import React from 'react';
function Universe() {
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{width:"120px"}} alt=""/>
          <p className='text-small text-muted'>Themaitic Investing Platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"120px"}} alt=""/>
          <p className='text-small text-muted'>Algo and Stratergy Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"120px"}} alt=""/>
          <p className='text-small text-muted'>Option Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"120px"}} alt=""/>
          <p className='text-small text-muted'>Assest Management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{width:"120px"}} alt = ""/>
          <p className='text-small text-muted'>Bonds Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"120px"}} alt= ""/>
          <p className='text-small text-muted'>Insaurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>SignUp Now</button>
      </div>
    </div>
     );
}

export default Universe;