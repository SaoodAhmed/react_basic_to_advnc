


const Recipe = ({drinkers}:{drinkers:number})=>{
    return (
        <ul>
            <li>Boil {drinkers} cups of water</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ul>
    )
}






const Tea = () => {
  return (
    <div>
        <h1>Special Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers = {2}/>
        <h2>For a Gathering</h2>
        <Recipe drinkers = {4}/>
    </div>
  )
}

export default Tea