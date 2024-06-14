import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import Typography from './ui/typography';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from './ui/drawer';
import { MenuIcon, X } from 'lucide-react';

function Header({ className }) {
  const location = useLocation();
  const items = [
    {
      href: 'mailto:monish.muralicharan@gmail.com?subject=AdsGPT%20Inquiry&body=Specify%20if%20you%20are%20contacting%20us%20as%20a%20potential%20advertiser%20or%20custom%20GPT%20creator.',
      title: 'Contact Us',
      openInNewTab: true
    }
  ];

  const getLogo = () => (
    <Link to="/" className="pointer flex items-center">
      <img src="/adsgpt-logo.png" width={25} className="mr-3 " />
      <Typography className="!text-white !text-base font-medium">
        AdsGPT
      </Typography>
    </Link>
  );

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      <Link to="/Login">
        <Typography variant="p">Login</Typography>
      </Link>
      <Link to="/signup-creator">
        <Button size="tiny" color="ghost">
          <Typography variant="p" className="text-black">
            Creator Sign Up
          </Typography>
        </Button>
      </Link>
      <Link to="/signup-advertiser">
        <Button size="tiny" color="ghost">
          <Typography variant="p" className="text-black">
            Advertiser Sign Up
          </Typography>
        </Button>
      </Link>
    </div>
  );

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            location.pathname === item.href || location.pathname.includes(item.href);
          return (
            <a
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography variant="p" className={selected ? 'text-primary' : ''}>
                {item.title}
              </Typography>
            </a>
          );
        })}
      </>
    );
  };

  return (
    <div className={`flex md:h-12 h-14 items-center justify-center w-full border-b ${className}`}>
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
