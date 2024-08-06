import { createContext } from "react";

interface CarouselContextProps {
  onCardClose: (index: number) => void;
  currentIndex: number;
}

export const CarouselContext = createContext<CarouselContextProps>({
  onCardClose: () => {},
  currentIndex: 0,
});
