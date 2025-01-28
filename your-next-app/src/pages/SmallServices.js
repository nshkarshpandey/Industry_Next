import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


function SmallServices() {
  return (
    <div className="py-5" id="ser" style={{ backgroundColor: "#FFFDF8" }}>
  <h2 className="text-center mb-5 font-mon ser-font">
    Our <span style={{ color: "#B48230" }}>Services</span>
  </h2>
  <div className="container font-mon">
    <div className="row text-center">
    <Image
        src="/images/sml-ser.png"
        alt=""
        id=""
        layout="responsive"
        width={349}
        height={345}
        loading="eager"
       
    />
    </div>
  </div>
</div>

  )
}

export default SmallServices
