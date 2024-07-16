import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
//sajt

import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { PrismaClient } from '@prisma/client';
import React from 'react';

const prisma = new PrismaClient();

type Ingredient = {
  id: number;
  name: string;
};

type CocktailIngredient = {
  id: number;
  quantity: string;
  ingredient: Ingredient;
};

type Cocktail = {
  id: number;
  name: string;
  instructions: string;
  ingredients: CocktailIngredient[];
};

type HomeProps = {
  cocktails: Cocktail[];
};

const Home: React.FC<HomeProps> = async () => {
  const cocktails = await api.cocktail.getAll();
  return (
    <div>
      <h1>Cocktail List</h1>
      {cocktails && cocktails.map((cocktail) => (
        <div key={cocktail.id}>
          <h2>{cocktail.name}</h2>
          <p>{cocktail.instructions}</p>
          <ul>
            {cocktail.CocktailIngredient.map((ci) => (
              <li key={ci.id}>
                {ci.quantity} of {ci.Ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};



export default Home;
