const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">&copy; 2024 Digi-Angler. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://x.com/digiangler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            X
          </a>
          <a
            href="https://github.com/digiangler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
