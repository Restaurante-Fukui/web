import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Reserva Tu Experiencia</h2>
                <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-xl">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                            <Input id="name" placeholder="Tu nombre" className="w-full" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <Input id="email" type="email" placeholder="tu@email.com" className="w-full" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <Textarea id="message" placeholder="Tu mensaje o solicitud de reserva" className="w-full" />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">Enviar Solicitud</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}