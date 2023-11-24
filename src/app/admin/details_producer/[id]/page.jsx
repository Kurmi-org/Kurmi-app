import DetailsProducer from "@/components/DetailsProducer"
import { Unauthorized } from "@/app/not-found";

export default function DetailsProducerPage({ params }) {
    const {id} = params;
    return (
        <div>
            <DetailsProducer _id={id} />
        </div> 
    );
}


