import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthProvider";
import HeaderPage from "./components/Header";
import FooterPage from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "โรงเรียนบ้านหนองเบิด",
  description:
    "โรงเรียนบ้านหนองเบิด ตำบลเมืองน้อย อำเภอธวัชบุรี จังหวัดร้อยเอ็ด",
  keywords: "Nongberd School, โรงเรียนบ้านหนองเบิด, หนองเบิด",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <main className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"> */}
          <main className="justify-center items-start p-1 min-h-screen">
            <div className="p-2">
              <HeaderPage />
            </div>
            <Navbar />
            <div className="p-2">{children}</div>
          </main>
          <FooterPage />
        </AuthProvider>
      </body>
    </html>
  );
}
