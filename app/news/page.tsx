import { NewsCard, Container, BlurIn } from "@/components";
import { INews } from "@/lib/types";
import { getNews } from "@/lib/action";

export default async function News() {
    const news: INews[] = await getNews();

    return (
        <section className="text-gray-400 pb-10 shadow-inset-1 min-h-[80dvh]">
            <Container>
                <div className="mb-5">
                    <h1 className="text-3xl font-bold">News</h1>
                    <p>Today's top {news?.length} News Articles</p>
                </div>
                <BlurIn className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10">
                    {news?.map((newsItem) => (
                        <NewsCard news={newsItem} key={newsItem.id} />
                    ))}
                </BlurIn>
            </Container>
        </section>
    );
}
