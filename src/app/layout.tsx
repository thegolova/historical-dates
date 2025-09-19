import React, { ReactNode } from "react";
import "./globals.scss";
import { bebasNeue, ptSans } from "@/lib/fonts";
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ru" className={(ptSans.className, bebasNeue.className)}>
      <body> {children} </body>
    </html>
  );
};

export default RootLayout;
