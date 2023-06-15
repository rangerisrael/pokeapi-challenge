import React from 'react';
import DeepLinkLogo from '../../assets/deeplink.png';

const Header = () => {
	return (
		<div className='bg-gradient-to-r from-[#2c2954] from-10% via-[#130f40] via-30% to-[#1e1a49] to-90% p-5 text-white'>
			<div className='flex flex-col items-center py-1'>
				<img data-testid='src' src={DeepLinkLogo} alt='' />
				<h1>Deepink Ventures</h1>
				<h2 className='text-center'>Deep Ink Ventures Gmbh - Solmsstrave 11-10961 Berlin</h2>
			</div>
		</div>
	);
};

export default Header;
