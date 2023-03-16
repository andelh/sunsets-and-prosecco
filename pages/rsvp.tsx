import React from "react";
import { motion } from "framer-motion";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase";
import { toast } from "sonner";
import { useRouter } from "next/router";

type Props = {};

export default function RSVP({}: Props) {
  const router = useRouter();
  const [value, loading, error] = useCollectionData(
    collection(firestore, "rsvps"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  console.log({ value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // toast("Submitting...");
    // Make sure this rsvp hasn't already been submitted
    const existingRsvp = value?.find((rsvp) => rsvp.email === email);
    if (existingRsvp) {
      toast("You already RSVPd! We'll see you soon :)");
      return;
    }

    // Create a new document in firestore in the rsvps collection with name and email
    await setDoc(doc(firestore, "rsvps", email), {
      name,
      email,
      createdAt: new Date(),
    }).catch((err) => {
      console.log({ err });
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer 70d3b0b051d424fed9404e1f09a9c4c5"
    );

    var raw = JSON.stringify({
      project: "sunsets-and-prosecco",
      channel: "rsvp",
      event: "Someone RSVP'd",
      description: `Someone RSVP'd with name: ${name} and email: ${email}`,
      tags: { name, email, createdat: new Date().toLocaleDateString() },
      icon: "💌",
      notify: true,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://api.logsnag.com/v1/log", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setSubmitted(true);
    toast.success("Thanks for RSVPing! We will see you soon :)");
  };
  return (
    <div className="min-h-screen bg-yellow">
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-20 text-center">
        <h1 className="mb-4 text-6xl font-bold">RSVP</h1>
        <p className="text-medium mb-8 max-w-md text-lg">
          All we ask is that you bring one bottle of Prosecco on entry and your
          beautiful self, and we will take care of the rest.
        </p>
        {!submitted ? (
          <form
            className="mb-12 flex w-full flex-col items-center"
            onSubmit={handleSubmit}
          >
            <input
              className="mb-4 w-full rounded-md border-2 border-black bg-transparent py-2 px-4 text-lg text-black placeholder-zinc-800 focus:border-black"
              placeholder="Your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="mb-8 w-full rounded-md border-2 border-black bg-transparent py-2 px-4 text-lg text-black placeholder-zinc-800 focus:border-black"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" title="Submit RSVP" />
          </form>
        ) : (
          []
        )}
        {submitted && (
          <div className=" w-full">
            {value && value.length > 0 && (
              <p className="mb-4 text-lg font-semibold">Confirmed RSVPs:</p>
            )}
            {value &&
              value.map((doc) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-2 flex w-full items-center justify-start rounded bg-white bg-opacity-60 py-2 px-8 ring-2 ring-zinc-800"
                  key={doc.id}
                >
                  {doc.name}
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="relative w-52">
      <button
        className="absolute top-2 left-2 z-[-1]  w-full whitespace-nowrap rounded-lg border-4 border-[#0F0F0F] bg-[#0F0F0F] px-8 py-4 text-center text-xs font-bold uppercase"
        disabled
      >
        {props.title}
      </button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-md z-0 w-52 whitespace-nowrap rounded-lg border-4 border-black bg-orange px-8 py-4 text-center font-bold uppercase text-black"
        {...props}
      >
        {props.title}
      </motion.button>
    </div>
  );
};
