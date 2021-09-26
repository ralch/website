import React from "react";

export default function Image({ src }: any) {
  return (
    <div
      className="background-image-holder"
      style={{
        background: 'url("' + src + '")',
        backgroundPosition: "initial",
        opacity: 1,
      }}
    >
      <img alt="image" src={src} />
    </div>
  );
}
