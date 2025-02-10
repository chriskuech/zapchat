import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">zapchat</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/chat">Chat</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
