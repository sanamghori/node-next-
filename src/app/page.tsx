import Image from "next/image";
import Header from "@/components/Header";
import About from "@/components/about";
import Link from "next/link";
import Card from "@/components/card";
//page.tsx wali file main hum wo chez likhtay hy jo ak page par dekhni hoo
//'use client'
//import { useRouter } from "next/navigation";


export default function Home() {
  //const route=useRouter()
  return (
    <>
    <h1>this is home page</h1>
    <Header/>
    <About/>
    <Link href='/about'><h1>go to home page</h1></Link>
    <Link href='/navbar'><h2>go to navbar</h2></Link>npx create-next-app@latest
    <Link href='/foster'><h3>go to foster</h3></Link>
   <Card name='wamiq'
   rollnumber='223345'
   day='tuesdy'
   timming='9to6'
   /><br/>
   <Card name='hassan'
   rollnumber='1234'
   day='wednesday'
   timming='9 to 12'/><br/>
   <Card name='anaya'
   rollnumber='334455'
   day='thursday'
   timming='2 to 5'/><br/>
    </>
  );
}