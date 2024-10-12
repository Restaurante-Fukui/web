import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Facebook size={24} />
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Instagram size={24} />
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                        <Twitter size={24} />
                        <span className="sr-only">Twitter</span>
                    </a>
                </div>
                <p className="mb-2 text-lg">© 2024 Restaurante Fukui. Todos los derechos reservados.</p>
                <p className="text-sm">Calle Gourmet, 123, 28001 Madrid | Tel: +34 912 345 678</p>
                <p className="mt-4 text-xs text-gray-400">
                    Horario: Martes a Domingo, 13:00 - 15:30 y 20:00 - 23:30
                </p>
            </div>
        </footer>
    )
}