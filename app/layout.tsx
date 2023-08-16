/* eslint-disable @next/next/no-head-element */
import { Poppins } from 'next/font/google'
import Link from "next/link";
import "./globals.css";

type Props = {
  children: React.ReactNode
}

const poppins = Poppins({
  weight: ['400', '500', '600',  '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function RootLayout(props: Props) {
  return (
    <html>
      <body>
        <main className={poppins.className}>
          <nav className="flex flex-row gap-4 mx-4 my-5">
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {props.children}
        </main>
      </body>
    </html>
  );
}
