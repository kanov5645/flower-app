import FlowerCard from "./FlowerCard";
import Loading from "../Loading";
import Error from "../Error";
import { useEffect, useState } from "react";

function FlowerList() {
    const [flowers, setFlowers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchFlowers() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65f6726f41d90c1c5e0ad471.mockapi.io/flower"
                );
                const data = await res.json();
                setFlowers(data);
            } catch (e) {
                console.error(e);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchFlowers();
    }, []);

    return ( 
        <section class="flowers-page">
            <div class="container">
                <h1 class="title">Choice your flowers</h1>
                <div class="row">
                    {isLoading ? (<Loading />) : (flowers.map((flower) => <FlowerCard flower={flower} key={flower.id} />))}
                
                </div>
                {isError && <Error />}
            </div>
        </section>
    );
}

export default FlowerList;