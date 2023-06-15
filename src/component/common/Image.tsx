import { ImageType } from "./types/index";


const Image = ({ ...props }: ImageType) => {
	return <img {...props} />;
};

export default Image
