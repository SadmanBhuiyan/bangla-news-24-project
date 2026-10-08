import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface News {
    id: string
    title: string
}
const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const news: News[] = data.data

    return (
        <div>
            <div className="flex justify-between max-w-7xl mx-auto">
                <div className="bg-red-800 text-white px-5 py-1 font-bold">সর্বশেষ</div>

                <MarqueeText direction="right" duration={10} className="bg-red-700 text-white py-1">
                    {news.map((n: { id: string | number; title: string }) => <span key={n.id}><span>{n.title}</span><span className='mx-2'>•</span></span>)}
                    {news.map((n: { id: string | number; title: string }) => <span key={n.id}><span>{n.title}</span><span className='mx-2'>•</span></span>)}
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;