import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Join = () => {
  const [data, setData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const phone = '8334091351'
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (!id) return
    fetchData(id)
  }, [id])

  const fetchData = (id) => {
    fetch(`https://api.npoint.io/ea7674962fc012b220d4/${id}`)
      .then(response => response.json())
      .then(data => {
        document.title = data.name
        setData(data)
        setIsLoaded(true)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="md:flex md:justify-center md:items-center md:h-full md:min-h-screen">
      <div className="flex flex-col min-h-screen md:max-w-md md:min-h-0 md:shadow-2xl md:rounded-b-xl">
        {(isLoaded) ?
          <div className="w-full h-56 relative">
            <Image
              src={data.coverUrl}
              alt="business-cover"
              layout="fill"
              objectFit="cover"
              className="md:rounded-t-xl"
              placeholder="blur"
              blurDataURL={data.coverUrl}
            />
          </div>
          :
          <div className="md:rounded-t-xl bg-gray-200 w-full h-56 animate-pulse"></div>
        }
        <div className="flex flex-col flex-grow bg-white rounded-tr-3xl p-4 z-10 -mt-4 md:rounded-b-xl">
          <div className="w-32 h-32 p-2 rounded-lg shadow-lg border-2 border-gray-200 flex justify-center items-center bg-white -mt-20">
            {(isLoaded) ?
              <div className="w-28 h-28 relative">
                <Image
                  src={data.logoUrl}
                  alt="business-logo"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={data.logoUrl}
                />
              </div>
              :
              <div className="w-32 h-32 animate-pulse"></div>
            }
          </div>
          <div className="mt-4 mb-12">
            {(isLoaded) ?
              <h1 className="text-3xl questrial font-bold">{data.name}</h1>
              :
              <div className="bg-gray-200 h-12 w-36 animate-pulse"></div>
            }
            {(isLoaded) ?
              <p className="mt-2 text-gray-700">{data.description}</p>
              :
              <div className="mt-2 bg-gray-200 h-4 w-full animate-pulse"></div>
            }
          </div>
          <div className="mt-auto flex flex-col">
            {(isLoaded) ?
              <a
                href={`sms:+1${phone}?&body=${data.subscribeMessage}`}
                className="w-full bg-black text-white text-center p-3 rounded hover:bg-purple-700 transition"
              >
                Join now!
              </a>
              :
              <div className="bg-gray-200 w-full h-12 rounded animate-pulse"></div>
            }
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

export default Join
