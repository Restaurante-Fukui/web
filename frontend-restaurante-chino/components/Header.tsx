import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-white text-gray-800 py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    Fukui
                </Link>
                <nav>
                    <ul className="flex space-x-6 items-center">
                        <li><Link href="#menu" className="hover:text-blue-600 transition-colors">Menú</Link></li>
                        <li><Link href="#about" className="hover:text-blue-600 transition-colors">Nosotros</Link></li>
                        <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contacto</Link></li>
                        <li>
                            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                                <ShoppingBag className="mr-2 h-4 w-4" /> Pedido
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}