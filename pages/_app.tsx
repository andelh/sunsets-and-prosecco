import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const pally = localFont({
  src: "./fonts/Pally-Variable.woff2",
  variable: "--font-pally",
});
const dancingScript = localFont({
  src: "./fonts/DancingScript-Variable.woff2",
  variable: "--font-dancing",
});
export const panchang = localFont({
  src: "./fonts/Panchang-Variable.woff2",
  variable: "--font-panchang",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${pally.variable} ${panchang.variable} ${dancingScript.variable} font-sans text-black`}
    >
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
      <div className=" bottom-0 flex w-full flex-row items-center justify-center bg-[#CE4993] p-4 text-xl font-bold text-white">
        #sunsetsandprosecco
      </div>
    </main>
  );
}
