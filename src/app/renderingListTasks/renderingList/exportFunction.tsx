import RenderingListProp from "./rendderingListProp";



type RecipieType = {
    id:string;
    name:string;
    ingredients:string[]
}



const recipies:RecipieType[] = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple",
      ],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
    },
  ];


  
  const ExportFunction = () => {
    return (
      <><h1>Recipe</h1>
        {
            recipies.map((recipe:RecipieType)=>(
                //<RenderingListProp id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}/>
                <RenderingListProp {...recipe}/>
            ))
        }
      </>
    )
  }
  
  export default ExportFunction