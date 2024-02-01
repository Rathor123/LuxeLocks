import React from "react";
import icons from "../assets/icons/icons";
function CustomerReview() {
  return (
    <div>
      <h3>Customer Review</h3>
      <div>
        <div className="flex flex-row">
          <icons.filledStar />
          <icons.filledStar />
          <icons.filledStar />
          <icons.filledStar />
          <p>
            4.8 <span className="">out of 5</span>
          </p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default CustomerReview;
