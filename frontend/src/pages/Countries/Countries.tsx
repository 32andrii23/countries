import { Card, CardHeader, CardTitle } from '@/components/ui/Card';
import { CountriesList } from './CountriesList';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';

export const Countries = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Countries of the World
          </CardTitle>
        </CardHeader>
      </Card>
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <CountriesList />
      </Suspense>
    </div>
  );
};
