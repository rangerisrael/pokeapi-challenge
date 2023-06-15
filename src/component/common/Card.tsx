import { startCase } from 'lodash';
import Image from './Image';
import {motion} from 'framer-motion';
import { CardType } from './types';

const CardSpecies = ({onClickHandler,item}:CardType) => {
  return (
		<div
			data-testid='card'
			onClick={() => onClickHandler(item)}
			key={item.id + 1}
			className='w-[100%] bg-[#EDEFF3] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  p-5'
		>
			<motion.div
				whileHover={{
					scale: 1.1,
					// boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px',
					marginTop: '-20px',
					transition: { duration: 0.2 },
					paddingBottom: '20px',
				}}
				className='flex justify-center items-center'
			>
				<Image data-testid='cardImg' src={item.src} className='rounded-t w-[150px] h-[150px]' alt='' />
			</motion.div>
			<div className='p-5'>
				<a href='#'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						{startCase(item.species)} # {item.id + 1}
					</h5>
				</a>

				<div className='my-5'>
					{item.type.map((value: { type: { name: string } }, i: number) => (
						<span
							
							className='bg-[#d1d5db] text-gray-800 text-xs font-medium mr-2  px-2.5 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300 text-center'
							key={i}
						>
							{value.type.name} &nbsp;
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default CardSpecies
