import SectionTitle from '@/components/shared/SectionTitle';
import { certifications } from '@/data/certifications';
import Image from 'next/image';
import Link from 'next/link';

const CertificationSection = () => {
  return (
    <>
      <SectionTitle>Certifications</SectionTitle>
      <div className="mt-10 grid gap-8 xs:grid-cols-2 md:grid-cols-4">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl bg-white text-center shadow-lg dark:bg-gray-700"
          >
            <div className="bg-white">
              <Image
                src={certification.image}
                height={384}
                width={512}
                layout="responsive"
                alt={certification.name}
              />
            </div>
            <div className="p-5 text-left">
              <h4 className="text-lg font-semibold dark:text-gray-200">{certification.name}</h4>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-300">{certification.issuer}</p>
              <Link href={certification.credentialUrl}>
                <a className="mt-3 inline-block text-sm font-semibold text-primary-500 hover:underline">
                  View Certificate
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CertificationSection;
