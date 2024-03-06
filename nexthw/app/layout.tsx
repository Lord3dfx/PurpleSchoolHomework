import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css"
import Svggit from '@/public/github.svg';

const inter = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Блог",
  description: "Домашнее задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className={styles.header}>
          <h1>.My_Blog</h1>
          <a href="https://github.com/Lord3dfx" title="To Github!" target="blank"><Svggit></Svggit></a>
          
        </div>
        <div className={styles.wrapper}>
        {children}
        </div>
        </body>
    </html>
  );
}
