"use client"

import React from "react";

import { store } from '@/shared/store'
import { Provider } from 'react-redux'

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <Provider store={store}>
              {children}
          </Provider>
      </body>
    </html>
  );
}
