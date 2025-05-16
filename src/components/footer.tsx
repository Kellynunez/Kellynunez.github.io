const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="text-center font-normal text-gray-700">
            &copy; {CURRENT_YEAR} Kelly Núñez. Built using{" "}
            <a 
              href="https://www.material-tailwind.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Material Tailwind
            </a> and{" "}
            <a 
              href="https://react.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              React
            </a>
            .
          </p>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              subscribe
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
