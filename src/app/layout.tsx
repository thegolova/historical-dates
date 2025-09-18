import React, { ReactNode } from "react";
import "./globals.scss";
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body> {children} </body>
    </html>
  );
};

export default RootLayout;
