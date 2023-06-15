import Header from './component/common/Header';
import usePokeApiHandler from './component/common/utils/hooks/usePokeApiHandler';
import CardPaginate from './component/features/pagination.component';
import PokeLogo from './assets/poke.png';
import Image from './component/common/Image';
import DisplaySpecies from './component/features/display-all-species.component';

const App = () => {

const { onPrevious, onNext, length, start, end } = usePokeApiHandler();



  return (
		<div style={{ display: 'grid', gridTemplateRows: '10vh calc(100vh - auto) 10vh', rowGap: '5rem' }}>
			<div>
				<Header />
			</div>
			<div>
				<div className='flex flex-col items-center justify-center'>
					<Image className='' src={PokeLogo} alt='Logo' width={150} height={150} />
					<CardPaginate start={start} end={end} onPrevious={onPrevious} onNext={onNext} length={length} />
				</div>
				<DisplaySpecies start={start} end={end} onClickHandler={()=> undefined} />
			</div>
			<div>
				<Header />
			</div>
		</div>
		
	);
}

export default App