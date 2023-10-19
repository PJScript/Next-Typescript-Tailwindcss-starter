import Image from "next/image";
import styles from "./page.module.css";
import './styles/globals.css'
export default function Home() {
  return (
    <main className="flex w-screen h-screen blue justify-center items-center">
      <div className="flex justify-center align-center gap-10 bg-black bg-gray-400">
        <div>Next</div>
        <div>Typescript</div>
        <div>Tailwindcss</div>
      </div>
      
    </main>
  );
}
