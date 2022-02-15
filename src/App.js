import { Suspense, useState, useTransition } from "react";
import { Container } from "./components/container";
import { Gallery } from "./components/gallery";
import { Header } from "./components/header";
import { Loading } from "./components/loading";
import { LoadingPopup } from "./components/loading-popup";
import { usePizza } from "./use-pizza";

function App() {
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

  let [isPending, startTransition] = useTransition();

  let showNextPizza = () => {
    startTransition(() => {
      setId(id + 1);
    });
  };

  let showPreviousPizza = () => {
    startTransition(() => {
      setId(id - 1);
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <button onClick={showPreviousPizza}>Previous</button>
        </div>
        <div>
          <button onClick={showNextPizza}>Next</button>
        </div>
      </div>

      {isPending && (
        <LoadingPopup delayMs={30}>We're loading the next pizza</LoadingPopup>
      )}

      <h1 className="mt-6 text-2xl font-medium text-center">{pizza.name}</h1>
      <div className="mt-6">
        <Gallery key={pizza.id} pizza={pizza} />
      </div>
    </div>
  );
}

export default App;
