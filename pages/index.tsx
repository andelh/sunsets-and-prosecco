import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { panchang } from "./_app";

export default function Home() {
  return (
    <>
      <main className="text-black">
        <div className="relative flex h-[85vh] items-center justify-center text-center text-orange">
          <div className="absolute top-0 left-0 z-[1] h-full w-full bg-slate-400">
            <video
              className="h-full w-full object-cover "
              playsInline
              preload="auto"
              autoPlay
              muted
              loop
            >
              <source src="/sunset1.mp4" type="video/mp4" />
            </video>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 3 }}
            className="z-10 mix-blend-screen"
          >
            <h1
              className={`${panchang.className} text-3xl uppercase leading-none md:text-6xl`}
            >
              Sunsets &
            </h1>
            <h1 className="font-serif text-8xl leading-[0.4] md:text-[180px] md:leading-[0.2]">
              prosecco
            </h1>
          </motion.div>
        </div>
        <div className="bg-[#FB9962] bg-opacity-80 py-12 px-4">
          <div className="mx-auto max-w-xl text-center text-lg font-medium leading-snug text-[#7D2C2C]">
            <p className="mb-6 text-4xl">🌅 🍾</p>
            <p className="mb-6">
              Join us for birthday + housewarming shenanigans. We are combining
              two of our favourite things: Sunsets and Prosecco!
            </p>
            <p className="mb-6">
              To set the mood, we&lsquo;re going for a Sunset Chic dress code.
              Think flowy fabrics in warm sunset hues like burnt orange, dusty
              pink, and golden yellow. Lets create a picture-perfect scene
              together!
            </p>
            <p className="mb-6 text-4xl">🎞</p>
          </div>
        </div>
        <div className="py-12 px-4">
          <div className="mx-auto grid max-w-xl grid-cols-2 gap-3">
            <Link href="/rsvp">
              <Button title="RSVP Now" />
            </Link>
            <Link href="/fashion-inspo">
              <Button title="Fashion Inspo" />
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.waze.com/live-map/directions?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=ll.10.68032396%2C-61.50414705"
            >
              <Button title="Get Directions" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://open.spotify.com/playlist/5kLOPnSX3J0n8sauEnZaqX?si=t-sPtd45Qp203NeCCfk-kA&pt=76f22d7c651aa8c1cce1228663c8b3a0"
            >
              <Button title="Add to Playlist" />
            </a>
          </div>
          <div className="mx-auto grid max-w-xl grid-cols-2 gap-y-8 gap-x-2 py-12 text-center md:grid-cols-3">
            <div className="flex flex-col items-center justify-start">
              <div className="relative mb-2 flex h-16 w-16 flex-col items-center justify-start">
                <Image src="/time.svg" fill alt="time" />
              </div>
              <p className="text-md max-w-[12ch] font-bold leading-tight">
                5pm - 1am
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="relative mb-2 flex h-16 w-16 flex-col items-center justify-start">
                <Image src="/invite.svg" fill alt="invite" />
              </div>
              <p className="text-md max-w-[12ch] font-bold leading-tight">
                invite only
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="relative mb-2 flex h-16 w-16 flex-col items-center justify-start">
                <Image src="/food.svg" fill alt="food" />
              </div>
              <p className="text-md max-w-[12ch] font-bold leading-tight">
                food and snacks available
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="relative mb-2 flex h-16 w-16 flex-col items-center justify-start">
                <Image src="/sunset.svg" fill alt="sunset" />
              </div>
              <p className="text-md max-w-[12ch] font-bold leading-tight">
                sunset view (6:15pm)
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="relative mb-2 flex h-16 w-16 flex-col items-center justify-start">
                <Image src="/dress.svg" fill alt="dress" />
              </div>
              <p className="text-md max-w-[12ch] font-bold leading-tight">
                dresscode: sunset chic
              </p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="relative mb-2 flex h-16 w-16 flex-col items-center justify-start">
                <Image src="/bottle.svg" fill alt="bottle" />
              </div>
              <p className="text-md max-w-[12ch] font-bold leading-tight">
                bring 1 bottle prosecco
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="relative w-full">
      <button
        className="w-full whitespace-nowrap rounded-lg border-4 border-[#FB9062] bg-white px-8 py-4 text-center text-sm font-bold uppercase md:text-lg"
        {...props}
      >
        {props.title}
      </button>
      <button
        className="absolute top-1 left-1 z-[-1] w-full whitespace-nowrap rounded-lg border-4 border-[#0F0F0F] bg-[#0F0F0F] px-8 py-4 text-center text-sm font-bold uppercase md:text-lg"
        disabled
      >
        {props.title}
      </button>
    </div>
  );
};
