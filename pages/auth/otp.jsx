import Default from "@/components/auth_default";
import auths from "@/styles/auth.module.css"
import otp_icon from "@/public/otp-icon.png"
import Image from "next/image";
import { useRouter } from "next/router";



function Otp() {

    const navigate = useRouter()


    const new_code = (ev) => {
        ev.preventDefault();
        navigate.push("/auth/new_password")
    }

    return (
        <>
            <section className="d-flex flex-column flex-md-row" style={{ height: "100vh" }}>
                <Default data={"We care about your account security."} />
                <main className="bg-dark d-flex align-items-center tw-justify-center text-white  p-3 p-md-0" style={{ width: "100%" }}>
                    <div style={{ width: "450px" }}>

                        <div>
                            <h2 className="tw-font-semibold pb-4">Two-Step Verification</h2>
                        </div>

                        <div>
                            <Image src={otp_icon} width={"auto"} alt="otp-icon" />
                        </div>
                        <div className="mt-4 tw-text-lg text-light">Please enter the OTP (one time password) to verify your account. A Code has been sent to hello@gmail.com</div>

                        <form className="mt-4" onSubmit={new_code} action="">
                            <div>
                                <label htmlFor="email" className="tw-text-lg">Enter 4 digit code</label>
                                <div className="d-flex gap-3">
                                    <input type="text"
                                        required
                                        maxLength={1}
                                        className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 fs-4 fw-bold text-center my-3`}
                                    />
                                    <input type="text"
                                        required
                                        maxLength={1}
                                        className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3 fs-4 fw-bold text-center`}
                                    />
                                    <input type="text"
                                        required
                                        maxLength={1}
                                        className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3 fs-4 fw-bold text-center`}
                                    />
                                    <input type="text"
                                        required
                                        maxLength={1}
                                        className={`${auths.form_control}  form-control bg-success text-light border-0 p-3 my-3 fs-4 fw-bold text-center`}
                                    />
                                </div>
                            </div>

                            <div className={`d-flex tw-justify-between align-items-center ${auths.flex}`}>
                                <button className={`${auths.log_google} tw-w-32 tw-text-lg tw-justify-center py-3 tw-font-semibold`}> Verify</button>
                                <div className={`${auths.policy}`}>

                                    <div>
                                        Didn&apos;t get the code?
                                        <a href="#"> Resend</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </main>
            </section>
        </>
    );
}

export default Otp;