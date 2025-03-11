import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import { Button } from "./ui/button";

const spaces = [
  { id: 1, title: "Lounge", image: "/assets/po1.jpg" },
  { id: 2, title: "Bedroom", image: "/assets/po2.jpg" },
  { id: 3, title: "Living Room", image: "/assets/po3.jpg" },
];

const colors = [
  { id: 1, title: "Lounge", image: "/assets/po1.jpg" },
  { id: 2, title: "Bedroom", image: "/assets/po2.jpg" },
  { id: 3, title: "Living Room", image: "/assets/po3.jpg" },
];

const furnitures = [
  { id: 1, title: "Lounge", image: "/assets/po1.jpg" },
  { id: 2, title: "Bedroom", image: "/assets/po2.jpg" },
  { id: 3, title: "Living Room", image: "/assets/po3.jpg" },
];

const implementations = [
  { id: 1, title: "Lounge", image: "/assets/po1.jpg" },
  { id: 2, title: "Bedroom", image: "/assets/po2.jpg" },
  { id: 3, title: "Living Room", image: "/assets/po3.jpg" },
];

const Installations = [
  { id: 1, title: "Lounge", image: "/assets/po1.jpg" },
  { id: 2, title: "Bedroom", image: "/assets/po2.jpg" },
  { id: 3, title: "Living Room", image: "/assets/po3.jpg" },
];

const HomePortfolio = () => {
  return (
    <div className="bg-white px-7 py-10">

      <div className=" container min-h-screen flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto px-4">
          {/* Tabs Section */}
          <Tabs
            defaultValue="space"
            className="flex flex-col xl:flex-row gap-12"
          >
            {/* Tabs List - Responsive */}
            <div className="py-20 md:py-18">
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 py-10 ">
                <TabsTrigger value="space">Space Planning</TabsTrigger>
                <TabsTrigger value="color">Color Consultation</TabsTrigger>
                <TabsTrigger value="furniture">Furniture Selection</TabsTrigger>
                <TabsTrigger value="implementation">Implementation</TabsTrigger>
                <TabsTrigger value="installation">Installation</TabsTrigger>
              </TabsList>
            </div>

            {/* Tabs Content */}
            <div className="flex-1 min-h-[90vh]">
              <TabsContent value="space" className="w-full">
                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {spaces.map((space) => (
                    <div
                      key={space.id}
                      className="relative rounded-lg overflow-hidden group  transition-shadow"
                    >
                      <div className="aspect-w-4 aspect-h-3">
                        <Image
                          src={space.image}
                          alt={space.title}
                          width={400}
                          height={300}
                          className="object-cover rounded-lg w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                        {space.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-8">
                  <Button className="px-8 py-3 border border-[#3D342A] text-[#3D342A] font-semibold rounded-md shadow-md hover:bg-[#3D342A] hover:text-white transition duration-300">
                    See More
                  </Button>
                </div>
              </TabsContent>

              {/* Repeat for other tabs */}
              <TabsContent value="color" className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {colors.map((color) => (
                    <div
                      key={color.id}
                      className="relative rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-w-4 aspect-h-3">
                        <Image
                          src={color.image}
                          alt={color.title}
                          width={400}
                          height={300}
                          className="object-cover rounded-lg w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                        {color.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="px-8 py-3 border border-[#3D342A] text-[#3D342A] font-semibold rounded-md shadow-md hover:bg-[#3D342A] hover:text-white transition duration-300">
                    See More
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="furniture" className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {furnitures.map((furniture) => (
                    <div
                      key={furniture.id}
                      className="relative rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-w-4 aspect-h-3">
                        <Image
                          src={furniture.image}
                          alt={furniture.title}
                          width={400}
                          height={300}
                          className="object-cover rounded-lg w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                        {furniture.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="px-8 py-3 border border-[#3D342A] text-[#3D342A] font-semibold rounded-md shadow-md hover:bg-[#3D342A] hover:text-white transition duration-300">
                    See More
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="implementation" className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {implementations.map((implementation) => (
                    <div
                      key={implementation.id}
                      className="relative rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-w-4 aspect-h-3">
                        <Image
                          src={implementation.image}
                          alt={implementation.title}
                          width={400}
                          height={300}
                          className="object-cover rounded-lg w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                        {implementation.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="px-8 py-3 border border-[#3D342A] text-[#3D342A] font-semibold rounded-md shadow-md hover:bg-[#3D342A] hover:text-white transition duration-300">
                    See More
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="installation" className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {Installations.map((installation) => (
                    <div
                      key={installation.id}
                      className="relative rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-w-4 aspect-h-3">
                        <Image
                          src={installation.image}
                          alt={installation.title}
                          width={400}
                          height={300}
                          className="object-cover rounded-lg w-full h-full"
                        />
                      </div>
                      <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                        {installation.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button className="px-8 py-3 border border-[#3D342A] text-[#3D342A] font-semibold rounded-md shadow-md hover:bg-[#3D342A] hover:text-white transition duration-300">
                    See More
                  </Button>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
