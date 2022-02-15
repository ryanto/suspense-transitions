import { slow, suspend } from "./lib/promise-cache";

let pizzas = [
  {
    id: 1,
    name: "New York Style",
    photos: ["ny-1.png", "ny-4.jpeg", "ny-3.jpeg"],
    delay: 600,
  },
  {
    id: 2,
    name: "Neapolitan",
    photos: ["np-1.jpeg", "np-2.webp", "np-3.jpeg"],
    delay: 400,
  },
  {
    id: 3,
    name: "Detroit Style",
    photos: ["dt-2.jpeg", "dt-3.jpeg", "dt-1.jpeg"],
    delay: 700,
  },
];

export let usePizza = (id) => {
  let pizza = pizzas.find((i) => i.id === +id);
  return suspend(() => slow(() => pizza, pizza.delay), [id]);
};
