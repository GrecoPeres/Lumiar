import { Text } from "../atoms/Text";
import { WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react";
import { Button } from "../atoms/Button";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
//import emailjs from 'emailjs-com'; // Importe o emailjs-com

const Contact = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: Number('-21.209281'),
        lng: Number('-47.801922'),
    };

    const markerPosition = {
        lat: Number('-21.209'),
        lng: Number('-47.800'),
    };

    // const templateParams = {
    //     from_name: name,
    //     message: message,
    //     email: email,
    // }

/*     const sendEmail = (e) => {
        e.preventDefault();
        // Use o emailjs para enviar o e-mail
        emailjs.sendForm('service_93mpno4', 'template_0zkb67c', e.target, '42ObO14COs0busbo-', )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }; */

    return (
        <section className="w-full h-auto flex items-center bg-zinc-900">
            <main className="w-full lg:h-[900px] md:h-[800px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">
                <div className="flex flex-col mt-10 items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">Dúvidas ?</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">Entre em Contato</Text>
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
                            <LoadScript
                                googleMapsApiKey="AIzaSyAesKL0crhiTJIwIoQs2D0j9NpXCVQeguM"
                                onLoad={() => console.log('Map script loaded successfully.')}
                                onError={() => console.error('Error loading map script.')}
                            >
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={center}
                                    zoom={Number(15)}
                                >
                                    <Marker position={markerPosition} options={{
                                        label: {
                                            text: "Posição Teste",
                                            className: "map-marker"
                                        }
                                    }} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </div>

                    <div className="w-1/2 pl-4">
                        <div className="mt-4">
                            <Text as="p" className="text-zinc-300 text-sm">
                                <WhatsappLogo size={16} className="inline-block mr-2" /> (17) 99225-7694
                            </Text>
                            <Text as="p" className="text-zinc-300 text-sm">
                                <Envelope size={16} className="inline-block mr-2" /> lumiar.orcamento@gmail.com
                            </Text>
                        </div>
                        <form> {/* Adicione o evento onSubmit para chamar a função sendEmail */}
                            <div className="mb-4">
                                <input type="text" placeholder="Nome" className="w-full p-2 border rounded" name="name" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="E-mail" className="w-full p-2 border rounded" name="email" />
                            </div>
                            <div className="mb-4">
                                <input type="tel" placeholder="Telefone" className="w-full p-2 border rounded" name="phone" />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Mensagem"
                                    className="w-full p-2 border rounded"
                                    rows={4}
                                    name="message"
                                />
                            </div>
                            <Button
                                className="px-6 py-2 bg-gradient-to-r from-red-500 to-amber-500 text-white rounded"
                                type="submit"
                            >
                                Enviar
                            </Button>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Contact;
