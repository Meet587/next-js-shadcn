'use client'
import Link from "next/link"

const Header = () => {
    return (
        <nav className=" bg-blue-300
                py-4  font-semibold fixed  
                w-full top-0 left-0 min-h-[56px] z-50">
            <div className="hidden md:flex container mx-auto flex justify-between">
                <ul className="ml-8 space-x-4">
                    <li className="inline-block">
                        <Link href="/"
                            className="hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link href=
                            "#"
                            className="hover:text-gray-300">
                            Practice
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link href=
                            "#"
                            className="hover:text-gray-300">
                            Tutorials
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link href=
                            "#"
                            className="hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                </ul>

                <ul className="ml-8 space-x-4">
                    <li className="inline-block">
                        <Link href="/"
                            className="hover:text-gray-300">
                            Login
                        </Link>
                    </li>
                    <li className="inline-block">
                        <Link href=
                            "#"
                            className="hover:text-gray-300">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Header