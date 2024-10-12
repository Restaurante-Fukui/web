export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img src="/chef.jpg" alt="Chef de Fukui" className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">Nuestra Historia</h2>
                        <p className="text-lg mb-6 leading-relaxed text-gray-600">
                            Fukui nace de la pasión por la cocina asiática de vanguardia. Nuestro chef, con más de dos décadas
                            de experiencia en los mejores restaurantes de Asia, trae a Madrid una propuesta culinaria única
                            que fusiona técnicas tradicionales con presentaciones modernas.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            En Fukui, cada plato es una obra de arte, cuidadosamente elaborada para despertar todos tus sentidos.
                            Utilizamos ingredientes de la más alta calidad, combinando sabores locales con especias y técnicas asiáticas
                            para crear una experiencia gastronómica inolvidable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}