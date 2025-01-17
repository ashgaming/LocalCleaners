import React from "react";

const GalleryImages = () => {
  const images = [
    "https://img-cdn.pixlr.com/image-generator/history/678259e0a5525e9e859e4688/50808163-e6b0-4ba4-8c15-3e50c2ff3ea5/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/678259e0a5525e9e859e4688/6f2ddbdf-6f45-4ce9-9cb8-9cdd350064d0/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/678259e0a5525e9e859e4688/4d214b15-4fbc-413b-8282-ae3396941a93/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825c4e6e155c80e6739527/3ea29b2a-9fdf-4860-93fb-a6a264921d0c/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825a4d3d682cc933759913/b13cb71b-cadd-445f-8718-7f593e51acbf/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825a4d3d682cc933759913/772e5f53-cea4-4350-9091-0a393deea34a/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825c172ea8977b667ce1a5/b6160826-a6b5-41de-82d8-8d7db80b27db/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825bd452cec200f7a3b1a2/bc6f44de-cde7-4fdd-b19e-b65c18da9fba/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825dba4bc5d7a88dfe5cf1/f91797af-22bf-4040-8161-da7a199a3205/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825d6cad050a8e2b7404e9/a85ea72c-ba04-482d-a147-5853869c1595/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825bd452cec200f7a3b1a2/c573b26a-b546-4eed-94e1-3f2a1b5330a6/preview.webp",
    "https://img-cdn.pixlr.com/image-generator/history/67825d6cad050a8e2b7404e9/2ac8d72f-72af-41f6-8fd8-794124d73836/preview.webp",
  ];

  const renderImages = () => {
    const chunks = [];
    for (let i = 0; i < images.length; i += 3) {
      chunks.push(
        <div key={i} className="grid gap-4">
          {images.slice(i, i + 3).map((image, index) => (
            <div key={index}>
              <img
                className="h-full max-w-full rounded-lg"
                loading="lazy"
                src={image}
                alt={`Gallery item ${i + index + 1}`}
              />
            </div>
          ))}
        </div>
      );
    }
    return chunks;
  };

  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-10 sm:gap-5 xs:gap-2">{renderImages()}</div>
    </div>
  );
};

export default GalleryImages;
