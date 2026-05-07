package com.recipe.app.controller;

import com.recipe.app.entity.Recipe;
import com.recipe.app.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "*")
public class RecipeController {

    @Autowired
    private RecipeService service;

    @GetMapping
    public List<Recipe> getAll() {
        return service.getAllRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getById(@PathVariable Long id) {
        return service.getRecipeById(id);
    }

    @PostMapping
    public Recipe add(@RequestBody Recipe recipe) {
        return service.saveRecipe(recipe);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteRecipe(id);
    }
}