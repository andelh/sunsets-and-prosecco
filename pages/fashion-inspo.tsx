import React from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

type Props = {};

export default function FashionInspo({}: Props) {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <div className="min-h-screen bg-yellow">
      <div className="flex flex-col items-center px-4 py-20 text-center">
        <h1 className="mb-4 text-6xl font-bold">Fashion Inspo</h1>
        <p className="text-medium mb-8 text-lg">
          It’s just colours from the sunset 😳
        </p>
        <div className="w-full">
          <Carousel
            withIndicators={true}
            withControls={true}
            loop
            align="start"
            mx="auto"
            height={500}
            slideSize={matches ? "85%" : "33.333333%"}
            slidesToScroll={matches ? 1 : 3}
            slideGap="md"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Carousel.Slide key={item}>
                <div className="relative h-full w-full rounded-md border-4 border-black bg-white">
                  <Image
                    src={`/looks/look${item}.jpg`}
                    alt="look"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
