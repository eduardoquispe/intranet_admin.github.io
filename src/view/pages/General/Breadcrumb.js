import React from 'react'

const Breadcrumb = () => {
    return ( 
        <nav aria-label="breadcrumb" className="border">
            <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Library</a></li>
                <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
        </nav>
     );
}
 
export default Breadcrumb;