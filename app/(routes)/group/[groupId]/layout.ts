import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Group | Split Wise",
    description: "Group page fot the group ${group name}$",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}