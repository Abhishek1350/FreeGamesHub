import { HeadContent } from "../../components";
import { useGetNewsQuery } from "../../services";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

export const SingleNews = () => {
    const { data } = useGetNewsQuery();
    const { newsId } = useParams<{ newsId: string }>();

    const news = useMemo(() => {
        if (data) {
            return data.find((n) => n.id === Number(newsId));
        }
    }, [data, newsId]);

    console.log(news)

    return (
        <>
            <HeadContent
                title={news?.title}
                description={news?.short_description}
            />
            <section className="text-gray-400 body-font py-10 shadow-inset-1 min-h-[80dvh]">
                <div className="container px-5 py-24 mx-auto ">{news?.title}</div>
            </section>
        </>
    );
};
