import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-hidden m-0 min-h-screen bg-[url('assets/DSC06134.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-x-0 top-0 text-white pt-8 pr-8 pl-16 backdrop-blur-small">
        <div className="nav-bar-content flex items-center gap-16">
          <div className="text-[4rem]">John Randall</div>
          <nav>
            <ul className="flex flex-1 justify-around list-none">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Photos</a>
              </li>
              <li className="nav-item">
                <a href="#">Videos</a>
              </li>
              <li className="nav-item">
                <a href="#">Coaching</a>
              </li>
              <li className="nav-item">
                <a href="#">Show Calendar</a>
              </li>
              <li className="nav-item">
                <a href="#">Contact</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
