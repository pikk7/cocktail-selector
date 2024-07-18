import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
config(); // This loads the environment variables from the .env file
const prisma = new PrismaClient();

async function main() {
  // Clean the database
  await prisma.cocktailIngredient.deleteMany({});
  await prisma.cocktail.deleteMany({});
  await prisma.ingredient.deleteMany({});

  const ingredientNames = [
    "rum",
    "mint",
    "sugar",
    "lime",
    "soda water",
    "tequila",
    "triple sec",
    "salt",
    "vodka",
    "cranberry juice",
    "orange liqueur",
    "cola",
    "gin",
    "tonic water",
    "lemon",
    "simple syrup",
    "whiskey",
    "vermouth",
    "bitters",
    "orange twist",
    "pineapple juice",
    "coconut cream",
    "coffee liqueur",
    "cream",
    "tomato juice",
    "worcestershire sauce",
    "tabasco",
    "celery",
    "black pepper",
    "celery salt",
    "peach puree",
    "champagne",
    "orange juice",
    "syrup",
  ];

  // Remove duplicates from the ingredientNames array
  const uniqueIngredientNames = Array.from(new Set(ingredientNames));

  // Create Ingredients
  const ingredients = await prisma.ingredient.createMany({
    data: uniqueIngredientNames.map((name) => ({ name })),
  });

  // Create Cocktails
  const cocktails = await prisma.cocktail.createMany({
    data: [
      {
        name: "Mojito",
        instructions: "Mix all ingredients and serve over ice.",
      },
      {
        name: "Margarita",
        instructions:
          "Shake all ingredients with ice and strain into a salted rim glass.",
      },
      {
        name: "Cosmopolitan",
        instructions:
          "Shake all ingredients with ice and strain into a chilled glass.",
      },
      {
        name: "Rum and Coke",
        instructions: "Mix rum and cola over ice and serve.",
      },
      {
        name: "Gin and Tonic",
        instructions: "Mix gin and tonic water over ice, garnish with lemon.",
      },
      {
        name: "Whiskey Sour",
        instructions:
          "Shake whiskey, lemon juice, and simple syrup with ice and strain into a glass.",
      },
      {
        name: "Manhattan",
        instructions:
          "Stir whiskey, vermouth, and bitters with ice and strain into a glass, garnish with an orange twist.",
      },
      {
        name: "Piña Colada",
        instructions: "Blend all ingredients with ice until smooth and serve.",
      },
      {
        name: "White Russian",
        instructions: "Mix all ingredients and serve over ice.",
      },
      {
        name: "Bloody Mary",
        instructions: "Mix all ingredients and serve over ice.",
      },
      {
        name: "Bellini",
        instructions: "Mix all ingredients and serve chilled.",
      },
      {
        name: "Mimosa",
        instructions: "Mix all ingredients and serve chilled.",
      },
      {
        name: "Daiquiri",
        instructions:
          "Shake all ingredients with ice and strain into a chilled glass.",
      },
      {
        name: "Mai Tai",
        instructions:
          "Shake all ingredients with ice and strain into a chilled glass.",
      },
    ],
  });

  // Fetch the created ingredients and cocktails
  const ingredientList = await prisma.ingredient.findMany();
  const cocktailList = await prisma.cocktail.findMany();

  const ingredientMap = new Map(
    ingredientList.map((ingredient) => [ingredient.name, ingredient.id]),
  );
  const cocktailMap = new Map(
    cocktailList.map((cocktail) => [cocktail.name, cocktail.id]),
  );

  // Create CocktailIngredients
  await prisma.cocktailIngredient.createMany({
    data: [
      // Mojito
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("rum") ?? 0,
        cocktailId: cocktailMap.get("Mojito") ?? 0,
      },
      {
        quantity: "10 leaves",
        ingredientId: ingredientMap.get("mint") ?? 0,
        cocktailId: cocktailMap.get("Mojito") ?? 0,
      },
      {
        quantity: "2 tsp",
        ingredientId: ingredientMap.get("sugar") ?? 0,
        cocktailId: cocktailMap.get("Mojito") ?? 0,
      },
      {
        quantity: "1",
        ingredientId: ingredientMap.get("lime") ?? 0,
        cocktailId: cocktailMap.get("Mojito") ?? 0,
      },
      {
        quantity: "top up",
        ingredientId: ingredientMap.get("soda water") ?? 0,
        cocktailId: cocktailMap.get("Mojito") ?? 0,
      },

      // Margarita
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("tequila") ?? 0,
        cocktailId: cocktailMap.get("Margarita") ?? 0,
      },
      {
        quantity: "1",
        ingredientId: ingredientMap.get("lime") ?? 0,
        cocktailId: cocktailMap.get("Margarita") ?? 0,
      },
      {
        quantity: "25ml",
        ingredientId: ingredientMap.get("triple sec") ?? 0,
        cocktailId: cocktailMap.get("Margarita") ?? 0,
      },
      {
        quantity: "pinch",
        ingredientId: ingredientMap.get("salt") ?? 0,
        cocktailId: cocktailMap.get("Margarita") ?? 0,
      },

      // Cosmopolitan
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("vodka") ?? 0,
        cocktailId: cocktailMap.get("Cosmopolitan") ?? 0,
      },
      {
        quantity: "25ml",
        ingredientId: ingredientMap.get("cranberry juice") ?? 0,
        cocktailId: cocktailMap.get("Cosmopolitan") ?? 0,
      },
      {
        quantity: "15ml",
        ingredientId: ingredientMap.get("lime") ?? 0,
        cocktailId: cocktailMap.get("Cosmopolitan") ?? 0,
      },
      {
        quantity: "15ml",
        ingredientId: ingredientMap.get("orange liqueur") ?? 0,
        cocktailId: cocktailMap.get("Cosmopolitan") ?? 0,
      },

      // Rum and Coke
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("rum") ?? 0,
        cocktailId: cocktailMap.get("Rum and Coke") ?? 0,
      },
      {
        quantity: "top up",
        ingredientId: ingredientMap.get("cola") ?? 0,
        cocktailId: cocktailMap.get("Rum and Coke") ?? 0,
      },

      // Gin and Tonic
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("gin") ?? 0,
        cocktailId: cocktailMap.get("Gin and Tonic") ?? 0,
      },
      {
        quantity: "top up",
        ingredientId: ingredientMap.get("tonic water") ?? 0,
        cocktailId: cocktailMap.get("Gin and Tonic") ?? 0,
      },
      {
        quantity: "1 slice",
        ingredientId: ingredientMap.get("lemon") ?? 0,
        cocktailId: cocktailMap.get("Gin and Tonic") ?? 0,
      },

      // Whiskey Sour
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("whiskey") ?? 0,
        cocktailId: cocktailMap.get("Whiskey Sour") ?? 0,
      },
      {
        quantity: "25ml",
        ingredientId: ingredientMap.get("lemon") ?? 0,
        cocktailId: cocktailMap.get("Whiskey Sour") ?? 0,
      },
      {
        quantity: "15ml",
        ingredientId: ingredientMap.get("simple syrup") ?? 0,
        cocktailId: cocktailMap.get("Whiskey Sour") ?? 0,
      },

      // Manhattan
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("whiskey") ?? 0,
        cocktailId: cocktailMap.get("Manhattan") ?? 0,
      },
      {
        quantity: "25ml",
        ingredientId: ingredientMap.get("vermouth") ?? 0,
        cocktailId: cocktailMap.get("Manhattan") ?? 0,
      },
      {
        quantity: "2 dashes",
        ingredientId: ingredientMap.get("bitters") ?? 0,
        cocktailId: cocktailMap.get("Manhattan") ?? 0,
      },
      {
        quantity: "1 twist",
        ingredientId: ingredientMap.get("orange twist") ?? 0,
        cocktailId: cocktailMap.get("Manhattan") ?? 0,
      },

      // Piña Colada
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("rum") ?? 0,
        cocktailId: cocktailMap.get("Piña Colada") ?? 0,
      },
      {
        quantity: "100ml",
        ingredientId: ingredientMap.get("pineapple juice") ?? 0,
        cocktailId: cocktailMap.get("Piña Colada") ?? 0,
      },
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("coconut cream") ?? 0,
        cocktailId: cocktailMap.get("Piña Colada") ?? 0,
      },

      // White Russian
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("vodka") ?? 0,
        cocktailId: cocktailMap.get("White Russian") ?? 0,
      },
      {
        quantity: "25ml",
        ingredientId: ingredientMap.get("coffee liqueur") ?? 0,
        cocktailId: cocktailMap.get("White Russian") ?? 0,
      },
      {
        quantity: "top up",
        ingredientId: ingredientMap.get("cream") ?? 0,
        cocktailId: cocktailMap.get("White Russian") ?? 0,
      },

      // Bloody Mary
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("vodka") ?? 0,
        cocktailId: cocktailMap.get("Bloody Mary") ?? 0,
      },
      {
        quantity: "100ml",
        ingredientId: ingredientMap.get("tomato juice") ?? 0,
        cocktailId: cocktailMap.get("Bloody Mary") ?? 0,
      },
      {
        quantity: "2 dashes",
        ingredientId: ingredientMap.get("worcestershire sauce") ?? 0,
        cocktailId: cocktailMap.get("Bloody Mary") ?? 0,
      },
      {
        quantity: "2 dashes",
        ingredientId: ingredientMap.get("tabasco") ?? 0,
        cocktailId: cocktailMap.get("Bloody Mary") ?? 0,
      },
      {
        quantity: "pinch",
        ingredientId: ingredientMap.get("celery") ?? 0,
        cocktailId: cocktailMap.get("Bloody Mary") ?? 0,
      },
      {
        quantity: "pinch",
        ingredientId: ingredientMap.get("black pepper") ?? 0,
        cocktailId: cocktailMap.get("Bloody Mary") ?? 0,
      },
      {
        quantity: "pinch",
        ingredientId: ingredientMap.get("celery salt") ?? 0,
        cocktailId: cocktailMap.get("Bloody Mary") ?? 0,
      },

      // Bellini
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("peach puree") ?? 0,
        cocktailId: cocktailMap.get("Bellini") ?? 0,
      },
      {
        quantity: "100ml",
        ingredientId: ingredientMap.get("champagne") ?? 0,
        cocktailId: cocktailMap.get("Bellini") ?? 0,
      },

      // Mimosa
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("orange juice") ?? 0,
        cocktailId: cocktailMap.get("Mimosa") ?? 0,
      },
      {
        quantity: "100ml",
        ingredientId: ingredientMap.get("champagne") ?? 0,
        cocktailId: cocktailMap.get("Mimosa") ?? 0,
      },

      // Daiquiri
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("rum") ?? 0,
        cocktailId: cocktailMap.get("Daiquiri") ?? 0,
      },
      {
        quantity: "25ml",
        ingredientId: ingredientMap.get("lime") ?? 0,
        cocktailId: cocktailMap.get("Daiquiri") ?? 0,
      },
      {
        quantity: "15ml",
        ingredientId: ingredientMap.get("simple syrup") ?? 0,
        cocktailId: cocktailMap.get("Daiquiri") ?? 0,
      },

      // Mai Tai
      {
        quantity: "50ml",
        ingredientId: ingredientMap.get("rum") ?? 0,
        cocktailId: cocktailMap.get("Mai Tai") ?? 0,
      },
      {
        quantity: "25ml",
        ingredientId: ingredientMap.get("lime") ?? 0,
        cocktailId: cocktailMap.get("Mai Tai") ?? 0,
      },
      {
        quantity: "15ml",
        ingredientId: ingredientMap.get("orange liqueur") ?? 0,
        cocktailId: cocktailMap.get("Mai Tai") ?? 0,
      },
      {
        quantity: "15ml",
        ingredientId: ingredientMap.get("simple syrup") ?? 0,
        cocktailId: cocktailMap.get("Mai Tai") ?? 0,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
