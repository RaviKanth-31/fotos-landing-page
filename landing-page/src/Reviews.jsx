import React from "react";
import "./Reviews.css";

export default function Reviews() {
    return (
    <div className="reviews">
    <div className="reviewcard">
      <p className="reviewtext">
        “All base UI elements are made using Nested Symbols and shared styles that are logically connected.
        Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”
      </p>
      <div className="reviewfooter">
        <div className="avatar"></div>
        <div>
          <strong>Akhil</strong><br/>
          <span>Manifest weddings</span>
        </div>
      </div>
    </div>
  
    <div className="reviewcard">
      <p className="reviewtext">
        “All base UI elements are made using Nested Symbols and shared styles that are logically connected.
        Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”
      </p>
      <div className="reviewfooter">
        <div className="avatar"></div>
        <div>
          <strong>Anand</strong><br/>
          <span>Clickanandh</span>
        </div>
      </div>
    </div>
  
    <div className="reviewcard">
      <p className="reviewtext">
        “All base UI elements are made using Nested Symbols and shared styles that are logically connected.
        Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”
      </p>
      <div className="reviewfooter">
        <img src="nad" alt="" />
        <div>
          <strong>Ravi</strong><br/>
          <span>XYZ</span>
        </div>
      </div>
    </div>
  </div>
  );
}
