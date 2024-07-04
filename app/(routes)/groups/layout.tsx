import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Groups | Split Wise",
    description: "All the Groups you are part of.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}