import Default from "@/components/auth_default";
import Link from "next/link";
import auths from "@/styles/auth.module.css"
import { FaGoogle } from 'react-icons/fa'
import { useRouter } from "next/router";


function Signup() {
    const navigate = useRouter()
    const login = (ev)=>{
        ev.preventDefault();
        navigate.push("/auth/login")
    }


    return (
        <>
            <section className="d-flex flex-column flex-md-row" style={{ minHeight: "100vh" }}>
                <Default data={", Looks like you're new here!"} bold={"Welcome"} />
                <main className="bg-dark d-flex align-items-center tw-justify-center text-white  p-3 py-md-5" style={{ width: "100%" }}>
                    <div style={{ width: "450px" }}>
                        <p className="tw-font-semibold">
                        Already a member?
                            <Link href={'/auth/login'} className="text-warning tw-no-underline"> Login</Link>
                        </p>
                        <div>
                            <h2 className="tw-font-semibold">Register Your Account</h2>
                        </div>

                        <div className="my-4">
                            <button className={auths.log_google}>
                                <FaGoogle />
                                Register with Google
                            </button>
                        </div>
                        <div className="d-flex text-secondary gap-3">
                            <hr style={{ width: "50px" }} />
                            <span style={{color:"rgb(119,123,127)"}}>OR</span>
                            
                            <hr style={{ width: "100%" }} />
                        </div>

                        <form className="mt-4" onSubmit={login} action="">
                            <div>
                                <label htmlFor="email" className="tw-text-lg">Full Name</label>
                                <input type="text"
                                    required
                                    placeholder="Enter Your Name"
                                    className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3`}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="tw-text-lg">Email Address</label>
                                <input type="email"
                                    required
                                    placeholder="Enter Your Email"
                                    className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3`}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="tw-text-lg">Password</label>
                                <input type="password"
                                    required
                                    placeholder="Enter Password"
                                    minLength={8}
                                    className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3`}
                                />
                            </div>
                            <div className={`${auths.policy} d-flex gap-2 py-2`}>
                                <input type="checkbox" className={auths.check} name="" id="" />
                                <div>
                                    I agree to the <a href="#">Terms</a> and
                                    <a href="#"> Private Policy</a>
                                </div>
                            </div>
                            <button className={`${auths.log_google} tw-w-28 tw-justify-center tw-font-semibold mt-3`}>Sign up</button>
                        </form>
                    </div>

                </main>
            </section>
        </>
    );
}

export default Signup;