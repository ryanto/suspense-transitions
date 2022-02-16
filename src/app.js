import { Suspense, useState } from "react";
import { Container } from "./components/container";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Loading } from "./components/loading";
import { LoadingPopup } from "./components/loading-popup";
import { usePizza } from "./use-pizza";

export function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense
          fallback={
            <div className="flex justify-center mt-8">
              <Loading className="w-8 h-8 text-indigo-700 animate-spin" />
            </div>
          }
        >
          <Pizza />
        </Suspense>
      </Container>
    </>
  );
}

function Pizza() {
  let [id, setId] = useState(1);

  let pizza = usePizza(id);

  let showNextPizza = () => {
    setId(id + 1);
  };

  let showPreviousPizza = () => {
    setId(id - 1);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <button
            className="active:text-indigo-800"
            onClick={showPreviousPizza}
          >
            Previous
          </button>
        </div>
        <div>
          <button className="active:text-indigo-800" onClick={showNextPizza}>
            Next
          </button>
        </div>
      </div>

      <h1 className="mt-6 text-2xl font-medium text-center">{pizza.name}</h1>
      <div className="mt-6">
        <Gallery key={pizza.id} pizza={pizza} />
      </div>
    </div>
  );
}
