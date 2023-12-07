import { Helmet } from "react-helmet";

export const HeadContent = (props: {
    title?: string;
    description?: string;
}) => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    );
};
