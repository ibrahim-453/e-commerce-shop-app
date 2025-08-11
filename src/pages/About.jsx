import about from "../assets/aboutimg.jpeg";

function About() {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="mx-auto py-24 sm:py-32 max-w-7xl flex justify-center items-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase">
            About Us
          </h1>
        </div>
      </div>
      <div className="w-full bg-white text-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <img
              src={about}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              alt="Packaging Photo"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-l-4 border-black pl-4">
              From Where We Started
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              odit alias beatae, officiis debitis error molestias,
              necessitatibus, aspernatur pariatur fuga libero nostrum voluptate
              deserunt fugiat dolore ad atque maiores rem?
              <br />
              <br />
              Beatae sit, suscipit obcaecati incidunt eos voluptatibus
              dignissimos veritatis cum numquam reprehenderit. Accusamus
              possimus tenetur nulla obcaecati illum pariatur, quod neque quas
              sint perspiciatis, nemo, dolores error et fugiat facilis.
              <br />
              <br />
              Praesentium similique voluptates sunt quod id suscipit architecto
              temporibus natus optio vel itaque maiores, aliquam deserunt, ipsum
              corrupti repellat aut iusto blanditiis.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-wide mb-12">
          Our Vision
        </h1>
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="bg-white text-black rounded-xl p-6 cursor-pointer shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="font-semibold text-xl sm:text-2xl mb-3">
              Best Products
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium rerum reiciendis vitae tempora quod non similique
              sequi eius consequatur voluptas.
            </p>
          </div>
          <div className="bg-white text-black rounded-xl p-6 cursor-pointer shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="font-semibold text-xl sm:text-2xl mb-3">
              Customer Satisfaction
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              voluptatum voluptates maiores illo quibusdam est consequatur quia
              temporibus.
            </p>
          </div>
          <div className="bg-white text-black rounded-xl p-6 cursor-pointer shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="font-semibold text-xl sm:text-2xl mb-3">
              Authentic Products
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus impedit totam neque ipsam ratione nesciunt iure
              vel?
            </p>
          </div>
          <div className="bg-white text-black rounded-xl p-6 cursor-pointer shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <h3 className="font-semibold text-xl sm:text-2xl mb-3">
              Trusted & Secure Products
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate voluptas ullam nihil eum ex cumque error dignissimos
              natus maxime.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
