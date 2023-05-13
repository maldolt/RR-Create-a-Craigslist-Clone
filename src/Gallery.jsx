import React from "react";
import { postings } from "./postings";
import Posting from "./Posting";

function Gallery() {
  return (
    <div className="gallery">
      {postings.map((p, index) => (
        <Posting key={index} post={p} />
      ))}
    </div>
  );
}

export default Gallery;
