import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const HeaderContent = ({title, icon, subItem}) => {
    return ( 
        <div className="w-100 d-flex align-items-center pt-2 pb-4" style={{color: "#aaa"}}>
            <i className="material-icons" style={{ fontSize: "1.5rem" }}>{icon}</i>
            <div className = "header-title-page">
                <h2 className="text-uppercase mb-0 ml-2 float-left" style={{fontWeight: "200"}}>{ReactHtmlParser(title)}</h2>
                {subItem ? <p className="mb-0 float-left" style={{bottom: "0"}}>{subItem}</p> : null}
            </div>
            
        </div>
     );
}
 
export default HeaderContent;