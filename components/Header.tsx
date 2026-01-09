import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Lynera Host
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services/vps" className="hover:text-blue-200 transition">
                VPS
              </Link>
            </li>
            <li>
              <Link href="/services/cpanel" className="hover:text-blue-200 transition">
                cPanel
              </Link>
            </li>
            <li>
              <Link href="/services/minecraft" className="hover:text-blue-200 transition">
                Minecraft
              </Link>
            </li>
            <li>
              <Link href="/services/bot" className="hover:text-blue-200 transition">
                Bot Hosting
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
