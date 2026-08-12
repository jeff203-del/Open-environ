"use client";

import { Marquee } from "@gfazioli/mantine-marquee";
import { Box, Tooltip } from "@mantine/core";
import Image from "next/image";
import SectionTitle from "@/features/landing-page/components/SectionTitle";

const partners = [
  {
    uuid: crypto.randomUUID(),
    name: "Adamur",
    image: "/landing-page/adamur.png",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Alliance Français",
    image: "/landing-page/alliance-francias.png",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Antugrow",
    image: "/landing-page/antugrow.png",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Devfolio",
    image: "/landing-page/devfolio.png",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Green Belt Movement",
    image: "/landing-page/green-belt-movement.png",
  },
  {
    uuid: crypto.randomUUID(),
    name: "Wangari Maathai Foundation",
    image: "/landing-page/wangari-maathai-foundation.png",
  },
];

const Partners = () => {
  return (
    <Box id="partners">
      <Box px={{ base: "md", sm: "lg", md: 80, lg: 120 }} py="xl">
        <SectionTitle
          title="OUR PARTNERS"
          description="We team up with organizations that care about forests and the planet."
        />
      </Box>

      <Box mt="lg" px={{ base: "sm", sm: "lg", md: 80 }}>
        <Marquee pauseOnHover fadeEdges repeat={4}>
          {partners.map(({ uuid, name, image }) => (
            <Tooltip key={uuid} label={name} withArrow position="top">
              <Box
                mx="md"
                style={{
                  position: "relative",
                  width: 80,
                  height: 80,
                }}
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  style={{
                    objectFit: "contain",
                    padding: "10px",
                  }}
                  sizes="80px"
                />
              </Box>
            </Tooltip>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Partners;
