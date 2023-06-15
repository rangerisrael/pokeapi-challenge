import Header from './component/common/Header';
import usePokeApiHandler from './component/common/utils/hooks/usePokeApiHandler';
import CardPaginate from './component/features/pagination.component';
import PokeLogo from './assets/poke.png';
import Image from './component/common/Image';
import DisplaySpecies from './component/features/display-all-species.component';
import GetSpecialSkills from './component/features/get-species-special-skills-result';

const App = () => {

const { onPrevious, onNext,onClickHandler, length, start, end } = usePokeApiHandler();



  return (
		<div style={{ display: 'grid', gridTemplateRows: '10vh calc(100vh - auto) 10vh' }}>
			<div>
				<Header />
			</div>
			<div>
				<div className='flex flex-col items-center justify-center'>
					<Image className='' src={PokeLogo} alt='Logo' width={150} height={150} />
					<CardPaginate start={start} end={end} onPrevious={onPrevious} onNext={onNext} length={length} />
				</div>

				<DisplaySpecies start={start} end={end} onClickHandler={onClickHandler} />

				<div className='flex flex-row justify-center items-center'>
					<GetSpecialSkills />
				</div>
			</div>
			<div className='mt-[5rem]'>
				<Header />
			</div>
		</div>
	);
}

export default App