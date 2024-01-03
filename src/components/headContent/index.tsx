import { Helmet } from "react-helmet";

export const HeadContent = (props: {
    title?: string;
    description?: string;
    link?: string;
}) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <link rel="canonical" href={props.link} />
        </Helmet>
    );
};
