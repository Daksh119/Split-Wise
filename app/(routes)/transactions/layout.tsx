import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Transactions | Split Wise",
    description: "Page listing all the transactions made by you.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}