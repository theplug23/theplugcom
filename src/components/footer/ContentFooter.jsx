import React from 'react';
import {dsnCN} from "../../hooks/helper";

function ContentFooter({className, ...restProps}) {
    return (
        <div className={dsnCN('col-menu' ,className)} {...restProps}>
            <p >
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+49) 1639209766
            </p>
            <p className="mt-2">
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+33) 754543997
            </p>
            <p className="mt-2">
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+237) 678129832
            </p>
            <p className="mt-2">
            <i class="fa fa-phone" aria-hidden="true" style= {{color: '#b99226'}}></i> <span style= {{color: '#b99226'}}>:</span> (+221) 777421948
            </p>
            <p className="mt-2">
                {/* <strong>E</strong> <span>:</span> <a href="#" style= {{fontSize: '.5rem'}}> contact.theplugcomm@gmail.com</a> */}
                <a href="mailto:contact@theplug-group.com"><i class="fa fa-envelope-o" aria-hidden="true" style= {{color: '#b99226'}}> :</i> contact@theplug-group.com</a> 
            </p>
            
        </div>
    );
}

export default ContentFooter;