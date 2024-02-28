export const Person = (props:{name:string, city:string})=>{
    // console.log(props)
    // console.log(props.name)

    // Destructuring
    const {name,city} = props
    // console.log(name)
    return (
        <>
            <h1>Teacher Name</h1>
            <p>{props.name}</p>
            <h1>Teacher City</h1>
            <p>{props.city}</p>
        </>
    )
}

