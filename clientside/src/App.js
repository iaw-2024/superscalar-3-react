import { useEffect, useState } from 'react';

function TableHeader( {rowKeys} ) {
	return ( <thead><tr> {
			rowKeys.map( key => <td><h3>{key}</h3></td> )
		} </tr></thead> );
}

function DataRow({row}) {
	const dataKeys = Object.keys(row);
	return (<tr> {dataKeys.map(key => <td>{row[key]}</td>) } </tr>);
}

function DataTable() {
	const [data, setData] = useState([]);

	useEffect(() => {
    	fetch("http://localhost:3001/datos")
    		.then(response => response.json())
    		.then(json_data => {
    			setData(json_data.productos);
    		} );
	}, []);

	// fallback
	if (data.length === 0) {
		return (<table></table>);
	}

	const someRow = data[0];

	return (
		<table className="data">
			<TableHeader rowKeys={Object.keys(someRow)} />
			<tbody>
				{data.map(r => <DataRow row={r}/>)}
			</tbody>
		 </table>
	);
}

function App() {
  return (
    <main className="App">
     	<DataTable />
    </main>
  );
}

export default App;
