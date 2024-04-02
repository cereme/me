import { FaHeart, FaUnity } from "react-icons/fa";
import { MdWork } from "react-icons/md";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-1">
      <h1>
        cereme (Sangyun Pae)
      </h1>
      <hr/>
      <p>
        <MdWork className="inline w-5 h-5 pb-1"/>CTO/Producer @ <a href="https://rst.cereme.dev">Bad Sector Games</a>
      </p>
      <p>
        <FaUnity className="inline"/>
      </p>
      <p>
        <FaHeart className="inline w-5 h-5 pb-1"/>Hatsune miku, Blue Archive
      </p>
      <p>
        contact:
        <a href="mailto:ceremebsy@gmail.com" className="ml-2">
          ceremebsy@gmail.com
        </a>
      </p>
      {/* <p>
        TODO: SNS links
      </p>
      <p>
        TODO: blog
      </p> */}
    </main>
  );
}
