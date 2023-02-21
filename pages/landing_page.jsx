import Navbar from "@/components/navbar";
import home from "@/styles/Home.module.css"
import Image from "next/image";
import dashboard from "@/public/dashboard.jpg"


function Landing_page() {
    return (
        <>
            <section className={`${home.home_bg}`}>
                <main className={home.overlay}>
                    <Navbar />
                    <main className="d-flex flex-column align-items-center p-4">
                        <div className="text-white">
                            <div className="d-flex gap-1 tw-justify-center align-items-center flex-wrap pb-3 pt-5 mt-2 ">
                                <span style={{color:"rgb(150,152,156)"}}>By</span>
                                <span >Mubarokah</span>
                                <div className="me-2 ms-1" style={{width:"4px", height:"4px", borderRadius:"100%", backgroundColor:"blue"}}> </div>
                                <span>2023-02-21</span>
                                <div className="me-2 ms-1" style={{width:"4px", height:"4px", borderRadius:"100%", backgroundColor:"blue"}}> </div>
                                <span>2 min read </span>
                            </div>
                            <h1 className="mb-5 pb-5">All of these special features come at an affordable price!</h1>
                        </div>
                        <div className={home.dashboard}>
                            <Image src={dashboard} width={600} alt="blog" />
                        </div>
                    </main>
                </main>
            </section>
        </>
    );
}

export default Landing_page;