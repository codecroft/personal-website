import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import { Work } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
};

const getYoutubeVideoId = (url: string): string | null => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const YEAR_BY_TITLE: Record<string, string> = {
  'My Fantasy DJ': '2025',
  'Mouse Smasher': '2014',
  'Boom Boom Football': '2015',
  'Boom Boom Soccer': '2015',
  'Kill Shot Bravo': '2015',
  'Iron Maiden: Legacy of the Beast': '2016',
  'AWS Cloud Quest: Cloud Practitioner': '2021',
  'Company of Heroes 3': '2020',
  'Age of Empires IV': '2020',
  'Nissan In-Car HMI': '2024',
  'Unity Walmart Connect': '2025',
  'Image On Demand Server': '2024',
  'Machine Learning Projects': '2025',
  'Robotics Projects': '2022',
};

const HIDE_PREVIEW_TITLES = new Set([
  'Windows XP Embedded Security Application',
  'Robotics Projects',
  'Machine Learning Projects',
  'Image On Demand Server',
  'Personal Projects',
]);

type Props = {
  work: Work & {
    description: string;
    images: string[];
    publishedAt: string;
    previewUrl: string;
  };
};

const WorkDetail: React.FunctionComponent<Props> = ({ work }) => {
  const videoId = getYoutubeVideoId(work.previewUrl);
  const isWinXpEmbedded = work.title === 'Windows XP Embedded Security Application';
  const hideLivePreview = HIDE_PREVIEW_TITLES.has(work.title);
  const displayYear = YEAR_BY_TITLE[work.title];

  return (
    <AppLayout title="Work Detail">
      <div className="container">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{work.title}</h1>
          <p className="mt-4 flex items-center text-gray-400">
            {displayYear && <span className="mr-2">{displayYear}</span>}
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{work.category}</span>
          </p>
        </div>
        <div className="mt-10">
          {videoId ? (
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={work.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <>
              <Slider {...settings}>
                {work.images.map((image, index) => (
                  <div className="overflow-hidden rounded-xl" key={index}>
                    <Image src={image} height={720} width={1280} layout="responsive" alt={work.title} />
                  </div>
                ))}
              </Slider>
              {!hideLivePreview && (
                <div className="mt-6 flex justify-center">
                  <Link href={work.previewUrl}>
                    <a className="btn">{work.title === 'My Fantasy DJ' ? 'Get App' : 'Live Preview'}</a>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>

        <div className="my-10">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p className="mt-4">{work.description}</p>
          {work.subProjects && work.subProjects.length > 0 ? (
            <ul className="mt-6 list-disc space-y-6 pl-4">
              {work.subProjects.map((project, index) => (
                <li key={index}>
                  <p className="font-semibold">{project.name}</p>
                  <p className="mt-2">{project.summary}</p>
                  <ul className="mt-2 list-[circle] space-y-1 pl-4">
                    {project.featureList.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            !isWinXpEmbedded && (
              <>
                <h3 className="mt-10 text-xl font-semibold">Feature List</h3>
                <ul className="mt-4 list-disc pl-4">
                  {work.featureList.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )
          )}
        </div>

        <div className="my-10 rounded-lg bg-gray-50 py-3 shadow-md dark:bg-gray-700">
          <table className="w-full">
            <tbody>
              {work.attributes.map((attribute, index) => (
                <tr key={index}>
                  <td className="w-48 px-4 py-2 font-semibold">{attribute.name}</td>
                  <td>{attribute.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const work = works.find((work) => work.id === Number(id));
  if (work) {
    return {
      props: {
        work,
      },
    };
  }
  return {
    notFound: true,
  };
};
export default WorkDetail;
