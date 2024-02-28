
function Cup({guest}:{guest:number}){
    return <h1>{`Tea cups for guests ${guest}`}</h1>
}


 



const Cups = () => {
    const cups:any[] = []

    for(let i = 1; i<=10; i++){
        cups.push(<Cup key={i} guest={i}/>)
    }


  return cups
}

export default Cups