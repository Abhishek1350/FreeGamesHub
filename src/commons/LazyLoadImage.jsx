import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoad = ({ src, alt, ...props }) => {
	return (
		<LazyLoadImage
			src={src}
			alt={alt}
			effect="blur"
			{...props}
		/>
	);
};

export default LazyLoad;