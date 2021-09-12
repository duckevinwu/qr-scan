import Image from 'next/image'
import Script from 'next/script'

function Test() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-56 relative">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Ball_family_post_game.jpg/1280px-Ball_family_post_game.jpg"
          alt="business-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow bg-white rounded-tr-3xl p-4 z-10 -mt-4">
        <div className="w-32 h-32 p-2 rounded-lg shadow-lg border border-gray-200 flex justify-center items-center bg-white -mt-20">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/BigBallerBrand.jpg"
            alt="business-logo"
            width="480"
            height="226"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-3xl questrial font-bold">Big Baller Brand</h1>
          <p className="mt-2 text-gray-700">
            By joining the Big Baller Brand loyalty club, you will receive weekly exclusive promotions sent straight to your phone!
            Get discounts and special offers on shoes, hoodies, and the rest of our apparel!
          </p>
        </div>
        <div className="mt-auto">
          <div className="mt-6 klaviyo-form-SAnxvd"></div>
        </div>
      </div>
      <Script
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SM5Fph"
      />
    </div>
  )
}

export default Test
