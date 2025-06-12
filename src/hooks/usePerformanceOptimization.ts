import { useState, useEffect, useRef, useCallback } from "react";

// Hook para melhorar a performance do carrossel com carregamento progressivo
export function useProgressiveLoading<T>(
  items: T[],
  visibleItems: number,
  delay: number = 150
) {
  // Mantém um controle dos itens que já foram carregados
  const [loadedItems, setLoadedItems] = useState<Set<number>>(new Set());
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);

  // Referência para manter uma lista de timeouts para limpar durante desmonte
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Verifica se um item específico já foi carregado
  const isItemLoaded = useCallback(
    (index: number) => {
      return loadedItems.has(index);
    },
    [loadedItems]
  );

  // Função para carregar um conjunto de itens com um atraso progressivo
  const loadItems = useCallback(
    (indexesToLoad: number[]) => {
      const newTimeouts: number[] = [];

      indexesToLoad.forEach((index, i) => {
        // Usa delay progressivo para evitar sobrecarregar o navegador
        const timeout = setTimeout(() => {
          setLoadedItems((prev) => {
            const updated = new Set(prev);
            updated.add(index);
            return updated;
          });
        }, delay * i);

        newTimeouts.push(timeout);
      });

      // Armazena os timeouts para limpar depois
      timeoutsRef.current = [...timeoutsRef.current, ...newTimeouts];
    },
    [delay]
  );

  // Carregar itens inicialmente visíveis imediatamente
  useEffect(() => {
    // Primeira carga - carrega os itens visíveis imediatamente
    const initialItems = [
      ...Array(Math.min(visibleItems * 2, items.length)),
    ].map((_, i) => i);
    loadItems(initialItems);

    // Carrega o restante dos itens com um atraso maior
    const remainingItems = [...Array(items.length)]
      .map((_, i) => i)
      .filter((i) => i >= visibleItems * 2);

    if (remainingItems.length > 0) {
      const delayedTimeout = setTimeout(() => {
        loadItems(remainingItems);
        setAllItemsLoaded(true);
      }, delay * visibleItems + 500); // tempo extra após carregar os itens visíveis

      timeoutsRef.current.push(delayedTimeout);
    } else {
      setAllItemsLoaded(true);
    }

    // Limpeza quando o componente for desmontado
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [items.length, visibleItems, loadItems, delay]);

  return {
    isItemLoaded,
    allItemsLoaded,
  };
}

// Hook para detectar conexão lenta do usuário
export function useConnectionQuality() {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Verifica se o navegador suporta API de conexão
    interface NetworkInformation extends EventTarget {
      downlink: number;
      effectiveType: string;
      saveData: boolean;
      addEventListener(type: "change", listener: () => void): void;
      removeEventListener(type: "change", listener: () => void): void;
    }

    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;

    if (connection) {

      // Detecta conexões lentas (2G, 3G ou conexões economizadoras de dados)
      const checkConnection = () => {
        const isSlow =
          connection.saveData ||
          connection.effectiveType === "2g" ||
          connection.effectiveType === "3g" ||
          (connection.downlink !== undefined && connection.downlink < 1.0);

        setIsSlowConnection(isSlow);
      };

      // Verifica a conexão inicialmente
      checkConnection();

      // Adiciona listener para mudanças na qualidade de conexão
      if (connection.addEventListener) {
        connection.addEventListener("change", checkConnection);
        return () => {
          connection.removeEventListener("change", checkConnection);
        };
      }
    }
  }, []);

  return { isSlowConnection };
}
