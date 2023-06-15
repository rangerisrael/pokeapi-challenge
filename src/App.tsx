import axios from 'axios';
import React, { useEffect } from 'react'
import { API_URL } from './component/common/constant';
import Header from './component/common/Header';

const App = () => {


useEffect(()=>{

		async function fetch() {
			const res = await axios.get(`${API_URL}/pokemon`);

			console.log(res.data.results)
		}

	fetch();

},[])


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