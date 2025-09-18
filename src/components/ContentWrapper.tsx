"use client";

import { useContentLoading } from '@/content/useContent';
import LoadingSplash from './LoadingSplash';

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  const isLoading = useContentLoading();

  return (
    <>
      <LoadingSplash isLoading={isLoading} />
      <div className={isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  );
}