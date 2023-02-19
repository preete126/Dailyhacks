import Default from "@/components/auth_default";
import auths from "@/styles/auth.module.css"
import { useRouter } from "next/router";



function New_code() {

    const navigate = useRouter()


    const verify = (ev)=>{
        ev.preventDefault();
        // navigate.push("/auth/otp")
    }


    return (
        <>
            <section className="d-flex flex-column flex-md-row" style={{ height: "100vh" }}>
                <Default data={"We care about your account security."} />
                <main className="bg-dark d-flex align-items-center tw-justify-center text-white  p-3 p-md-0" style={{ width: "100%" }}>
                    <div style={{ width: "450px" }}>

                    <h5 className="fs-2 fw-bold">Reset account password</h5>
                    <div className="text-light  my-5" style={{ fontSize: "17px" }}> Enter a new password for hello@gmail.com </div>
                    <form action="" onSubmit={verify}>
                        <div className="form-floating mb-4">
                            <input
                                type="password"
                                required
                               className={`${auths.form_control2}  form-control bg-success text-light border-0 p-3 my-3`}
                                id="floatingPassword"
                               placeholder="floatingPassword"
                               
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                required
                               className={`${auths.form_control2}  form-control bg-success text-light border-0 p-3 my-3`}
                                id="floatingPassword"
                                placeholder="floatingPassword"
                               
                            />
                            <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>
                        <button type="submit" className={`my-4 p-3 w-50 rounded d-block fs-5 ${auths.log_google}`}>
                           Reset Password
                        </button>
                    </form>
                    </div>

                </main>
            </section>
        </>
    );
}

export default New_code;