import { Metadata } from "next";

export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME} | India's Leading Real Estate Development Company`,
  description = `Manage your real estate properties with ease.`,
  image = "/thumbnail.png",
  icons = [
    {
      rel: "icon",
      sizes: "32x32",
      url: "/logo/LogoIcon.png",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  icons,
  ...(noIndex && { robots: { index: false, follow: false } }),
});
