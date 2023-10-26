import Productorcard from "@/components/profile_card";

export default function productor_profile({params}) {
  
  const {id} = params

  return (
    <div className="mb-8">
      <Productorcard _id={id}/>
    </div>
  )
}