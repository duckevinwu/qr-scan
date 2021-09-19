import Head from 'next/head'

// components
import CycleSelect from '../components/CycleSelect'
import RevenueCalculator from '../components/RevenueCalculator'

export default function Home() {
  return (
    <>
      <Head>
        <title>Benefact</title>
        <meta name="description" content="Benefact helps small businesses retain customers and grow revenue." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.min.css"/>
      </Head>
      <div>
        <section className="min-h-screen">
          <div className="container mx-auto px-3 lg:px-5">
          <div className="navbar-container flex items-center">
            <a href="/">
              <div className="flex items-center cursor-pointer">
                <img className="h-12 w-12" alt="logo" src="/benefact_logo.png"></img>
                <div className="questrial text-lg lg:text-xl font-bold tracking-wider">Benefact</div>
              </div>
            </a>
          </div>
            <div className="hero-info-container flex items-center justify-center">
              <div className="flex flex-col items-center lg:flex-row">
                <div className="text-center lg:text-left lg:mr-10 mb-16 lg:mb-0 flex items-center lg:w-1/2">
                  <div>
                    <h1 className="text-4xl md:text-5xl questrial mb-6 font-bold">
                      The easiest way to get <font className="text-purple-500 questrial">repeat customers</font>
                    </h1>
                    <p className="sm:text-lg leading-relaxed mb-6 text-gray-800">
                      Benefact helps small businesses retain customers and grow revenue.
                    </p>
                    <a href="/">
                      <button className="transition duration-300 ease-in-out text-white bg-black border-0 py-3 px-6 focus:outline-none rounded hover:bg-purple-400 hover:text-black cursor-pointer">Get started <i className="bi-chevron-right ml-6"></i></button>
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:-mt-12 lg:w-1/2">
                  <img alt="hero" src="/hero.png" className="hero-image"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-section md:block hidden"></div>
        <section className="bg-black">
          <div className="container mx-auto px-3 py-12 lg:px-5">
            <h1 className="questrial uppercase text-gray-400 tracking-widest">Our solution</h1>
            <div className="pt-6 lg:flex lg:items-center" data-aos="fade-up">
              <div className="lg:w-1/2 lg:flex lg:justify-center">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-white text-4xl">We all know what's wrong</h2>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    Many small businesses struggle to attract customers during weekdays.
                  </p>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    Small businesses often lack a direct communication method with their customers.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img className="mt-8 lg:mt-0 solution-image" src="/problem.svg" alt="problem"></img>
              </div>
            </div>
            <div className="mt-24 lg:flex lg:flex-row-reverse lg:items-center" data-aos="fade-up" data-aos-delay="250">
              <div className="lg:w-1/2 lg:flex lg:justify-center">
                <div className="flex flex-col">
                  <h2 className="questrial font-bold text-white text-4xl">Benefact solves both problems</h2>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    We help small businesses communicate weekly deals to customers via text to boost revenue when it’s needed most.
                  </p>
                  <p className="text-gray-300 border-l-4 border-gray-300 pl-2 mt-6">
                    Forget about newspaper ads, SEO marketing, and email chains — our direct-to-customer texting solution gets you right in front of your customers instantly.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img className="mt-8 lg:mt-0 solution-image" src="/solution.svg" alt="solution"></img>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-section-reverse md:block hidden"></div>
        <section className="mb-20">
          <div className="container mx-auto px-3 pt-12 lg:px-5">
            <h3 className="questrial uppercase text-gray-600 tracking-widest">Built for small businesses</h3>
            <h2 className="questrial text-4xl mt-6 mb-12 font-bold">The best way to reach and retain your customers.</h2>
            <CycleSelect className="hidden lg:flex"/>
            <div className="lg:hidden flex flex-col">
              <div className="pb-12">
                <img className="h-28" src="/scan.png" alt="scan"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Join the club</h3>
                  <p className="mt-2 text-gray-600">Customer scans a QR code on a tabletop display to subscribe to your exclusive texting group</p>
                </div>
              </div>
              <div className="pb-12">
                <div className="bg-purple-100 h-32 w-32 rounded-full flex justify-center items-center">
                  <img className="h-28" src="/text.png" alt="text"></img>
                </div>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Receive sweet deals</h3>
                  <p className="mt-2 text-gray-600">Once a week, we’ll send your subscribers your “deal of the week” to incentivize them to shop during your business’s lag days (e.g. Mon-Wed)</p>
                </div>
              </div>
              <div className="pb-12">
                <img className="h-28" src="/grow.png" alt="grow"></img>
                <div className="flex flex-col py-6">
                  <h3 className="questrial text-2xl font-bold border-l-4 pl-2 border-black">Redeem and spend</h3>
                  <p className="mt-2 text-gray-600">Every time a customer comes in to redeem their deal, they’ll spend more money on top of their deal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-3 lg:px-5 pt-16 pb-12 flex justify-center">
            <RevenueCalculator className="lg:w-1/2 md:w-2/3 w-full"/>
          </div>
        </section>
        <section className="text-gray-600 bg-purple-50">
          <div className="container px-3 lg:px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="text-4xl font-bold questrial mb-2">Simple, transparent pricing</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">$1/subscriber/month. Super simple pricing that scales with your business.</p>
            </div>
            <div className="flex justify-center">
              <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-purple-500 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$1</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">/subscriber/mo*</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Custom messages to customers
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Complementary tabletop displays to onboard customers
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Pay $0 upfront
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>24/7 support
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>Free cancellation anytime
                  </p>
                  <a href="javascipt:void(0)" data-cb-type="checkout" data-cb-item-0="Flex-USD-Monthly">
                    <button className="flex items-center mt-auto text-white bg-purple-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-purple-600 rounded transition duration-300">
                      Let's do this!
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </a>
                  <p className="text-xs text-gray-500 mt-3">*plus standard processing fees</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black">
          <div className="container mx-auto px-3 lg:px-5 pt-16 pb-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 text-white text-center questrial text-4xl font-bold mb-8 md:mb-0">Any questions?</div>
              <div className="md:w-1/2 flex flex-col items-center">
                <div>
                  <div className="flex">
                    <i className="bi-envelope text-white mr-3"></i>
                    <p className="text-white">team@benefact.co</p>
                  </div>
                  <div className="mt-6 flex">
                    <i className="bi-telephone text-white mr-3"></i>
                    <p className="text-white">(951)-567-6665</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-white mt-12">© 2021 Benefact</div>
          </div>
        </section>
      </div>
    </>
  )
}
