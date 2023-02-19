import Default from "@/components/auth_default";
import Link from "next/link";
import auths from "@/styles/auth.module.css"
import { FaGoogle } from 'react-icons/fa'
import { useRouter } from "next/router";

function Forgot_password() {
    const navigate = useRouter()


    const generate_otp = (ev)=>{
        ev.preventDefault();
        navigate.push("/auth/otp")
    }


    return (
        <>
            <section className="d-flex flex-column flex-md-row" style={{ height: "100vh" }}>
                <Default data={", We are here to help you recover your password."} bold={"Don't worry"} />
                <main className="bg-dark d-flex align-items-center tw-justify-center text-white  p-3 p-md-0" style={{ width: "100%" }}>
                    <div style={{ width: "450px" }}>
                        <p className="tw-font-semibold text-light">
                            Return to
                            <Link href={'/auth/login'} className="text-warning tw-no-underline"> Login</Link>
                        </p>
                        <div>
                            <h2 className="tw-font-semibold">Forgot Password?</h2>
                        </div>

                       <div className="mt-4 tw-text-lg" style={{color:"rgb(119,123,127)"}}>Enter the email address associated with your account.</div>
                       
                        <form className="mt-4" onSubmit={generate_otp} action="">
                            <div>
                                <label htmlFor="email" className="tw-text-lg">Email Address</label>
                                <input type="email"
                                    required
                                    placeholder="Enter Your Email"
                                    className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3`}
                                />
                            </div>
                           
                            <button type="submit" className={`${auths.log_google} tw-w-32 my-4 tw-justify-center tw-text-lg tw-font-semibold`}>Continue</button>
                        </form>
                        <div className="d-flex text-secondary gap-3">
                            <hr style={{ width: "50px" }} />
                            <span style={{color:"rgb(119,123,127)"}}>OR Login with</span>
                            <hr style={{ width: "59%" }} />
                        </div>
                        <div className="my-4">
                            <button className={auths.log_google}>
                                <FaGoogle />
                                Log in with Google
                            </button>
                        </div>

                    </div>

                </main>
            </section>
        </>
    );
}

export default Forgot_password;