import { Link } from "react-router-dom"
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const features = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud Solutions",
  "DevOps Services",
  "AI & Machine Learning",
]

const stats = [
  { id: 1, name: "Projects Completed", value: "500+" },
  { id: 2, name: "Satisfied Clients", value: "200+" },
  { id: 3, name: "Team Members", value: "50+" },
  { id: 4, name: "Years of Experience", value: "10+" },
]

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "GrowHub Solutions transformed our business with their innovative software solutions. Their team's expertise and dedication are unmatched.",
  },
  {
    name: "Jane Smith",
    role: "CTO, InnovateTech",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with GrowHub was a game-changer for our startup. They delivered a high-quality product that exceeded our expectations.",
  },
  {
    name: "Mike Johnson",
    role: "Founder, DataDrive",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The AI solutions provided by GrowHub have significantly improved our data analysis capabilities. Highly recommended!",
  },
]

const clients = [
  { name: "Client 1", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 2", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 3", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 4", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 5", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Client 6", logo: "/placeholder.svg?height=80&width=120" },
]

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <>
      <SEO
        title="Home"
        description="GrowHub Solutions - Your partner for innovative software solutions"
        keywords="software development, web applications, mobile apps, cloud solutions"
      />
      <div className="relative isolate">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pt-14"
        >
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-growhub-red-500 to-growhub-red-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Innovative Software Solutions for Your Business Growth
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At GrowHub Solutions, we transform your ideas into powerful, scalable, and user-friendly software
                  applications. Let's build the future of your business together.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/contact"
                    className="rounded-md bg-growhub-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-growhub-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red-600"
                  >
                    Get started
                  </Link>
                  <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16 flow-root sm:mt-24"
              >
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="/placeholder.svg?height=600&width=1200"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Feature section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 sm:mt-56"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-growhub-red-600">Everything you need</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Software Solutions
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From custom software development to cloud solutions, we offer a wide range of services to help your
                business thrive in the digital world.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  className="relative pl-9"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <dt className="inline font-semibold text-gray-900">
                    <CheckCircleIcon
                      className="absolute left-1 top-1 h-5 w-5 text-growhub-red-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </dt>
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 sm:mt-56"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Trusted by businesses worldwide
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Our track record speaks for itself. Here's what we've achieved so far.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    className="flex flex-col bg-gray-400/5 p-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>

        {/* Testimonials section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 sm:mt-56 bg-growhub-red-50"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our clients say</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Don't just take our word for it. Here's what our clients have to say about working with GrowHub
                  Solutions.
                </p>
              </div>
              <div className="mt-16">
                <Slider {...sliderSettings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-4">
                      <blockquote className="text-center">
                        <div className="mx-auto h-20 w-20 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="mt-6 text-lg font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="mt-2 text-base text-gray-600">{testimonial.role}</p>
                        <p className="mt-4 text-lg italic text-gray-600">"{testimonial.quote}"</p>
                      </blockquote>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clients section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 sm:mt-56"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Clients</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  We're proud to work with some of the most innovative companies across various industries.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                {clients.map((client, index) => (
                  <motion.div
                    key={index}
                    className="col-span-1 flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <img className="h-12 object-contain" src={client.logo || "/placeholder.svg"} alt={client.name} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8"
        >
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
          </svg>
          <div
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-growhub-red-500 to-growhub-red-200 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to take your business to the next level?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Let's discuss how our innovative software solutions can help your business grow and succeed in the digital
              age.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-growhub-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-growhub-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growhub-red-600"
              >
                Contact us
              </Link>
              <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

