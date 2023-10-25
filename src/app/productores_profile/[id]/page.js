import Productorcard from "@/components/profile_card";

export default function productor_profile({params}) {
  
  const {id} = params

  return (
    <Productorcard _id={id}/>
  )
}