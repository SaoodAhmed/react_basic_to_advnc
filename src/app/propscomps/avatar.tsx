

interface AvatarType{
    person:Person,
    size?:number
}

interface Person{
    name:string,
    imageId:string,
}


const Avatar = ({person, size = 100}:AvatarType)=>{
    const url = `https://i.imgur.com/${person.imageId}.jpg`
    const name = person.name

    return <img className=" rounded-full" src={url} alt={name} height={size} width={size}/>

}

export default Avatar;