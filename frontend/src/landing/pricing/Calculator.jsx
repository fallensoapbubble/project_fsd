import React from 'react';
import { Link } from 'react-router-dom';


function Calculator() {
    return ( 
       <div className="container">
        <div className="row">
            <div className="col-6">
                <h4><Link style={{textDecoration:"None"}}>Brokerage Calculator</Link></h4>
                <ul style={{fontSize:"15px"}}>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                    </li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                    </li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                    </li>
                </ul>

            </div>
            <div className="col-6">
            <h4><Link style={{textDecoration:"None"}}>List of charges</Link></h4>
            </div>
        </div>
       </div>
     );
}

export default Calculator;