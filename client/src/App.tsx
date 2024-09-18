import { useQuery } from '@tanstack/react-query';

function App() {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch('http://localhost:9000').then((res) => res.json()),
    });
    if (isPending) {
        return <p>Loading...</p>;
    }

    if (error instanceof Error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className="bg-gray-100 h-screen">
            <h1>Data from API:</h1>
            {data && (
                <>
                    <p className="text-3xl font-bold underline">
                        {data.indexTitle}
                    </p>
                    <p className="text-xl font-bold underline">{data.indexSubTitle}</p>
                </>
            )}
        </div>
    );
}

export default App;
