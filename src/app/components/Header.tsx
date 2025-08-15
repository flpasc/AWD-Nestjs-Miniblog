import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav style={{ backgroundColor: "blue", color: "white" }}>
        <Link href={"/"}>Home</Link>
      </nav>
    </header>
  );
}
