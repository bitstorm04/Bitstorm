
const Header = () => {
  
  return (
    <header className="sticky top-0 z-50 bg-neutral-900 flex justify-between items-center p-6">
      <a href="#home"><h1 className="text-2xl font-bold text-yellow-400 cursor-pointer">EcoTrackAI</h1></a>
      <nav>
        <ul className="flex space-x-6 items-center">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Map', href: '#installation-map' },
            { label: 'Protection Guide', href: '#protection-guide' },
            { label: 'Community', href: '#footer' },
            { label: 'About', href: '#footer' },
            { label: 'Contact', href: '#footer' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="text-white hover:text-yellow-400 transition">{label}</a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
};

export default Header;
