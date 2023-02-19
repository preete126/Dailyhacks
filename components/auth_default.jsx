import auths from "@/styles/auth.module.css"
import Image from "next/image";
import logo from "@/public/logo.png"
import Link from "next/link";

function Default(props) {
    return (
        <>
            <main className={`col-4 px-3 px-sm-5 px-md-3 px-lg-5 py-5  ${auths.authD}`}>
                <div>
                   <Link href={"/"}>
                     <Image src={logo} width={200} alt="dailyhacks"/>
                   </Link>

                    <p className="fs-1 my-5" style={{color:"whitesmoke", lineHeight:"50px"}}> <b>{props?.bold}</b>{props?.data}</p>
                </div>
            </main>
        </>
    );
}

export default Default;