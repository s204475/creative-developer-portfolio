import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };

    loadAnimation();
  }, [animationPath]);

  if (!animationData) {
    return <div>Loading...</div>; // Loading indicator
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData, // Use the fetched JSON data here
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

export default GreetingLottie;
