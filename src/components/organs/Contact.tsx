import { useState } from 'react';
import { Text } from "../atoms/Text";
import { WhatsappLogo, Envelope, MapPin } from "@phosphor-icons/react";
import { Button } from "../atoms/Button";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [emailStatus, setEmailStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

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

    const sendEmail = (e) => {
        e.preventDefault();

        const { name, email, phone, message } = e.target;

        if (!name.value || !email.value || !phone.value || !message.value) {
            setErrorMessage('Por favor, preencha todos os campos para encaminhar sua mensagem');
            return;
        }

        emailjs.sendForm('service_ipezdsj', 'template_0zkb67c', e.target, 'sbAbAzI6EPaI1LHjv')
            .then((result) => {
                console.log(result.text);
                setEmailStatus('success');
            }, (error) => {
                console.log(error.text);
                setEmailStatus('error');
            });
        e.target.reset();
    };

    return (
        <section className="w-full h-auto flex flex-col lg:flex-row items-center bg-zinc-900">
            <main className="w-full lg:h-[900px] md:h-[800px] flex flex-col justify-center items-center gap-20 lg:gap-28 py-12 md:py-0">
                <div className="flex flex-col items-center relative before:absolute before:-bottom-6 before:left-30 before:w-20 before:h-1 before:rounded-lg before:bg-gradient-to-r before:from-amber-500 before:to-red-500 z-10">
                    <Text as="p" className="text-amber-500 lg:text-sm text-xs tracking-widest uppercase font-medium">Dúvidas ?</Text>
                    <Text as="h1" className="text-zinc-100 lg:text-5xl md:text-4xl text-3xl">Entre em Contato</Text>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-center items-center mt-12">
                    <div className="lg:w-1/2 pr-4 flex flex-col justify-center items-center">
                        <div className="mb-4 w-full">
                            <Text as="p" className="text-zinc-300 text-2xl">
                                <MapPin size={23} className="inline-block mr-2 text-amber-500" /> Rua José Antônio Ferrari, 313, Jardim Santa Cruz <br/>
                                <MapPin size={23} className="inline-block mr-2 text-amber-500" /> Taquaritinga / SP, 15906-282
                            </Text>
                        </div>
                        <div className="w-full">
                            <LoadScript
                                googleMapsApiKey="AIzaSyB3iPK4elYPdiAZ_sLsucQ2RKxL8GsalgE"
                                onLoad={() => console.log('Mapa carregado com sucesso!.')}
                                onError={() => console.error('Erro ao carregar o mapa.')}
                            >
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    center={center}
                                    zoom={Number(15)}
                                >
                                    <Marker position={markerPosition} options={{
                                        label: {
                                            text: "Lumiar",
                                            className: "map-marker"
                                        }
                                    }} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </div>


                    <div className="lg:w-1/2 pl-4 mt-4">
                        <div className="lg:w-3/4 mx-auto mb-4 mt-4 w-full">
                            <Text as="p" className="text-zinc-300 text-1xl">
                                <WhatsappLogo size={23} className="inline-block mr-2 text-amber-500" /> (16) 997404-5100
                            </Text>
                            <Text as="p" className="text-zinc-300 text-1xl">
                                <Envelope size={23} className="inline-block mr-2 text-amber-500" /> orcamentos@lumiarsolucoes.com.br
                            </Text>
                        </div>
                        <form onSubmit={sendEmail} className="lg:w-3/4 mx-auto mt-4">
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
                            {errorMessage && (
                                <div className='badge-warning'>
                                    <p className="text-orange-500">{errorMessage}</p>
                                </div>
                            )}
                            {emailStatus === 'success' && (
                                <div className='badge-success'>
                                    <p className="text-green-500">E-mail enviado com sucesso!</p>
                                </div>
                            )}
                            {emailStatus === 'error' && (
                                <div className='badge-error'>
                                    <p className="text-red-500">Ocorreu um erro ao enviar o e-mail.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Contact;
