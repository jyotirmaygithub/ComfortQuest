import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer(){
  return (
    <div className="flex  w-full justify-center bg-blue-100 pb-8">
      <div className="flex w-full max-w-screen-xl flex-col items-center px-6">
        {/* grid for links */}
        <div className="grid  w-full grid-cols-1 gap-4 py-8 text-sm md:grid-cols-3 ">
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Support</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Help Center
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Get help with a safety issue
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Air cover
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Anti-discrimination
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Disablity support
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Cancellation options
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Report neighbourhood concern
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <strong className="font-medium">Hosting</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                ComfortQuest your home
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                AirCover for Hosts
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Hosting resources
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Community forum
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Hosting responsibly
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <strong className="font-medium">ComfortQuest</strong>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Newsroom
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                New features
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Careers
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                Investors
              </span>
            </p>
            <p>
              <span className="cursor-pointer font-normal text-gray-700 decoration-1 underline-offset-1 hover:underline">
                ComfortQuest.org emergency stays
              </span>
            </p>
          </div>
        </div>

        <div className="my-4 w-full border-[1px] border-gray-200"></div>

        <div className="flex w-full flex-col items-center justify-between gap-4 md:gap-0 lg:flex-row">
          <div className="mt-4 flex w-full justify-between gap-10 md:order-last md:w-auto">
            <div className="flex text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              English(US) <span className="mx-4">$ Dollar</span>
            </div>
            <div className="flex gap-3">
              <FacebookIcon/>
              <TwitterIcon/>
              <InstagramIcon/>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2 px-1 font-normal text-gray-700 md:w-auto md:flex-row md:items-center md:gap-8">
            <p className="text-sm">&copy; 2024 ComfortQuest, Inc.</p>
            <div>
              <ul className=" flex gap-6 text-sm text-gray-700">
                <li className="cursor-pointer text-gray-700 decoration-1 underline-offset-1 hover:underline md:list-disc">
                  Privacy
                </li>
                <li className="cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline">
                  Terms
                </li>
                <li className="cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline">
                  Sitemap
                </li>
                <li className="cursor-pointer list-disc text-gray-700 decoration-1 underline-offset-1 hover:underline">
                  Company details
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

