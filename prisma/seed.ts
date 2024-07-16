import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';
config(); // This loads the environment variables from the .env file
const prisma = new PrismaClient();

async function main() {
    // Create Ingredients
    const ingredients = await prisma.ingredient.createMany({
        data: [
            { name: 'rum' },
            { name: 'mint' },
            { name: 'sugar' },
            { name: 'lime' },
            { name: 'soda water' },
            { name: 'tequila' },
            { name: 'triple sec' },
            { name: 'salt' },
            { name: 'vodka' },
            { name: 'cranberry juice' },
            { name: 'orange liqueur' },
            { name: 'cola' },
            { name: 'gin' },
            { name: 'tonic water' },
            { name: 'lemon' },
            { name: 'simple syrup' },
            { name: 'whiskey' },
            { name: 'vermouth' },
            { name: 'bitters' },
            { name: 'orange twist' },
        ],
    });

    // Create Cocktails
    const cocktails = await prisma.cocktail.createMany({
        data: [
            { name: 'Mojito', instructions: 'Mix all ingredients and serve over ice.' },
            { name: 'Margarita', instructions: 'Shake all ingredients with ice and strain into a salted rim glass.' },
            { name: 'Cosmopolitan', instructions: 'Shake all ingredients with ice and strain into a chilled glass.' },
            { name: 'Rum and Coke', instructions: 'Mix rum and cola over ice and serve.' },
            { name: 'Gin and Tonic', instructions: 'Mix gin and tonic water over ice, garnish with lemon.' },
            { name: 'Whiskey Sour', instructions: 'Shake whiskey, lemon juice, and simple syrup with ice and strain into a glass.' },
            { name: 'Manhattan', instructions: 'Stir whiskey, vermouth, and bitters with ice and strain into a glass, garnish with an orange twist.' },
        ],
    });

    // Fetch the created ingredients and cocktails
    const ingredientList = await prisma.ingredient.findMany();
    const cocktailList = await prisma.cocktail.findMany();

    const ingredientMap = new Map(ingredientList.map((ingredient) => [ingredient.name, ingredient.id]));
    const cocktailMap = new Map(cocktailList.map((cocktail) => [cocktail.name, cocktail.id]));

    // Create CocktailIngredients
    await prisma.cocktailIngredient.createMany({
        data: [
            // Mojito
            { quantity: '50ml', ingredientId: ingredientMap.get('rum') ?? 0, cocktailId: cocktailMap.get('Mojito') ?? 0 },
            { quantity: '10 leaves', ingredientId: ingredientMap.get('mint') ?? 0, cocktailId: cocktailMap.get('Mojito') ?? 0 },
            { quantity: '2 tsp', ingredientId: ingredientMap.get('sugar') ?? 0, cocktailId: cocktailMap.get('Mojito') ?? 0 },
            { quantity: '1', ingredientId: ingredientMap.get('lime') ?? 0, cocktailId: cocktailMap.get('Mojito') ?? 0 },
            { quantity: 'top up', ingredientId: ingredientMap.get('soda water') ?? 0, cocktailId: cocktailMap.get('Mojito') ?? 0 },

            // Margarita
            { quantity: '50ml', ingredientId: ingredientMap.get('tequila') ?? 0, cocktailId: cocktailMap.get('Margarita') ?? 0 },
            { quantity: '1', ingredientId: ingredientMap.get('lime') ?? 0, cocktailId: cocktailMap.get('Margarita') ?? 0 },
            { quantity: '25ml', ingredientId: ingredientMap.get('triple sec') ?? 0, cocktailId: cocktailMap.get('Margarita') ?? 0 },
            { quantity: 'pinch', ingredientId: ingredientMap.get('salt') ?? 0, cocktailId: cocktailMap.get('Margarita') ?? 0 },

            // Cosmopolitan
            { quantity: '50ml', ingredientId: ingredientMap.get('vodka') ?? 0, cocktailId: cocktailMap.get('Cosmopolitan') ?? 0 },
            { quantity: '25ml', ingredientId: ingredientMap.get('cranberry juice') ?? 0, cocktailId: cocktailMap.get('Cosmopolitan') ?? 0 },
            { quantity: '15ml', ingredientId: ingredientMap.get('lime') ?? 0, cocktailId: cocktailMap.get('Cosmopolitan') ?? 0 },
            { quantity: '15ml', ingredientId: ingredientMap.get('orange liqueur') ?? 0, cocktailId: cocktailMap.get('Cosmopolitan') ?? 0 },

            // Rum and Coke
            { quantity: '50ml', ingredientId: ingredientMap.get('rum') ?? 0, cocktailId: cocktailMap.get('Rum and Coke') ?? 0 },
            { quantity: 'top up', ingredientId: ingredientMap.get('cola') ?? 0, cocktailId: cocktailMap.get('Rum and Coke') ?? 0 },

            // Gin and Tonic
            { quantity: '50ml', ingredientId: ingredientMap.get('gin') ?? 0, cocktailId: cocktailMap.get('Gin and Tonic') ?? 0 },
            { quantity: 'top up', ingredientId: ingredientMap.get('tonic water') ?? 0, cocktailId: cocktailMap.get('Gin and Tonic') ?? 0 },
            { quantity: '1 slice', ingredientId: ingredientMap.get('lemon') ?? 0, cocktailId: cocktailMap.get('Gin and Tonic') ?? 0 },

            // Whiskey Sour
            { quantity: '50ml', ingredientId: ingredientMap.get('whiskey') ?? 0, cocktailId: cocktailMap.get('Whiskey Sour') ?? 0 },
            { quantity: '25ml', ingredientId: ingredientMap.get('lemon') ?? 0, cocktailId: cocktailMap.get('Whiskey Sour') ?? 0 },
            { quantity: '15ml', ingredientId: ingredientMap.get('simple syrup') ?? 0, cocktailId: cocktailMap.get('Whiskey Sour') ?? 0 },

            // Manhattan
            { quantity: '50ml', ingredientId: ingredientMap.get('whiskey') ?? 0, cocktailId: cocktailMap.get('Manhattan') ?? 0 },
            { quantity: '25ml', ingredientId: ingredientMap.get('vermouth') ?? 0, cocktailId: cocktailMap.get('Manhattan') ?? 0 },
            { quantity: '2 dashes', ingredientId: ingredientMap.get('bitters') ?? 0, cocktailId: cocktailMap.get('Manhattan') ?? 0 },
            { quantity: '1 twist', ingredientId: ingredientMap.get('orange twist') ?? 0, cocktailId: cocktailMap.get('Manhattan') ?? 0 },
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
