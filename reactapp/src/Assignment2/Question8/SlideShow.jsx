//Question8
// Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import React, { useEffect, useState } from "react";

function SlideShow() {
  const imagearray = [
    "p1.jpg",
    "p2.jpg",
    "p3.jpg",
    "p4.jpg",
    "p5.jpg",
    "p6.jpg",
    "p7.jpg",
    "p8.jpg",
    "p9.jpg",
    "p10.jpg",
  ];
  const [image, setImage] = useState(0);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play) {
      const timer = setTimeout(() => {
        //can also use setInterval here
        if (image === imagearray.length - 1)
          //size of our array here->10
          setImage(0);
        else setImage(image + 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [play, image,imagearray.length,]);

  return (
    <div>
      <button onClick={() => setPlay(true)}>Play</button>
      <button onClick={() => setPlay(false)}>Pause</button>
      <img
        src={imagearray[image]}
        style={{ width: "80px" ,height:"80px" }}
        alt="img_not_found"
      />
    </div>
  );
}

export default SlideShow;
