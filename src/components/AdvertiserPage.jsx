import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import Typography from './ui/typography';
import Feature from './ui/feature';
import { DollarSign, Target, Timer } from 'lucide-react';

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Generate Quality Leads on AI Platforms
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Sign up, Create an Ad, and Drive Traffic to your Product
        </Typography>
        <a
          href="/signup-advertiser"
          rel="noopener noreferrer"
        >
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </a>
        <img
          className="mt-8 rounded-xl"
          width={1048}
          height={632}
          alt="Pandem.dev hero image"
          src="/adsgpt-website-pic.png"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick solutions, less stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Easy Set Up"
              description="Just upload your ad information and watch the leads start flowing to your product"
            />
            <Feature
              icon={<Target size={24} />}
              headline="Customized Ads"
              description="Your products are targeted to specific users to generate the highest lead conversion rate"
            />
            <Feature
              icon={<DollarSign size={24} />}
              headline="Post Pay Model"
              description="Our goal is to drive the best traffic to your product, so you only pay for the leads we generate"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Low Cost, High Impact Advertising
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Get access to the highly targeted advertising using AI and LLM platforms
          </Typography>
          <img
            className="mt-4 rounded-xl"
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/adsgpt-website-pic-2.png"
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>
            Chat with us through email and schedule a call
          </div>
          <a
            href="mailto:monish.muralicharan@gmail.com?subject=AdsGPT%20Inquiry&body=Specify%20if%20you%20are%20contacting%20us%20as%20a%20potential%20advertiser%20or%20custom%20GPT%20creator."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="tiny" variant="ghost">
              {`Contact Us`}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
