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
        <div>
            <h1>Data from API:</h1>
            {data ? (
                <>
                    <p>{data.helloWorld}</p>
                    <p>{data.pElem}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
