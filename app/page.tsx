import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className="text-lg m-9 flex justify-center">Hello Next</main>;
}
