import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
config(); // This loads the environment variables from the .env file
const prisma = new PrismaClient();

async function main() {
  // Create Ingredients
  const ingredients = await prisma.ingredient.createMany({
    data: [
      { name: "rum" },
      { name: "mint" },
      { name: "sugar" },
      { name: "lime" },
      { name: "soda water" },
      { name: "tequila" },
      { name: "triple sec" },
      { name: "salt" },
      { name: "vodka" },
      { name: "cranberry juice" },
      { name: "orange liqueur" },
      { name: "cola" },
      { name: "gin" },
      { name: "tonic water" },
      { name: "lemon" },
      { name: "simple syrup" },
      { name: "whiskey" },
      { name: "vermouth" },
      { name: "bitters" },
      { name: "orange twist" },
      { name: "pineapple juice" },
      { name: "coconut cream" },
      { name: "coffee liqueur" },
      { name: "cream" },
      { name: "kahlua" },
      { name: "baileys" },
      { name: "tomato juice" },
      { name: "worcestershire sauce" },
      { name: "tabasco" },
      { name: "celery" },
      { name: "black pepper" },
      { name: "celery salt" },
      { name: "grapefruit juice" },
      { name: "champagne" },
      { name: "prosecco" },
      { name: "apple juice" },
      { name: "cinnamon" },
      { name: "nutmeg" },
      { name: "coconut milk" },
      { name: "angostura bitters" },
      { name: "honey" },
      { name: "egg white" },
      { name: "maraschino cherry" },
      { name: "grenadine" },
      { name: "peach schnapps" },
      { name: "blue curacao" },
      { name: "orange juice" },
      { name: "sprite" },
      { name: "sour mix" },
      { name: "peach puree" },
      { name: "raspberry liqueur" },
    ],
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
        instructions: "Blend all ingredients with ice until smooth.",
      },
      {
        name: "White Russian",
        instructions: "Pour vodka and coffee liqueur over ice, top with cream.",
      },
      {
        name: "Bloody Mary",
        instructions:
          "Mix all ingredients and serve over ice, garnish with celery.",
      },
      {
        name: "Bellini",
        instructions: "Mix peach puree with champagne or prosecco.",
      },
      {
        name: "Mimosa",
        instructions: "Mix orange juice with champagne or prosecco.",
      },
      {
        name: "Daiquiri",
        instructions:
          "Shake rum, lime juice, and sugar with ice and strain into a glass.",
      },
      {
        name: "Mai Tai",
        instructions:
          "Shake all ingredients with ice and strain into a glass, garnish with mint.",
      },
      {
        name: "Mint Julep",
        instructions:
          "Muddle mint with sugar and water, add bourbon and ice, stir well.",
      },
      {
        name: "Tequila Sunrise",
        instructions:
          "Pour tequila and orange juice over ice, add grenadine slowly.",
      },
      {
        name: "Long Island Iced Tea",
        instructions: "Mix all ingredients with ice and top with cola.",
      },
      {
        name: "Tom Collins",
        instructions: "Mix gin, lemon juice, sugar, and soda water over ice.",
      },
      {
        name: "Negroni",
        instructions:
          "Mix gin, vermouth, and campari over ice, garnish with orange twist.",
      },
      {
        name: "Old Fashioned",
        instructions:
          "Muddle sugar with bitters and water, add whiskey and ice, garnish with orange twist.",
      },
      {
        name: "Martini",
        instructions:
          "Stir gin and vermouth with ice, strain into a glass, garnish with olive or lemon twist.",
      },
      {
        name: "Espresso Martini",
        instructions:
          "Shake vodka, coffee liqueur, and espresso with ice, strain into a glass.",
      },
      {
        name: "Aperol Spritz",
        instructions:
          "Mix Aperol, prosecco, and soda water over ice, garnish with orange slice.",
      },
      {
        name: "Caipirinha",
        instructions: "Muddle lime and sugar, add cachaça and ice, stir well.",
      },
      {
        name: "Paloma",
        instructions:
          "Mix tequila, grapefruit juice, lime juice, and soda water over ice.",
      },
      {
        name: "Pisco Sour",
        instructions:
          "Shake pisco, lemon juice, simple syrup, and egg white with ice, strain into a glass, add bitters.",
      },
      {
        name: "Singapore Sling",
        instructions: "Shake all ingredients with ice and strain into a glass.",
      },
      {
        name: "Cuba Libre",
        instructions: "Mix rum and cola with lime over ice.",
      },
      {
        name: "French 75",
        instructions:
          "Shake gin, lemon juice, and simple syrup with ice, strain into a glass, top with champagne.",
      },
      {
        name: "Irish Coffee",
        instructions: "Mix whiskey, coffee, sugar, and cream.",
      },
      {
        name: "Hurricane",
        instructions: "Mix all ingredients with ice and strain into a glass.",
      },
      {
        name: "Planter’s Punch",
        instructions: "Mix all ingredients with ice and strain into a glass.",
      },
      {
        name: "Moscow Mule",
        instructions:
          "Mix vodka, lime juice, and ginger beer over ice, garnish with lime.",
      },
      {
        name: "Sazerac",
        instructions:
          "Mix whiskey, absinthe, bitters, and sugar with ice, strain into a glass.",
      },
      {
        name: "Boulevardier",
        instructions:
          "Mix bourbon, vermouth, and campari over ice, garnish with orange twist.",
      },
      {
        name: "Sidecar",
        instructions:
          "Shake cognac, triple sec, and lemon juice with ice, strain into a glass.",
      },
      {
        name: "Vesper",
        instructions:
          "Shake gin, vodka, and Lillet Blanc with ice, strain into a glass.",
      },
      {
        name: "Brandy Alexander",
        instructions:
          "Shake brandy, creme de cacao, and cream with ice, strain into a glass.",
      },
      {
        name: "Gimlet",
        instructions: "Shake gin and lime juice with ice, strain into a glass.",
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
        quantity: "150ml",
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
        quantity: "1 stick",
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
        quantity: "25ml",
        ingredientId: ingredientMap.get("peach puree") ?? 0,
        cocktailId: cocktailMap.get("Bellini") ?? 0,
      },
      {
        quantity: "top up",
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
        quantity: "top up",
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
        ingredientId: ingredientMap.get("sugar") ?? 0,
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
        quantity: "10ml",
        ingredientId: ingredientMap.get("syrup") ?? 0,
        cocktailId: cocktailMap.get("Mai Tai") ?? 0,
      },
      {
        quantity: "top up",
        ingredientId: ingredientMap.get("soda water") ?? 0,
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
