import Default from "@/components/auth_default";
import auths from "@/styles/auth.module.css"
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai"



function Update() {


    return (
        <>
            <section className="d-flex flex-column flex-md-row" style={{ height: "100vh" }}>
                <Default data={"We care about your account security."} />
                <main className="bg-dark d-flex align-items-center tw-justify-center text-white  p-3 p-md-0" style={{ width: "100%" }}>
                    <div className="text-center" style={{ width: "400px" }}>
                        <div className='d-flex align-items-center justify-content-center mx-auto my-3 bg-warning fs-5' style={{ border: "8px solid rgb(255,196,160)", borderRadius: "28px", color: "#E24E17", width: "48px", height: "48px" }}>
                            <AiOutlineCheck />
                        </div>

                        <h5 className="fs-2 fw-bold">Password Updated </h5>
                        <div className="my-5" style={{ fontSize: "17px", color: "rgb(119,123,127)" }}> Your password has been changed successfully. Use your new password to log in. </div>
                        <Link className="tw-no-underline" href={"/auth/login"}>
                            <button type="submit" className={`my-4 p-3 w-50 rounded mx-auto d-block fs-5 ${auths.log_google}`}>
                                Login now
                            </button>
                        </Link>
                    </div>

                </main>
            </section>
        </>
    );
}

export default Update;