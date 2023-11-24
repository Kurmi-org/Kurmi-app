import ProductorCard from "@/components/profile_card";

export default function productor_profile({params}) {
  
  const {id} = params

  return (
    <div className="mb-14">
      <ProductorCard _id={id}/>
    </div>
  )
}