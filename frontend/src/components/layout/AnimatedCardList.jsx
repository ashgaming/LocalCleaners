import React, { useState, useEffect } from "react";

function AnimatedCardList({ filterData = [], filterFilter = {} }) {
    const initialData = [
        { id: "1", title: "Card 1", description: "", filterCriteriaName: "title" },
        { id: "2", title: "Card 2", description: "Description 2" },
        // Add more cards as needed
    ];

    const [cards, setCards] = useState(initialData);

    useEffect(() => {
        // Apply filtering logic when filterData or filterFilter changes
        const applyFilters = () => {
            let filteredCards = initialData;

            if (filterFilter.title) {
                filteredCards = filteredCards.filter((card) =>
                    card.title === filterFilter.title
                );
            }
            if (filterFilter.description) {
                filteredCards = filteredCards.filter((card) =>
                    card.description === filterFilter.description
                );
            }
            setCards(filteredCards);
        };

        applyFilters();
    }, [filterData, filterFilter]);

    return (
        <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-6 animate-fadeIn">Animated Card List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.length > 0 ? (
                cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 ease-in-out animate-slideUp"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {card.title}
                        </h2>
                        <p className="text-gray-600">{card.description || "No description"}</p>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 col-span-full">
                    No cards available
                </p>
            )}
        </div>
    </div>
    );
}

export default AnimatedCardList;
