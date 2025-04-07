export default {
  categories: [
    {
      id: 1,
      name: "Pasta Dishes",
      description:
        "Delicious pasta recipes with a variety of sauces and ingredients.",
      image_url:
        "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Soups",
      description: "Warm and hearty soups perfect for any season.",
      image_url:
        "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    }, 
    {
      id: 3,
      name: "Seafood",
      description: "Fresh and flavorful seafood dishes.",
      image_url:
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Vegetarian",
      description: "Tasty and nutritious meat-free meals.",
      image_url:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Desserts",
      description: "Sweet treats to end your meal on a high note.",
      image_url:
        "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=500",
    },
    {
      id: 6,
      name: "Salads",
      description: "Fresh and healthy salad recipes.",
      image_url:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      name: "Breakfast",
      description: "Start your day with these hearty breakfast options.",
      image_url:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      name: "Beverages",
      description: "Refreshing drinks to accompany any meal.",
      image_url:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&w=500&q=80",
    },
    {
      id: 9,
      name: "Appetizzers",
      description: "Tasty starters to whet your appetite.",
      image_url:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 10,
      name: "Grilled",
      description: "Smoky and flavorful grilled dishes.",
      image_url:
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ],
  meals: [
    {
      id: 101,
      name: "Roasted Red Pepper, Spinach & Feta Penne Pasta",
      description:
        "A Mediterranean-inspired pasta dish featuring tender penne combined with garlic, roasted red peppers, and spinach, topped with crumbled feta cheese. This quick 20-minute meal offers a harmonious blend of flavors and textures.",
      category_id: 1,
      image_url:
        "https://images.unsplash.com/photo-1559564121-073bd4080db7?q=80&w=500",
      nutritional_information: {
        calories: 377,
        protein: "12g",
        fat: "15g",
        carbohydrates: "49g",
      },
      recipe_source: {
        name: "EatingWell",
        url: "https://www.eatingwell.com/recipe/279430/roasted-red-pepper-spinach-feta-penne-pasta/",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "Cook the penne pasta according to package instructions until al dente.",
        },
        {
          stepId: 2,
          description:
            "In a large skillet, heat olive oil over medium heat. Add sliced garlic and cook until fragrant, about 1 minute.",
        },
        {
          stepId: 3,
          description:
            "Add chopped roasted red peppers and fresh spinach to the skillet. Cook, stirring, until the spinach is just wilted, about 3-4 minutes.",
        },
        {
          stepId: 4,
          description: "Season the mixture with salt and pepper to taste.",
        },
        {
          stepId: 5,
          description:
            "Combine the cooked pasta with the vegetable mixture, tossing to integrate.",
        },
        {
          stepId: 6,
          description: "Serve the pasta topped with crumbled feta cheese.",
        },
      ],
    },
    {
      id: 102,
      name: "Chicken Sausage & Tomato Soup",
      description:
        "A hearty soup combining sliced chicken sausage with a rich tomato base, enhanced with herbs and spices. This comforting dish is perfect for a warming meal.",
      category_id: 2,
      image_url:
        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80&fit=crop&bg=1a1a1a",
      nutritional_information: {
        calories: 80,
        protein: "12g",
        fat: "32g",
        carbohydrates: "23g",
      },
      recipe_source: {
        name: "EveryPlate",
        url: "https://www.everyplate.com/recipes/chicken-sausage-tomato-soup-64f7d174d6d437ce24b88ef1",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "Heat olive oil in a large pot over medium heat. Add chopped onion and season with salt and pepper. Cook, stirring occasionally, until softened, about 4-5 minutes.",
        },
        {
          stepId: 2,
          description:
            "Add sliced chicken sausage, minced garlic, and oregano to the pot. Cook, breaking up the sausage into pieces, until browned and cooked through, about 4-5 minutes.",
        },
        {
          stepId: 3,
          description:
            "Add diced tomatoes and tomato paste to the pot with the sausage mixture. Cook, stirring, until the tomatoes are slightly broken down, about 2-3 minutes.",
        },
        {
          stepId: 4,
          description:
            "Stir in chicken broth and bring the soup to a boil. Reduce heat and simmer for 10-15 minutes to allow flavors to meld.",
        },
        {
          stepId: 5,
          description:
            "Adjust seasoning with additional salt and pepper to taste.",
        },
        {
          stepId: 6,
          description: "Serve hot, garnished with fresh herbs if desired.",
        },
      ],
    },
    {
      id: 104,
      name: "Vegetarian Chili",
      description:
        "A hearty and flavorful vegetarian chili packed with beans, vegetables, and spices. Perfect for a comforting meal.",
      category_id: 4,
      image_url:
        "https://images.unsplash.com/photo-1716298774503-c9f98e5363df?q=80&w=500",
      nutritional_information: {
        calories: 250,
        protein: "12g",
        fat: "5g",
        carbohydrates: "40g",
      },
      recipe_source: {
        name: "Cookie and Kate",
        url: "https://cookieandkate.com/vegetarian-chili-recipe/",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "In a large pot, heat olive oil over medium heat. Add chopped onion, bell peppers, carrots, and celery. Cook until softened, about 7 minutes.",
        },
        {
          stepId: 2,
          description:
            "Add minced garlic, chili powder, cumin, smoked paprika, and oregano. Stir and cook until fragrant, about 1 minute.",
        },
        {
          stepId: 3,
          description:
            "Add diced tomatoes with their juices, drained black beans, pinto beans, and kidney beans. Stir to combine.",
        },
        {
          stepId: 4,
          description:
            "Pour in vegetable broth and add bay leaf. Bring the mixture to a boil, then reduce heat to maintain a gentle simmer.",
        },
        {
          stepId: 5,
          description:
            "Cook, stirring occasionally, for 30 to 45 minutes to allow flavors to meld and chili to thicken.",
        },
        {
          stepId: 6,
          description:
            "Remove bay leaf. Taste and adjust seasoning with salt and pepper as needed.",
        },
        {
          stepId: 7,
          description:
            "Serve hot, garnished with chopped fresh cilantro, avocado slices, and a dollop of sour cream if desired.",
        },
      ],
    },
    {
      id: 105,
      name: "Classic Chocolate Chip Cookies",
      description:
        "Soft and chewy chocolate chip cookies with a perfect balance of sweetness and chocolate.",
      category_id: 5,
      image_url:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      nutritional_information: {
        calories: 200,
        protein: "2g",
        fat: "10g",
        carbohydrates: "30g",
      },
      recipe_source: {
        name: "JoyFoodSunshine",
        url: "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
        },
        {
          stepId: 2,
          description:
            "In a small bowl, combine flour, baking soda, and salt. Set aside.",
        },
        {
          stepId: 3,
          description:
            "In a large bowl, beat softened butter, granulated sugar, brown sugar, and vanilla extract until creamy.",
        },
        {
          stepId: 4,
          description:
            "Add eggs one at a time, beating well after each addition.",
        },
        {
          stepId: 5,
          description:
            "Gradually beat in the flour mixture until well combined.",
        },
        { stepId: 6, description: "Stir in chocolate chips." },
        {
          stepId: 7,
          description:
            "Drop by rounded tablespoon onto prepared baking sheets.",
        },
        {
          stepId: 8,
          description: "Bake for 9 to 11 minutes or until golden brown.",
        },
        {
          stepId: 9,
          description:
            "Cool on baking sheets for 2 minutes, then transfer to wire racks to cool completely.",
        },
      ],
    },
    {
      id: 106,
      name: "Simple Green Salad",
      description:
        "A fresh and crisp green salad with a mix of lettuce, cucumber, avocado, and a light lemon vinaigrette.",
      category_id: 6,
      image_url:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      nutritional_information: {
        calories: 150,
        protein: "3g",
        fat: "10g",
        carbohydrates: "12g",
      },
      recipe_source: {
        name: "Love and Lemons",
        url: "https://www.loveandlemons.com/green-salad-recipe/",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "In a large bowl, toss mixed greens with a few spoonfuls of lemon vinaigrette.",
        },
        {
          stepId: 2,
          description:
            "Add sliced cucumber, diced avocado, and toasted pepitas.",
        },
        {
          stepId: 3,
          description:
            "Drizzle with additional dressing and toss gently to combine.",
        },
        {
          stepId: 4,
          description:
            "Top with microgreens and season with flaky sea salt to taste.",
        },
        {
          stepId: 5,
          description: "Serve immediately as a refreshing side salad.",
        },
      ],
    },
    {
      id: 108,
      name: "Grilled Lemon Herb Chicken",
      description:
        "Juicy grilled chicken breasts marinated in a flavorful blend of lemon, garlic, and herbs. Perfect for a healthy and delicious meal.",
      category_id: 8,
      image_url:
        "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80&fit=crop&bg=111111",
      nutritional_information: {
        calories: 220,
        protein: "30g",
        fat: "10g",
        carbohydrates: "2g",
      },
      recipe_source: {
        name: "Healthy Recipes",
        url: "https://www.healthyrecipes.com/grilled-lemon-herb-chicken",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "In a bowl, combine olive oil, lemon juice, minced garlic, chopped fresh herbs (such as rosemary and thyme), salt, and pepper.",
        },
        {
          stepId: 2,
          description:
            "Place the chicken breasts in the marinade, ensuring they are well-coated. Cover and refrigerate for at least 30 minutes.",
        },
        {
          stepId: 3,
          description: "Preheat the grill to medium-high heat.",
        },
        {
          stepId: 4,
          description:
            "Remove the chicken from the marinade and place it on the grill. Cook for 6-7 minutes per side, or until the internal temperature reaches 165°F (75°C).",
        },
        {
          stepId: 5,
          description:
            "Remove the chicken from the grill and let it rest for a few minutes before serving.",
        },
        {
          stepId: 6,
          description:
            "Serve with your choice of side dishes, such as a fresh salad or grilled vegetables.",
        },
      ],
    },
    {
      id: 109,
      name: "Vegetable Stir-Fry with Tofu",
      description:
        "A colorful and nutritious stir-fry featuring a variety of fresh vegetables and tofu, tossed in a savory sauce. A perfect vegetarian meal.",
      category_id: 9,
      image_url:
        "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      nutritional_information: {
        calories: 280,
        protein: "15g",
        fat: "12g",
        carbohydrates: "30g",
      },
      recipe_source: {
        name: "Vegetarian Delights",
        url: "https://www.vegetariandelights.com/vegetable-stir-fry-tofu",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "Press the tofu to remove excess moisture, then cut it into cubes.",
        },
        {
          stepId: 2,
          description:
            "In a large skillet or wok, heat oil over medium-high heat. Add the tofu cubes and cook until golden brown on all sides. Remove and set aside.",
        },
        {
          stepId: 3,
          description:
            "In the same skillet, add more oil if needed, and sauté a mix of sliced bell peppers, broccoli florets, and snap peas until tender-crisp.",
        },
        {
          stepId: 4,
          description:
            "In a small bowl, whisk together soy sauce, minced garlic, grated ginger, and a pinch of sugar.",
        },
        {
          stepId: 5,
          description:
            "Return the tofu to the skillet with the vegetables, pour the sauce over, and toss to combine. Cook for an additional 2-3 minutes.",
        },
        {
          stepId: 6,
          description: "Serve hot over steamed rice or noodles.",
        },
      ],
    },
    {
      id: 110,
      name: "Classic Margherita Pizza",
      description:
        "A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves. Simple yet incredibly flavorful.",
      category_id: 10,
      image_url:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      nutritional_information: {
        calories: 300,
        protein: "12g",
        fat: "10g",
        carbohydrates: "40g",
      },
      recipe_source: {
        name: "Italian Cuisine",
        url: "https://www.italiancuisine.com/classic-margherita-pizza",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "Preheat the oven to 475°F (245°C). Place a pizza stone or baking sheet in the oven to heat.",
        },
        {
          stepId: 2,
          description:
            "Roll out the pizza dough on a floured surface to your desired thickness.",
        },
        {
          stepId: 3,
          description:
            "Transfer the rolled-out dough to a piece of parchment paper.",
        },
        {
          stepId: 4,
          description:
            "Spread a thin layer of tomato sauce over the dough, leaving a small border around the edges.",
        },
        {
          stepId: 5,
          description:
            "Arrange slices of fresh mozzarella cheese on top of the sauce.",
        },
        {
          stepId: 6,
          description:
            "Carefully transfer the pizza (with the parchment paper) onto the preheated pizza stone or baking sheet.",
        },
        {
          stepId: 7,
          description:
            "Bake for 10-12 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.",
        },
        {
          stepId: 8,
          description:
            "Remove the pizza from the oven and top with fresh basil leaves.",
        },
        {
          stepId: 9,
          description: "Drizzle with olive oil, slice, and serve hot.",
        },
      ],
    },
    {
      id: 111,
      name: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish featuring spaghetti tossed with crispy pancetta, eggs, Parmesan cheese, and black pepper, creating a creamy and flavorful sauce.",
      category_id: 1,
      image_url:
        "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      nutritional_information: {
        calories: 450,
        protein: "20g",
        fat: "18g",
        carbohydrates: "50g",
      },
      recipe_source: {
        name: "Italian Cooking",
        url: "https://www.italiancooking.com/spaghetti-carbonara",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "Cook the spaghetti in a large pot of boiling salted water until al dente. Reserve 1 cup of pasta water before draining.",
        },
        {
          stepId: 2,
          description:
            "In a skillet over medium heat, cook the pancetta until crispy. Remove from heat and set aside.",
        },
        {
          stepId: 3,
          description:
            "In a bowl, whisk together eggs, grated Parmesan cheese, and freshly ground black pepper.",
        },
        {
          stepId: 4,
          description:
            "Return the skillet with pancetta to low heat. Add the drained spaghetti to the skillet and toss to combine.",
        },
        {
          stepId: 5,
          description:
            "Remove the skillet from heat. Quickly pour the egg and cheese mixture over the pasta, stirring continuously to create a creamy sauce. Add reserved pasta water as needed to reach desired consistency.",
        },
        {
          stepId: 6,
          description:
            "Serve immediately, garnished with additional Parmesan cheese and black pepper.",
        },
      ],
    },
    {
      id: 112,
      name: "Minestrone Soup",
      description:
        "A hearty Italian vegetable soup made with a variety of seasonal vegetables, beans, and pasta, simmered in a flavorful tomato broth.",
      category_id: 2,
      image_url:
        "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      nutritional_information: {
        calories: 300,
        protein: "12g",
        fat: "5g",
        carbohydrates: "55g",
      },
      recipe_source: {
        name: "Soup Recipes",
        url: "https://www.souprecipes.com/minestrone-soup",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description:
            "In a large pot, heat olive oil over medium heat. Add chopped onions, carrots, and celery, and sauté until softened.",
        },
        {
          stepId: 2,
          description:
            "Add minced garlic and cook for another minute until fragrant.",
        },
        {
          stepId: 3,
          description:
            "Stir in diced tomatoes, vegetable broth, and a mix of chopped seasonal vegetables (such as zucchini, green beans, and spinach).",
        },
        {
          stepId: 4,
          description:
            "Add drained and rinsed canned beans (such as kidney beans and cannellini beans) and bring the soup to a boil.",
        },
        {
          stepId: 5,
          description:
            "Add small pasta (such as ditalini) to the pot and cook until the pasta is tender.",
        },
        {
          stepId: 6,
          description:
            "Season with salt, pepper, and Italian herbs to taste. Serve hot, garnished with grated Parmesan cheese if desired.",
        },
      ],
    },
    {
      id: 113,
      name: "Grilled Salmon with Asparagus",
      description:
        "A healthy and flavorful dish featuring grilled salmon fillets served alongside tender asparagus spears, drizzled with a lemon-dill sauce.",
      category_id: 3,
      image_url:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      nutritional_information: {
        calories: 350,
        protein: "30g",
        fat: "20g",
        carbohydrates: "10g",
      },
      recipe_source: {
        name: "Seafood Delights",
        url: "https://www.seafooddelights.com/grilled-salmon-asparagus",
      },
      cooking_instructions: [
        {
          stepId: 1,
          description: "Preheat the grill to medium-high heat.",
        },
        {
          stepId: 2,
          description:
            "Season salmon fillets with salt, pepper, and a drizzle of olive oil.",
        },
        {
          stepId: 3,
          description:
            "Grill the salmon fillets for 4-5 minutes per side, or until cooked through.",
        },
        {
          stepId: 4,
          description:
            "While the salmon is grilling, toss asparagus spears with olive oil, salt, and pepper.",
        },
        {
          stepId: 5,
          description:
            "Grill the asparagus for 3-4 minutes, turning occasionally, until tender and slightly charred.",
        },
        {
          stepId: 6,
          description:
            "In a small bowl, mix together lemon juice, chopped fresh dill, and a bit of olive oil to create the sauce.",
        },
        {
          stepId: 7,
          description:
            "Serve the grilled salmon and asparagus drizzled with the lemon-dill sauce.",
        },
      ],
    },
  ],
};
