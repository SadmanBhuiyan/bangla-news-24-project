import { Suspense } from "react";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>শিরোনাম লোড হচ্ছে...</p>}>
        <Marquee />
      </Suspense>
    </div>
  );
}
