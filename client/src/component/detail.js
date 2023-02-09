import React from "react";
import Kategori from "./kategori";
import Office from "./office";
import Mitra from "./mitra";
import Partner from "./partner";

export default function Detail(){

    return(
    <div className='hero-detail-section'>
          <Kategori/>
          <Office/>
          <Mitra/>
          <Partner/>
        </div>

    );
}