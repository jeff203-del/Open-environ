import type { Route } from "next";

export const navLinks: { label: string; href: Route }[] = [
  { label: "Features", href: "#features" },
  { label: "Statistics", href: "#statistics" },
  { label: "FAQs", href: "#faqs" },
  { label: "The Creator", href: "#the-creator" },
  { label: "Get In Touch", href: "#get-in-touch" },
];

export enum ProfileTypes {
  Affiliate = "affiliate",
  Business = "business",
}

export const profileTypeDescriptions = {
  affiliate:
    "Grow your influence and earn on your own terms by partnering with trusted brands. Share products that genuinely resonate with your audience and turn your reach into real, values-aligned rewards.",
  business:
    "Promote your own products and services by collaborating with experienced creators who can amplify your brand's visibility, build trust, and deliver long-term growth through impactful campaigns.",
};
