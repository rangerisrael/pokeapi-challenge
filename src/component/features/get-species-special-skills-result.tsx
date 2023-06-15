import { isEmpty, startCase } from 'lodash';
import React from 'react';
import PopupModal from '../common/Modal';
import PokeLogo from '../../assets/poke.png';
import Image from '../common/Image';
import Button from '../common/Button';
import { usePokeResultByItself } from '../common/utils/hooks/useGlobalState';
import { GetBaseStat } from '../common/types';

const SpecialSkillsAttributesValue = () => {
	const [result] = usePokeResultByItself();
	return (
		<div>
			{!isEmpty(result) && (
				<>
					<div className='flex flex-col items-center justify-center'>
						<Image src={PokeLogo} alt='' width={150} height={150} />
						<Button overrideClassName='mb-10 mt-0' spanText={'←'} btnText='Back' />
					</div>

					<div className='flex flex-col justify-center items-center mb-5'>
						<div className='p-5'>
							<a href='#'>
								<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
									{startCase(result?.species)} # {result?.id + 1}
								</h5>
							</a>
						</div>
						<div>
							<Image src={result?.src} className='rounded-t w-[100%] h-[150px]' alt='' />
						</div>
					</div>
					<div className=' w-[80%] mx-auto items-center '>
						<div className='grid grid-cols-2 gap-10 '>
							<p>Attributes</p>
							<p className='text-center'>Value</p>
						</div>
						{result?.stats?.map((value: GetBaseStat, i: number) => (
							<div className='grid grid-cols-2 gap-10 ' key={i}>
								<p>{startCase(value.stat.name)} &nbsp;</p>
								<p className='text-center'>{startCase(value.base_stat as unknown as string)} &nbsp;</p>
							</div>
						))}
					</div>

					<div className=' w-[80%] mx-auto items-center mt-5'>
						{result.type.map((value: { type: { name: string } }, i: number) => (
							<span
								className='bg-[#d1d5db] text-gray-800 text-xs font-medium mr-2 px-2.5 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300 text-center'
								key={i}
							>
								{value.type.name} &nbsp;
							</span>
						))}
					</div>
				</>
			)}
		</div>
	);
};

React.memo(SpecialSkillsAttributesValue);

const GetSpecialSkills = () => {
	return (
		<PopupModal>
			<SpecialSkillsAttributesValue />
		</PopupModal>
	);
};

export default GetSpecialSkills;
