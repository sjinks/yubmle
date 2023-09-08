import { createContext } from 'react';

interface Item {
    id: number;
    name: string;
}

export interface Addon {
    id: number;
    name: string;
    description: string;
}

export interface Items {
    items: Record<string, Item[]>;
    addons: Addon[];
}

export interface ApplicationContext {
    items: Items;
    boxen: number;
    basket: Record<string, number>[];
    addons: Record<number, number>;

    updateBoxen(boxen: number): void;
    updateBasket(box: number, group: string, value: number): void;
    updateAddon(id: number, value: number): void;
}

export const AppContext = createContext<ApplicationContext | undefined>(undefined);
