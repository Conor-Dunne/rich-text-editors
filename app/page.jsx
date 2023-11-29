import React from "react";
import Link from "next/link";

export default function App() {
  return (
    <div className="container px-6">
      <h1>Hello</h1>
      <ul className="list-disc">
        <li>
          <Link href="/tinymce">Tinymce</Link>
        </li>
      </ul>
    </div>
  );
}
