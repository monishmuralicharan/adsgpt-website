import React from 'react';
import { Link } from 'react-router-dom';
import Typography from './ui/typography';

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link to="/" className="pointer flex items-center">
            <img src="/adsgpt-logo.png" width={25} className="mr-3" />
            <Typography className="!text-white !text-base font-medium">
              AdsGPT
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          <a
            href="mailto:monish.muralicharan@gmail.com?subject=AdsGPT%20Inquiry&body=Specify%20if%20you%20are%20contacting%20us%20as%20a%20potential%20advertiser%20or%20custom%20GPT%20creator."
            target="_blank"
            rel="noopener noreferrer"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Contact Us
            </Typography>
          </a>
          <Link to="/terms-of-service" className="pointer block w-fit flex-1">
            <Typography variant="p" className="w-max">
              Terms of service
            </Typography>
          </Link>
          <a
            href="https://www.termsfeed.com/live/5e17bba2-527b-4657-a21a-3883c5a85b71"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer block w-fit"
          >
            <Typography variant="p">Privacy Policy</Typography>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
