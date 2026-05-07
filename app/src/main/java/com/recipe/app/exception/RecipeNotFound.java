package com.recipe.app.exception;

public class RecipeNotFound extends RuntimeException {

    public RecipeNotFound(String message) {
        super(message);
    }
}