"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "./Loading";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function CategorySection() {
  const [mealsState, setMeals] = useState<Meal[]>([]);
  const [categoriesData, setCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const { categories } = response.data;
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const getMeals = async (name: string) => {
    setCurrentCategory(name);
    setMeals([]);
    setIsLoading(true);
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    const { meals } = response.data;
    setMeals(meals);
    setIsLoading(false);
  };

  function CategoryButton({ name }: { name: string }) {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`px-3 py-1 md:px-5 md:py-3 rounded-full ${
          currentCategory === name
            ? "bg-green-600 text-white"
            : "bg-gray-300 text-black"
        } hover:bg-green-600 focus:bg-green-600 hover:text-white focus:text-white transition duration-200 text-sm md:text-base`}
        onClick={() => getMeals(name)}
      >
        {name}
      </motion.button>
    );
  }

  return (
    <section className="w-full flex justify-center items-center min-h-[100vh] text-white bg-gray-800">
      <div className="flex flex-col justify-center items-center w-full lg:w-[90%] 2xl:w-[2000px] p-5 space-y-2 mt-20">
        <span className="leading-relaxed font-bold text-sm">
          Shop by Category
        </span>
        <h1 className="capitalize text-3xl font-bold text-center">
          top category of organic food
        </h1>
        <div className="flex flex-wrap justify-center space-y-2 space-x-2 items-center">
          {categoriesData.map((category) => (
            <CategoryButton
              key={category.idCategory}
              name={category.strCategory}
            />
          ))}
        </div>
        <div className="mt-8 w-full md:w-[98%] flex flex-col md:flex-row flex-wrap justify-between items-center p-4 space-y-5">
          {isLoading && <Loading />}
          {mealsState.map((meal) => (
            <motion.div
              key={meal.idMeal}
              className="relative w-full md:w-[45%] flex justify-between items-center p-2 md:p-4 space-x-4 md:space-x-0 min-h-[250px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={100}
                height={100}
                onLoadStart={() => <Loading />}
                className="w-[100px] h-[100px] object-cover rounded-full"
              />
              <div className="w-[70%] flex flex-col justify-between h-[90px] space-y-3">
                <h1 className="capitalize text-lg font-bold">{meal.strMeal}</h1>
                <div className="outline-gray-400 outline-[0.02px] outline-dashed h-[-3%]" />
                <span className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <Link
                href="/#"
                className="absolute bottom-2 right-0 text-green-600 text-sm flex items-center space-x-2 font-bold"
              >
                <p>SHOP NOW</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
