import { DataCards } from "@/data/cards";

export const Cards = () => {
    const dataCards = DataCards;

    return (
        <>
            <div className='flex flex-col items-center gap-10 md:gap-0 md:flex-row md:justify-around mb-10'>
                {dataCards &&
                    dataCards.map((item) => (
                        <div
                            key={item.id}
                            className='w-56 h-24 rounded-lg bg-blue-500 py-2 px-4 flex flex-col items-start justify-center'>
                            <h1 className='text-2xl font-bold'>
                                {item.cardTitle}
                            </h1>
                            <p className='text-sm'>{item.cardBody}</p>
                        </div>
                    ))}
            </div>
        </>
    );
};
