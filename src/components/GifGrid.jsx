import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    console.log(images, isLoading);

    return (
        <>
        { isLoading && <h3>Cargando ...</h3> }
            <div className="card-grid" > {
                    images.map(( image ) => {
                        return (
                            <GifItem 
                            key={image.id}
                            {...image} />
                        )
                    })
                }
            </div>
        </>
    );
};
