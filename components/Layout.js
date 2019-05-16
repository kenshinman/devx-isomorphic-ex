import React from "react";
import Link from "next/link";

const Layout = ({ children }) => (
  <div className="App">
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
    <main>{children}</main>
    <style jsx global>
      {`
        .App {
          text-align: center;
        }

        .App-logo {
          animation: App-logo-spin infinite 20s linear;
          height: 40vmin;
          pointer-events: none;
        }

        .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }

        .App-link {
          color: #61dafb;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
        }

        ul,
        li {
          list-style: none;
        }

        ul {
          display: flex;
          align-content: center;
          justify-content: center;
        }

        ul li a {
          margin: auto 6px;
        }

        .img {
          width: 100%;
        }

        ul li a:hover {
          text-decoration: underline;
          font-weight: bold;
        }

        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
  </div>
);

export default Layout;
