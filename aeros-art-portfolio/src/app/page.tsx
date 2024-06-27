import Image from "next/image";
import ShorthandBrowser from "./ui/shorthandBrowser";

export default function Home() {
  return (
    <main>
      <ShorthandBrowser title="Portfolio"/>
      <ShorthandBrowser title="About The Artist"/>
    </main>
  )};