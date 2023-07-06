import Link from "next/link";

const Header = () => {
    return (
        <header className="px-6 py-2 h-16 border-b border-white flex justify-between width-100">
            <Link href="/">
                <h1 className="text-2xl md:text-4xl font-bold">Ray Poly Web developer</h1>
            </Link>
            <div className="flex">
                <nav className="flex space-x-6 text-2xl md:text-3xl pt-1">
                    <Link href="/about">About</Link>
                    <Link href="/post">Blog</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;