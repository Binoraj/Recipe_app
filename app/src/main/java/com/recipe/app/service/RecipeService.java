package com.recipe.app.service;

import com.recipe.app.entity.Recipe;
import java.util.List;

public interface RecipeService {

    List<Recipe> getAllRecipes();

    Recipe getRecipeById(Long id);

    Recipe saveRecipe(Recipe recipe);

    void deleteRecipe(Long id);
}