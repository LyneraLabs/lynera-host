export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lynera Host</h3>
            <p className="text-gray-400">
              Premium hosting solutions for your business needs.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>VPS Hosting</li>
              <li>cPanel Hosting</li>
              <li>Minecraft Hosting</li>
              <li>Bot Hosting</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              Email: support@lynerahost.com<br />
              Phone: 1-800-LYNERA
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2026 Lynera Host. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
