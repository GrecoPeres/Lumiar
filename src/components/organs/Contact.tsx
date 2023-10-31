import React from 'react';
import { Text } from "../atoms/Text";
import { WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react"; // Importe os ícones
import { Button } from "../atoms/Button"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
    return (
        <section className="w-full h-auto flex items-center bg-zinc-900">
            <main className="w-full lg:h-[900px] md:h-[800px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">
                <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">Dúvidas ?</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">Entre em Contato</Text>
                    <Text as="h1" className="absolute text-zinc-500/20 lg:left-24 left-20 lg:text-9xl md:text-7xl text-6xl font-extrabold lg:-top-32 md:-top-20 -top-16 -z-10">07</Text>
                </div>

                <div className="w-full flex justify-center items-center mt-12">
                    <div className="w-1/2 pr-4">
                        <div className="mb-4">
                            <Text as="p" className="text-zinc-300 text-sm">
                                <MapPin size={16} className="inline-block mr-2" /> Rua José Antônio Ferrari, 313<br />
                                Jardim Santa Cruz - Taquaritinga / SP<br />
                                CEP: 15906-282<br />
                                Referência: Rua 10 do CECAP
                            </Text>
                        </div>
                    </div>

                    <div className="w-1/2 pl-4">
                        <form>
                            <div className="mb-4">
                                <input type="text" placeholder="Nome" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <input type="tel" placeholder="Telefone" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Mensagem" className="w-full p-2 border rounded" rows="4" />
                            </div>
                            <Button
                                className="px-6 py-2 bg-gradient-to-r from-red-500 to-amber-500 text-white rounded"
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </form>
                        <div className="mt-4">
                            <Text as="p" className="text-zinc-300 text-sm">
                                <WhatsappLogo size={16} className="inline-block mr-2" /> (11) 12345-6789
                            </Text>
                            <Text as="p" className="text-zinc-300 text-sm">
                                <Envelope size={16} className="inline-block mr-2" /> contato@seudominio.com
                            </Text>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Contact;
