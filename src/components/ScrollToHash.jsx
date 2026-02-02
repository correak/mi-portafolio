import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const scrollToElement = () => {
      const element = document.getElementById(id);
      const container = document.getElementById("scroll-container");

      if (element && container) {
        // Obtenemos la posición del elemento y del contenedor
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculamos la posición exacta: 
        // (Posición actual del scroll) + (Distancia del elemento al tope del visor) - (Distancia del contenedor al tope del visor)
        const totalScroll = container.scrollTop + elementRect.top - containerRect.top;

        container.scrollTo({
          top: totalScroll - 20, 
          behavior: "smooth",
        });
      }
    };

    // renderizamos
    const timeoutId = setTimeout(scrollToElement, 200);
    return () => clearTimeout(timeoutId);
  }, [hash, pathname]);

  return null;
}