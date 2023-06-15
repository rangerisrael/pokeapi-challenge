import React from 'react'
import { ImageType } from '../types';

const Image = ({ ...props }: ImageType) => {
	return <img {...props} />;
};

export default Image
