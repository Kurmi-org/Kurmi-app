import DetailsProduct from "@/components/DetailsProduct"

export default function DetailsProducerPage({ params }) {
  const { id } = params;

  return (
    <div>
      <DetailsProduct _id={id} />
    </div> 
  );
}