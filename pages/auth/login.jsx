import Default from "@/components/auth_default";
import Link from "next/link";
import auths from "@/styles/auth.module.css"
import { FaGoogle } from 'react-icons/fa'
import { useRef } from "react";
import { login_user } from "../api/hello";


function Login() {
    const loginRef = useRef({
        password: null,
        email: null,
    })


    const validate = async (ev) => {
        ev.preventDefault();

        try {
            const data = {
                email: loginRef.current.email,
                password: loginRef.current.password
            }
            const request = await login_user(data)
            console.log(request.data);
            // navigate.push("/auth/login")
        } catch (error) {
            console.log(error);
        }


    }


    return (
        <>
            <section className="d-flex flex-column flex-md-row" style={{ height: "100vh" }}>
                <Default data={", We are glad to see you again!"} bold={"Welcome"} />
                <main className="bg-dark d-flex align-items-center tw-justify-center text-white  p-3 p-md-0" style={{ width: "100%" }}>
                    <div style={{ width: "450px" }}>
                        <p className="tw-font-semibold text-light">
                            Not a member?
                            <Link href={'/auth/signup'} className="text-warning tw-no-underline"> Register</Link>
                        </p>
                        <div>
                            <h2 className="tw-font-semibold">Log In to Your Account</h2>
                        </div>

                        <div className="my-4">
                            <button className={auths.log_google}>
                                <FaGoogle />
                                Log in with Google
                            </button>
                        </div>
                        <div className="d-flex text-secondary gap-3">
                            <hr style={{ width: "50px" }} />
                            <span style={{ color: "rgb(119,123,127)" }}>OR</span>

                            <hr style={{ width: "100%" }} />
                        </div>

                        <form className="mt-4" onSubmit={validate} action="">
                            <div>
                                <label htmlFor="email" className="tw-text-lg">Email Address</label>
                                <input type="email"
                                    required
                                    placeholder="Enter Your Email"
                                    onChange={(e) =>
                                        (loginRef.current.email = e.target.value)
                                    }
                                    className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3`}
                                />
                            </div>
                            <div>
                                <div className="d-flex tw-justify-between">
                                    <label htmlFor="password" className="tw-text-lg">Password</label>
                                    <Link href={"/auth/forgot_password"} className="text-warning tw-no-underline">Forgot password?</Link>
                                </div>
                                <input type="password"
                                    required
                                    placeholder="Enter Password"
                                    onChange={(e) =>
                                        (loginRef.current.password = e.target.value)
                                    }
                                    className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3`}
                                />
                            </div>
                            <button className={`${auths.log_google} tw-w-28 tw-justify-center tw-font-semibold`}>Log in</button>
                        </form>
                    </div>

                </main>
            </section>
        </>
    );
}

export default Login;