
type RecipieType = {
    id:string;
    name:string;
    ingredients:string[]
}



const RenderingListProp = ({id, name, ingredients}:RecipieType) => {
  return (
    <>
        <h1>{name}</h1>
        <ul>
            {
                ingredients.map((ingredient:string)=>{
                    return (
                        <li key={id}>
                            {ingredient}
                        </li>
                    )
                })
            }
        </ul>

    </>
  )
};

export default RenderingListProp;
