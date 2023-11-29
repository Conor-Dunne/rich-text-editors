import React from "react";
import Link from "next/link";

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link href="/tinymce">Tinymce</Link>
        </li>
      </ul>
    </>
  );
}
