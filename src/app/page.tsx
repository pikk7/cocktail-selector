"use client";
import { api } from "~/trpc/react";

import { useState } from "react";
import React from "react";

export default function Home() {
  const [renderState, setRenderState] = useState("home");
  const [ingredients, setIngredients] = useState("");
  const [cocktails, setCocktails] = useState<any[]>([]);
  const cocktailQueryStrict = api.cocktail.getCocktailsStrictly.useQuery(
    { ingredients: ingredients.split(",").map((ing) => ing.trim()) },
    {
      enabled: false,
    },
  );

  const cocktailQueryPartly = api.cocktail.getCocktailsPartly.useQuery(
    { ingredients: ingredients.split(",").map((ing) => ing.trim()) },
    {
      enabled: false,
    },
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredients(e.target.value);
  };

  const handleStrict = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cocktailQueryStrict.refetch();
    setRenderState("Strict");
    setCocktails(cocktailQueryStrict.data || []);
  };

  const handlePartly = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cocktailQueryPartly.refetch();
    setRenderState("Partly");
    setCocktails(cocktailQueryPartly.data || []);
  };

  const renderCocktails = (cocktails: any) => {
    if (renderState === "home") {
      return <></>;
    }
    return (
      <>
        <h2 className="mb-4 text-2xl">{renderState} Matches</h2>
        {cocktails.length === 0 && <p>No cocktails found</p>}
        <ul>
          {cocktails.map((cocktail: any) => (
            <li
              key={cocktail.id}
              className="mb-6 rounded border border-gray-200 p-4"
            >
              <h2 className="mb-2 text-2xl text-blue-600">{cocktail.name}</h2>
              <p className="mb-2">{cocktail.instructions}</p>
              <ul className="list-disc pl-5">
                {cocktail.cocktailIngredient.map((ci: any) => (
                  <li key={ci.id}>
                    {ci.quantity} {ci.ingredient.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="mx-auto max-w-2xl p-6 font-sans">
      <h1 className="mb-6 text-center text-3xl text-gray-800">
        Cocktail Finder
      </h1>
      <form className="mb-6 flex flex-col items-center">
        <input
          type="text"
          value={ingredients}
          onChange={handleInputChange}
          placeholder="Enter ingredients separated by commas"
          className="mb-4 w-full max-w-md rounded border border-gray-300 p-2"
        />
        <div className="flex w-full max-w-md space-x-4">
          <button
            onClick={handleStrict}
            type="button"
            className="flex-1 rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Find Cocktails Strictly
          </button>
          <button
            onClick={handlePartly}
            type="button"
            className="flex-1 rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Find Cocktails Partly
          </button>
        </div>
      </form>
      <div>{renderCocktails(cocktails || [])}</div>
    </div>
  );
}
