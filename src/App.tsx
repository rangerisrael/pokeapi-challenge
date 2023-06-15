import React from 'react'
import Header from './component/common/Header';

const App = () => {
  return (
		<div style={{ display: 'grid', gridTemplateRows: '10vh calc(100vh - 20vh) 10vh', rowGap: '5rem' }}>
			<div>
				<Header />
			</div>
			<div>
				Poke api
				card contetn here
			</div>
			<div>
				<Header />
			</div>
		</div>
	);
}

export default App