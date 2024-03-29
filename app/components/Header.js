// app/components/Header.js
import Image from 'next/image';
import companyLogo from '../../public/nameAndLogo.png';

export default function Header() {
  return (
    <div className="mb-16">
      <header className="flex items-center justify-center bg-white p-16">
        <Image src={companyLogo} alt="Company Logo" width={300} height={100} />
      </header>
      <div className="bg-blue-900 text-white py-8 px-4 mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">ROI Calculator</h1>
        <p className="mb-2">Calculate the Return on Investment (ROI) for your automation project.</p>
        <p className="mb-8">Fill in the required fields below to get an estimate of the potential savings and ROI.</p>
      </div>
    </div>
  );
}