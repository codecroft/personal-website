import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Software Engineer with many years of experience in C++/C# and real-time systems programming, spanning
            real-time 3D solutions, game development, robotics, and retail software. I also bring solid experience
            and understanding of backend and cloud architecture and programming, alongside frontend development, and
            I'm an active practitioner of AI-augmented development, shipping faster and smarter.
          </p>
          {/* <Button className="mt-5">Download CV</Button> */}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Frontend</h6>
              <p>90%</p>
            </div>
            <ProgressBar color="amber" progress={90} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Backend</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="blue" progress={60} />
          </div>

          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">AI/ML</h6>
              <p>60%</p>
            </div>
            <ProgressBar color="green" progress={60} />
          </div>
          <div className="">
            <div className="mb-3 flex justify-between">
              <h6 className="font-semibold">Mobile App</h6>
              <p>70%</p>
            </div>
            <ProgressBar color="rose" progress={70} />
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Many</h2>
            <p className="mt-1">Cup of Coffee</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Even More</h2>
            <p className="mt-1">Satisfied clients</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
