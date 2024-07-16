import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const coctailRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), ingredients: z.string().min(1), instructions: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.cocktail.create({
        data: {
          name: input.name,
          instructions: input.instructions,
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.cocktail.findFirst({

    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.cocktail.findMany({
      include: {
        CocktailIngredient: { include: { Ingredient: true } }
      }
    });

  }),


  getCocktail: protectedProcedure


    .input(z.object({ name: z.string().min(1), ingredients: z.string().min(1), instructions: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      const cocktails = await ctx.db.cocktail.findMany({
        include: {
          CocktailIngredient: {
            include: {
              Ingredient: true,
            },
          },
        },
      });

      const matchedCocktails = cocktails.filter((cocktail) =>
        cocktail.CocktailIngredient.every((ci) =>
          input.ingredients.includes(ci.Ingredient.name)
        )
      );

      return matchedCocktails;
    }),

})

