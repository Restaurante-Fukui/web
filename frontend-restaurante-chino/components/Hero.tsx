import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="relative h-[90vh] bg-[url('/hero-image.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-6xl md:text-7xl font-bold mb-4">
                    Fukui
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                    Una experiencia culinaria que despierta los sentidos
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
                    Descubre Nuestro Menú
                </Button>
            </div>
        </section>
    )
}