import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  display: 'swap',
  weight: ['400', '700'],
  preload: false,
 });

export const metadata: Metadata = {
  title: "KyotoHackerWay トピックス一覧",
  description: "KyotoHackerWay イベントのネタになる情報を提供します。自分の話せる事や話したい事を投稿して下さい。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
