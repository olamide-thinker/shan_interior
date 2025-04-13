import Image from 'next/image';
import React from 'react';

const Project_imgShape = ({ img_path, orient }: { img_path: string; orient: boolean }) => {
  
  const [t, setT] = React.useState(false)
  
  console.log("first", t);

  // React.useEffect(()=>{
  //   const transform =  orient % 2 === 1
  //   setT(transform)
  // },[orient])

  const pathData = "M60.564 563.33C26.0674 563.441 -1.41745 534.51 0.460691 500.064L24.6332 56.7334C26.3682 24.9128 52.6764 3.83068e-06 84.5442 2.57788e-06L382.978 -9.15422e-06C414.859 -1.04076e-05 441.174 24.9339 442.891 56.7695L466.735 498.99C468.584 533.271 441.345 562.11 407.014 562.22L60.564 563.33Z";

  return (
    <svg width="100%" height="100%" viewBox="0 0 500 563" className="group flex items-center justify-center">
      <clipPath id="clipPathId">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={pathData}
          transform={  orient? "translate(15, 0)"  // Slight horizontal adjustment for centering
            : "scale(1, -1) translate(15, -563)"  // Flip and adjust for centering
            }
        />
      </clipPath>
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div style={{ clipPath: "url(#clipPathId)", width: '100%', height: '100%' }}>
          <Image
            src={img_path}
            alt=""
            layout="fill"
            className="object-cover h-full w-full group-hover:scale-105 duration-1000 ease-in-out bg-black"
          />
        </div>
      </foreignObject>
    </svg>
  );
};

export default Project_imgShape;
