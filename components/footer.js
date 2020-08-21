function Footer() {
  return (
    <footer className="">
      <ul className="flex items-center justify-between p-4 mx-auto text-sm text-cool-gray-600 max-w-7xl md:p-8">
        <li>
          Created by{" "}
          <a
            href="https://github.com/mozart409"
            target="_blank"
            className="font-bold"
            rel="noopener noreferrer"
          >
            Mozart409
          </a>
        </li>

        <li>
          <a
            href="https://github.com/mozart409/tinylibs"
            target="_blank"
            className="font-bold"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
