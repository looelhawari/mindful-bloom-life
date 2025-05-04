
import React, { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface FeatureDetailProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  isReversed?: boolean;
  bgClass?: string;
}

const FeatureDetail = ({
  icon,
  title,
  description,
  image,
  isReversed = false,
  bgClass = "bg-white"
}: FeatureDetailProps) => {
  return (
    <div className={`py-12 ${bgClass}`}>
      <div className="container px-4 md:px-6">
        <div className={`grid gap-6 lg:grid-cols-2 lg:gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                {icon}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{title}</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>
          </div>
          {image && (
            <div className="mx-auto flex w-full items-center justify-center p-4 lg:p-8">
              <Card className="w-full overflow-hidden rounded-xl border-0 shadow-lg">
                <img
                  alt={title}
                  className="aspect-video w-full object-cover"
                  src={image}
                />
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
