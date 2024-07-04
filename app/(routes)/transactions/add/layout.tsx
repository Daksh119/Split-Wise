import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add Transaction | Split Wise",
    description: "Page to create new transaction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}