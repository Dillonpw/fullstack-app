import { useState, useEffect } from 'react';


interface ApiResponse {
    helloWorld: string;
    pElem: string;
}

function App() {
    const [data, setData] = useState<ApiResponse | null>(null);

    useEffect(() => {
        fetch('http://localhost:9000/')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json() as Promise<ApiResponse>;
            })
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='bg-gray-100 h-screen'>
            <h1>Data from API:</h1>
            {data ? (
                <>
                    <p className="text-3xl font-bold underline">{data.helloWorld}</p>
                    <p className="text-xl font-bold underline">{data.pElem}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
