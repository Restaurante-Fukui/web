"use client";

import { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"

type MenuItem = {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
}

// Simulating API call
const fetchMenuItems = async (): Promise<MenuItem[]> => {
    // In a real scenario, this would be an actual API call
    return [
        { id: 1, name: "Ensalada China", price: "4,50€", image: "/ensalada-china.jpg", category: "Ensalada" },
        { id: 2, name: "Ensalada de Brotes", price: "4,95€", image: "/ensalada-soja.jpg", category: "Ensalada" },
        { id: 3, name: "Rollitos Primavera", price: "3,50€", image: "/rollitos-primavera.jpg", category: "Entrante" },
        { id: 4, name: "Wan Tun Frito", price: "3,95€", image: "/wan-tun.jpg", category: "Entrante" },
        { id: 5, name: "Pollo Kung Pao", price: "9,95€", image: "/pollo-kung-pao.jpg", category: "Principal" },
        { id: 6, name: "Arroz Tres Delicias", price: "5,50€", image: "/arroz-tres-delicias.jpg", category: "Principal" },
        { id: 7, name: "Tallarines Fritos", price: "6,95€", image: "/tallarines-fritos.jpg", category: "Principal" },
        { id: 8, name: "Ternera con Bambú", price: "8,95€", image: "/ternera-bambu.jpg", category: "Principal" },
        { id: 9, name: "Tofu Mapo", price: "7,50€", image: "/tofu-mapo.jpg", category: "Principal" },
        { id: 10, name: "Helado Frito", price: "4,50€", image: "/helado-frito.jpg", category: "Postre" },
    ];
}

export default function Menu() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [filter, setFilter] = useState<string>('Todos');
    const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        fetchMenuItems().then(setMenuItems);
    }, []);

    const categories = ['Todos', 'Ensalada', 'Entrante', 'Principal', 'Postre'];

    const filteredItems = filter === 'Todos'
        ? menuItems
        : menuItems.filter(item => item.category === filter);

    const addToCart = (id: number) => {
        setCartItems(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const removeFromCart = (id: number) => {
        setCartItems(prev => {
            const newQuantity = Math.max(0, (prev[id] || 0) - 1);
            if (newQuantity === 0) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: newQuantity };
        });
    };

    return (
        <section id="menu" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nuestro Menú</h2>

                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setFilter(category)}
                            variant={filter === category ? "default" : "outline"}
                            className={`${filter === category ? "bg-blue-600 text-white" : "text-blue-600"} text-sm px-3 py-1`}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredItems.map((item) => (
                        <Card key={item.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="relative flex-grow">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                                <div className="absolute top-0 left-0 right-0 p-2 bg-black bg-opacity-50">
                                    <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                                </div>
                            </div>
                            <CardContent className="p-3 flex items-center justify-between bg-white">
                                <span className="text-sm font-bold text-gray-800">{item.price}</span>
                                <div className="flex items-center space-x-2">
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => removeFromCart(item.id)}
                                        className="h-8 w-8 bg-gray-200 hover:bg-gray-300 text-gray-800"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="text-sm font-semibold w-6 text-center">
                                        {cartItems[item.id] || 0}
                                    </span>
                                    <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => addToCart(item.id)}
                                        className="h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}