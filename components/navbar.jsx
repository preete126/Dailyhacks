import home from "@/styles/Home.module.css"
import logo from "@/public/logo.png"
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ps-0  ps-sm-4 pe-4 py-4  ${home.nav}`} >
                <div className="container-fluid">
                    <Link href={"/"}>
                        <Image src={logo} width={250} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-3 px-lg-0 " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto  d-flex gap-0 gap-lg-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white fs-5" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-5" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-5" href="#">Category</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-white fs-5" href="#">Contact</a>
                            </li>
                        </ul>
                        <form>
                            <button className="btn btn-outline-info px-3 py-2 fs-6" type="submit">Sign up free</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;