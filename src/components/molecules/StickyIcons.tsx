import { /* FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo*/ WhatsappLogo,  } from "@phosphor-icons/react";

const StickyIcons = () => {
    return (
        <aside className="fixed lg:bottom-0 bottom-1/2 left-0  flex flex-col gap-5 items-center  z-40 from-red-500 to-amber-500 rounded-e-lg py-3 px-2 ">
            {/*             <a href="/" className="text-zinc-100 hover:text-zinc-900">
                <FacebookLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="/" className="text-zinc-100 hover:text-zinc-900">
                <TwitterLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="/" className="text-zinc-100 hover:text-zinc-900">
                <YoutubeLogo size={15} color="currentColor" weight="fill" />
            </a>
            <a href="/" className="text-zinc-100 hover:text-zinc-900">
                <InstagramLogo size={15} color="currentColor" weight="fill" />
            </a> */}
            <div className="whats">
                <a href="https://wa.me/+5517981398479" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo size={35} color="white" weight="fill" />
                </a>
            </div>
        </aside>
    )
}

export default StickyIcons