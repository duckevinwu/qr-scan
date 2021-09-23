import Image from 'next/image'
import Script from 'next/script'
import { useState, useEffect } from 'react'

function Test() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPhone("8334091351")
    const unencodedMessage = "Send this message to subscribe! (ref: TEST)"
    const encodedMessage = encodeURIComponent(unencodedMessage)
    setMessage(encodedMessage);
  }, [phone, message])

  return (
    <div className="md:flex md:justify-center md:items-center md:h-full md:min-h-screen">
      <div className="flex flex-col min-h-screen md:max-w-md md:min-h-0 md:shadow-2xl md:rounded-b-xl">
        <div className="w-full h-56 relative">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ball_family_post_game.jpg/1280px-Ball_family_post_game.jpg"
            alt="business-cover"
            layout="fill"
            objectFit="cover"
            className="md:rounded-t-xl"
          />
        </div>
        <div className="flex flex-col flex-grow bg-white rounded-tr-3xl p-4 z-10 -mt-4 md:rounded-b-xl">
          <div className="w-32 h-32 p-2 rounded-lg shadow-lg border-2 border-gray-200 flex justify-center items-center bg-white -mt-20">
            <div className="w-28 h-28 relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/40/BigBallerBrand.jpg"
                alt="business-logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="mt-4 mb-12">
            <h1 className="text-3xl questrial font-bold">Big Baller Brand</h1>
            <p className="mt-2 text-gray-700">
              By joining the Big Baller Brand loyalty club, you will receive weekly exclusive promotions sent straight to your phone!
              Get discounts and special offers on shoes, hoodies, and the rest of our apparel!
            </p>
          </div>
          <div className="mt-auto flex flex-col">
            <a
              href={`sms:+1${phone}?&body=${message}`}
              className="w-full bg-black text-white text-center p-3 rounded hover:bg-purple-700 transition"
            >
              Join now!
            </a>
            <p className="text-gray-500 text-xs mt-4">
              By texting, you agree to receive marketing text messages from our company at the number used, including messages sent by autodialer.
              Consent is not a condition of purchase.
              Message and data rates may apply.
              Message frequency varies.
              Reply HELP for help or STOP to cancel.
              View our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
