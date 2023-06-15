import { Pagination } from "../common/types";


const CardPaginate = ({ onPrevious, onNext, length, start, end }: Pagination) => {


	return (
		<div className='flex flex-row gap-2 items-center justify-center mb-10'>
			<button
				disabled={end === 10}
				style={{
					cursor: end === 10 ? 'not-allowed' : 'pointer',
				}}
				onClick={onPrevious}
				className='bg-[#4c566a] hover:bg-white  text-white hover:text-[#4c566a] font-bold py-2 px-4 rounded'
			>
				<span className='text-lg'> ← </span>Previous
			</button>

			<span data-testid='results' className='mt-2'>
				Show results ({start + 1} - {end})
			</span>

			<button
				style={{
					cursor: end === length ? 'not-allowed' : 'pointer',
				}}
				disabled={end === length}
				onClick={onNext}
				className='bg-[#4c566a] hover:bg-white text-white hover:text-[#4c566a] font-bold py-2 px-4 rounded'
			>
				Next <span className='text-lg'> → </span>
			</button>
		</div>
	);
};

export default CardPaginate;
