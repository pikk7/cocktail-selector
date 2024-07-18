import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const cocktailRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        ingredients: z.string().min(1),
        instructions: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.cocktail.create({
        data: {
          name: input.name,
          instructions: input.instructions,
        },
      });
    }),


  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.cocktail.findMany({
      include: {
        cocktailIngredient: { include: { ingredient: true } },
      },
    });
  }),

  getCocktailsStrictly: publicProcedure
    .input(
      z.object({
        ingredients: z.array(z.string()).min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      try {
        const cocktails = await ctx.db.cocktail.findMany({
          include: {
            cocktailIngredient: {
              include: {
                ingredient: true,
              },
            },
          },
        });

        const matchedCocktails = cocktails.filter((cocktail) =>
          cocktail.cocktailIngredient.every((ci) =>
            input.ingredients.includes(ci.ingredient.name),
          ),
        );

        return matchedCocktails;
      } catch {
        return [];
      }
    }),

  getCocktailsPartly: publicProcedure
    .input(
      z.object({
        ingredients: z.array(z.string()).min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      try{
      const cocktails = await ctx.db.cocktail.findMany({
        include: {
          cocktailIngredient: {
            include: {
              ingredient: true,
            },
          },
        },
      });

      const matchedCocktails = cocktails.filter((cocktail) =>
        cocktail.cocktailIngredient.some((ci) =>
          input.ingredients.includes(ci.ingredient.name),
        ),
      );

      return matchedCocktails;
    } catch {
      return [];
    }
    }),
});
