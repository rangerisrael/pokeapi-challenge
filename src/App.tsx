import Header from './component/common/Header';
import usePokeApiHandler from './component/common/utils/hooks/usePokeApiHandler';
import CardPaginate from './component/features/pagination.component';

const App = () => {

const { onPrevious, onNext, length, start, end } = usePokeApiHandler();



  return (
		<div style={{ display: 'grid', gridTemplateRows: '10vh calc(100vh - 20vh) 10vh', rowGap: '5rem' }}>
			<div>
				<Header />
			</div>
			<div>
				<div className='flex flex-col items-center justify-center'>
					
					<CardPaginate start={start} end={end} onPrevious={onPrevious} onNext={onNext} length={length} />
				</div>

				
			</div>
			<div>
				<Header />
			</div>
		</div>
	);
}

export default App