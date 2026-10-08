
import { Suspense } from "react";
import { io } from "next/cache";
import Image from "next/image";
import Navbar from "../components/Navbar"

const CurrentDate = async () => {
    await io();
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return <p>{date}</p>;
};

const Header = () => {
    return (
        <div>
            <div className="flex relative mx-auto max-w-7xl justify-center items-center">
                <div className="flex items-center gap-0.5 p-4">
                    <Image height={50} width={50} src="/logo.webp" alt="logo" priority />
                    <div>
                        <h2>Bangla News 24</h2>
                        <Suspense fallback={<p aria-hidden="true">&nbsp;</p>}>
                            <CurrentDate />
                        </Suspense>
                    </div>
                </div>
                <div className="absolute right-4 top-4">
                    <button className="btn">সাইন ইন</button>
                    <button className="btn btn-error">সাইন আপ</button>
                </div>
            </div>
            <div>
                <Suspense fallback={<p aria-hidden="true">&nbsp;</p>}>
                    <Navbar />
                </Suspense>
            </div>
        </div>
    );
};

export default Header;