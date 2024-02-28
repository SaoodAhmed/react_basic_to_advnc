type FoodRecipies = {
  id: string;
  name: string;
  ingredients: string[];
};

const recipies: FoodRecipies[] = [
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

const FoodRecipes = () => {
  return (
    <>
    {
        recipies.map((recipie:FoodRecipies)=>(
            <div>

                <h1>{recipie.name}</h1>
                {
                    recipie.ingredients.map((ingre:string)=>(
                        <li>
                            {ingre}
                        </li>
                    ))
                }
            </div>

            
        ))
    }
    </>
  )
};

export default FoodRecipes;
