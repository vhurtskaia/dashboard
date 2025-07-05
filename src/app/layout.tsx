import type { Metadata } from "next";
import React from "react";

import "./globals.css";
import {SidebarProvider } from "@/shared/ui/Sidebar/sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Test task front-end dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <SidebarProvider>
              {children}
          </SidebarProvider>
      </body>
    </html>
  );
}
