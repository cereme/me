import { FaHeart } from "react-icons/fa";
import { MdWork } from "react-icons/md";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>
        cereme (Sangyun Pae)
      </p>
      <p>
        <MdWork className="inline w-5 h-5"/> Software engineer, Game Producer
      </p>
      <p>
        <FaHeart className="inline w-5 h-5 pb-1"/> Hatsune miku, Blue Archive
      </p>
      <p>
        Now in <a href="https://rst.cereme.dev">Bad Sector Games</a>
      </p>
      <p>
        contact:
        <a href="mailto:ceremebsy@gmail.com" className="ml-2">
          ceremebsy@gmail.com
        </a>
      </p>
      <p>
        TODO: SNS links
      </p>
      <p>
        TODO: blog
      </p>
    </main>
  );
}
