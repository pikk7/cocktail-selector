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
    "orange",
    "syrup",
    "kahlua",
    "baileys",
    "grenadine",
    "maraschino liqueur",
    "campari",
    "prosecco",
    "blue curacao",
    "amaretto",
    "bourbon",
    "angostura bitters",
    "soda",
    "egg white",
    "sugar syrup",
    "ginger beer",
    "dark rum",
    "fresh mint",
    "maraschino cherry",
    "light rum",
    "orange bitters",
    "clove",
    "allspice",
    "star anise",
    "cinnamon",
    "nutmeg",
    "maple syrup",
    "grapefruit juice",
    "agave syrup",
    "cucumber",
    "sage",
    "thyme",
    "rosemary",
    "elderflower liqueur",
    "cachaca",
    "passion fruit",
    "caramel syrup",
    "apple cider",
    "apple juice",
    "cider",
    "sparkling water",
    "club soda",
    "cinnamon stick",
    "coriander",
    "cardamom",
    "clove syrup",
    "allspice dram",
    "nutmeg syrup",
    "honey syrup",
    "cherry brandy",
    "peach schnapps",
    "grenadine syrup",
    "coconut milk",
    "hibiscus syrup",
    "vanilla syrup",
    "ginger syrup",
    "pomegranate juice",
    "raspberry syrup",
    "orange flower water",
    "blueberry syrup",
    "strawberry syrup",
    "cassis liqueur",
    "crème de violette",
    "apricot brandy",
    "grape juice",
    "blackberry syrup",
    "pear brandy",
    "olive",
    "aperol",
    "orange juice",
  ];

  // Remove duplicates from the ingredientNames array
  const uniqueIngredientNames = Array.from(new Set(ingredientNames));

  // Create Ingredients
  const ingredients = await prisma.ingredient.createMany({
    data: uniqueIngredientNames.map((name) => ({ name })),
  });
  const coctailsData = [
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
      name: "Old Fashioned",
      instructions: "Stir all ingredients with ice and strain into a glass.",
    },
    {
      name: "Martini",
      instructions:
        "Stir gin and vermouth with ice and strain into a chilled glass, garnish with an olive.",
    },
    {
      name: "Caipirinha",
      instructions: "Muddle lime and sugar, add cachaca and ice, stir well.",
    },
    {
      name: "Negroni",
      instructions: "Stir all ingredients with ice and strain into a glass.",
    },

    {
      name: "French 75",
      instructions:
        "Shake gin, lemon juice, and syrup with ice, top with champagne.",
    },
    {
      name: "Paloma",
      instructions: "Mix tequila, lime juice, and grapefruit soda over ice.",
    },
    {
      name: "Mint Julep",
      instructions: "Muddle mint and syrup, add bourbon and ice, stir well.",
    },
    {
      name: "Aperol Spritz",
      instructions:
        "Mix Aperol, prosecco, and soda water over ice, garnish with orange slice.",
    },
    {
      name: "Tom Collins",
      instructions:
        "Shake gin, lemon juice, and syrup with ice, top with soda water.",
    },
    {
      name: "Moscow Mule",
      instructions:
        "Mix vodka, lime juice, and ginger beer over ice, serve in a copper mug.",
    },
    {
      name: "Long Island Iced Tea",
      instructions: "Shake all ingredients with ice, top with cola.",
    },
    {
      name: "Amaretto Sour",
      instructions:
        "Shake amaretto, lemon juice, and syrup with ice, strain into a glass.",
    },
    {
      name: "Hurricane",
      instructions: "Shake all ingredients with ice, serve over ice.",
    },
    {
      name: "Dark and Stormy",
      instructions: "Mix dark rum and ginger beer over ice, garnish with lime.",
    },
    {
      name: "Sazerac",
      instructions: "Stir all ingredients with ice and strain into a glass.",
    },
    {
      name: "Sidecar",
      instructions: "Shake all ingredients with ice and strain into a glass.",
    },
    {
      name: "Corpse Reviver",
      instructions: "Shake all ingredients with ice and strain into a glass.",
    },
    {
      name: "Boulevardier",
      instructions: "Stir all ingredients with ice and strain into a glass.",
    },
    {
      name: "Mai Tai",
      instructions: "Shake all ingredients with ice and strain into a glass.",
    },
    {
      name: "Gin Fizz",
      instructions:
        "Shake gin, lemon juice, syrup, and egg white with ice, top with soda.",
    },
    {
      name: "Gimlet",
      instructions: "Shake gin and lime juice with ice, strain into a glass.",
    },
    {
      name: "Vesper Martini",
      instructions:
        "Shake gin, vodka, and Lillet Blanc with ice, strain into a glass.",
    },
    {
      name: "Espresso Martini",
      instructions:
        "Shake vodka, coffee liqueur, and espresso with ice, strain into a glass.",
    },
    {
      name: "Aviation",
      instructions:
        "Shake gin, maraschino liqueur, and lemon juice with ice, strain into a glass.",
    },
    {
      name: "Ramos Gin Fizz",
      instructions:
        "Shake gin, lemon juice, syrup, egg white, and cream with ice, top with soda.",
    },
    {
      name: "Southside",
      instructions:
        "Shake gin, lime juice, mint, and syrup with ice, strain into a glass.",
    },
    {
      name: "Clover Club",
      instructions:
        "Shake gin, raspberry syrup, lemon juice, and egg white with ice, strain into a glass.",
    },
    {
      name: "Brandy Alexander",
      instructions:
        "Shake brandy, crème de cacao, and cream with ice, strain into a glass.",
    },
    {
      name: "Rusty Nail",
      instructions:
        "Mix scotch and Drambuie over ice, garnish with lemon twist.",
    },
    {
      name: "Penicillin",
      instructions:
        "Shake scotch, lemon juice, honey syrup, and ginger syrup with ice, strain into a glass.",
    },
    {
      name: "Bee's Knees",
      instructions:
        "Shake gin, lemon juice, and honey syrup with ice, strain into a glass.",
    },
    {
      name: "Hemingway Daiquiri",
      instructions:
        "Shake rum, maraschino liqueur, grapefruit juice, and lime juice with ice, strain into a glass.",
    },
    {
      name: "Painkiller",
      instructions:
        "Shake rum, pineapple juice, orange juice, and coconut cream with ice, strain into a glass.",
    },
    {
      name: "Fog Cutter",
      instructions:
        "Shake rum, gin, brandy, orgeat, and lemon juice with ice, strain into a glass.",
    },
    {
      name: "Singapore Sling",
      instructions:
        "Shake gin, cherry brandy, Cointreau, Benedictine, pineapple juice, lime juice, grenadine, and bitters with ice, strain into a glass.",
    },
    {
      name: "Planter's Punch",
      instructions:
        "Shake rum, lime juice, lemon juice, grenadine, and syrup with ice, strain into a glass.",
    },
    {
      name: "Zombie",
      instructions:
        "Shake rum, lime juice, pineapple juice, passion fruit syrup, and grenadine with ice, strain into a glass.",
    },
    {
      name: "Scorpion",
      instructions:
        "Shake rum, brandy, orange juice, lemon juice, and orgeat with ice, strain into a glass.",
    },
  ];

  const uniquecoctailsData = Array.from(new Set(coctailsData));

  // Create Cocktails
  const cocktails = await prisma.cocktail.createMany({
    data: uniquecoctailsData,
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

  const cocktailIngredientData = [
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
      quantity: "25ml",
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
      quantity: "50ml",
      ingredientId: ingredientMap.get("peach puree") ?? 0,
      cocktailId: cocktailMap.get("Bellini") ?? 0,
    },
    {
      quantity: "top up",
      ingredientId: ingredientMap.get("champagne") ?? 0,
      cocktailId: cocktailMap.get("Bellini") ?? 0,
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

    // Old Fashioned
    {
      quantity: "50ml",
      ingredientId: ingredientMap.get("whiskey") ?? 0,
      cocktailId: cocktailMap.get("Old Fashioned") ?? 0,
    },
    {
      quantity: "2 dashes",
      ingredientId: ingredientMap.get("bitters") ?? 0,
      cocktailId: cocktailMap.get("Old Fashioned") ?? 0,
    },
    {
      quantity: "1 twist",
      ingredientId: ingredientMap.get("orange twist") ?? 0,
      cocktailId: cocktailMap.get("Old Fashioned") ?? 0,
    },

    // Martini
    {
      quantity: "50ml",
      ingredientId: ingredientMap.get("gin") ?? 0,
      cocktailId: cocktailMap.get("Martini") ?? 0,
    },
    {
      quantity: "10ml",
      ingredientId: ingredientMap.get("vermouth") ?? 0,
      cocktailId: cocktailMap.get("Martini") ?? 0,
    },
    {
      quantity: "1",
      ingredientId: ingredientMap.get("olive") ?? 0,
      cocktailId: cocktailMap.get("Martini") ?? 0,
    },

    // Caipirinha
    {
      quantity: "50ml",
      ingredientId: ingredientMap.get("cachaca") ?? 0,
      cocktailId: cocktailMap.get("Caipirinha") ?? 0,
    },
    {
      quantity: "1",
      ingredientId: ingredientMap.get("lime") ?? 0,
      cocktailId: cocktailMap.get("Caipirinha") ?? 0,
    },
    {
      quantity: "2 tsp",
      ingredientId: ingredientMap.get("sugar") ?? 0,
      cocktailId: cocktailMap.get("Caipirinha") ?? 0,
    },

    // Negroni
    {
      quantity: "30ml",
      ingredientId: ingredientMap.get("gin") ?? 0,
      cocktailId: cocktailMap.get("Negroni") ?? 0,
    },
    {
      quantity: "30ml",
      ingredientId: ingredientMap.get("vermouth") ?? 0,
      cocktailId: cocktailMap.get("Negroni") ?? 0,
    },
    {
      quantity: "30ml",
      ingredientId: ingredientMap.get("campari") ?? 0,
      cocktailId: cocktailMap.get("Negroni") ?? 0,
    },

    // French 75
    {
      quantity: "30ml",
      ingredientId: ingredientMap.get("gin") ?? 0,
      cocktailId: cocktailMap.get("French 75") ?? 0,
    },
    {
      quantity: "15ml",
      ingredientId: ingredientMap.get("lemon") ?? 0,
      cocktailId: cocktailMap.get("French 75") ?? 0,
    },
    {
      quantity: "15ml",
      ingredientId: ingredientMap.get("syrup") ?? 0,
      cocktailId: cocktailMap.get("French 75") ?? 0,
    },
    {
      quantity: "top up",
      ingredientId: ingredientMap.get("champagne") ?? 0,
      cocktailId: cocktailMap.get("French 75") ?? 0,
    },

    // Paloma
    {
      quantity: "50ml",
      ingredientId: ingredientMap.get("tequila") ?? 0,
      cocktailId: cocktailMap.get("Paloma") ?? 0,
    },
    {
      quantity: "25ml",
      ingredientId: ingredientMap.get("lime") ?? 0,
      cocktailId: cocktailMap.get("Paloma") ?? 0,
    },
    {
      quantity: "top up",
      ingredientId: ingredientMap.get("grapefruit juice") ?? 0,
      cocktailId: cocktailMap.get("Paloma") ?? 0,
    },

    // Mint Julep
    {
      quantity: "50ml",
      ingredientId: ingredientMap.get("bourbon") ?? 0,
      cocktailId: cocktailMap.get("Mint Julep") ?? 0,
    },
    {
      quantity: "10 leaves",
      ingredientId: ingredientMap.get("mint") ?? 0,
      cocktailId: cocktailMap.get("Mint Julep") ?? 0,
    },
    {
      quantity: "2 tsp",
      ingredientId: ingredientMap.get("sugar") ?? 0,
      cocktailId: cocktailMap.get("Mint Julep") ?? 0,
    },

    // Aperol Spritz
    {
      quantity: "50ml",
      ingredientId: ingredientMap.get("aperol") ?? 0,
      cocktailId: cocktailMap.get("Aperol Spritz") ?? 0,
    },
    {
      quantity: "75ml",
      ingredientId: ingredientMap.get("prosecco") ?? 0,
      cocktailId: cocktailMap.get("Aperol Spritz") ?? 0,
    },
    {
      quantity: "top up",
      ingredientId: ingredientMap.get("soda water") ?? 0,
      cocktailId: cocktailMap.get("Aperol Spritz") ?? 0,
    },
    {
      quantity: "1 slice",
      ingredientId: ingredientMap.get("orange") ?? 0,
      cocktailId: cocktailMap.get("Aperol Spritz") ?? 0,
    },

    // Tom Collins
    {
      quantity: "50ml",
      ingredientId: ingredientMap.get("gin") ?? 0,
      cocktailId: cocktailMap.get("Tom Collins") ?? 0,
    },
    {
      quantity: "25ml",
      ingredientId: ingredientMap.get("lemon") ?? 0,
      cocktailId: cocktailMap.get("Tom Collins") ?? 0,
    },
    {
      quantity: "15ml",
      ingredientId: ingredientMap.get("syrup") ?? 0,
      cocktailId: cocktailMap.get("Tom Collins") ?? 0,
    },
    {
      quantity: "top up",
      ingredientId: ingredientMap.get("soda water") ?? 0,
      cocktailId: cocktailMap.get("Tom Collins") ?? 0,
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
  ];

  const uniquecocktailIngredientData = Array.from(
    new Set(cocktailIngredientData),
  );

  async function validateIngredientIds(cocktailIngredientData: any) {
    const invalidIds = [];
    for (const item of cocktailIngredientData) {
      const exists = await prisma.ingredient.findUnique({
        where: { id: item.ingredientId },
      });
      if (!exists) {
        invalidIds.push(item.cocktailId);
      }
    }
    return invalidIds;
  }

  const invalidIds = await validateIngredientIds(uniquecocktailIngredientData);
  if (invalidIds.length > 0) {
    console.error("Invalid ingredient IDs:", invalidIds);
    return; // Stop execution if there are invalid IDs
  }

  try {
    const result = await prisma.$transaction([
      prisma.cocktailIngredient.createMany({
        data: uniquecocktailIngredientData,
        skipDuplicates: true,
      }),
    ]);
    console.log("Seeding successful:", result);
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
