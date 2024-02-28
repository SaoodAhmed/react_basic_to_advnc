import { ReactNode } from "react";



type AvatarType = {
    person:Person,
    size ?: number | number
}




type Person = {
    name:string,
    imageId:string
}





const Card = (props:{children:ReactNode})=>{
    // console.log(props)
    return(

        <div className="p-10 bg-gray-700 max-w-md flex  mb-4 px-auto rounded-xl justify-center items-center">
            {props.children}
        </div>

    )
}

const AvatarCard = ({person, size = 100}:AvatarType)=>{
    const imgUrl = `https://i.imgur.com/${person.imageId}.jpg`
    const name = person.name;

    return (
        <Card>
            <img className="rounded-full" src={imgUrl} alt={name} height={size} width={size}/>
        </Card>
    )
}

export default AvatarCard;