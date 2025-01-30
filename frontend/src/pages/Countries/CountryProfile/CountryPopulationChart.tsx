import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { formatPopulation } from '@/lib/utils';
import { PopulationDataDto } from '@/types';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

interface CountryPopulationChartProps {
  populationData: PopulationDataDto[];
}

export const CountryPopulationChart: React.FC<CountryPopulationChartProps> = ({
  populationData,
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Country Population Over Time</CardTitle>
        <CardDescription>
          Population growth from {populationData[0].year} to{' '}
          {populationData[populationData.length - 1].year}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            population: {
              label: 'Population',
              color: 'hsl(var(--chart-1))',
            },
          }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={populationData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={formatPopulation} />
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Year
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].payload.year}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Population
                            </span>
                            <span className="font-bold">
                              {formatPopulation(payload[0].value as number)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-population)"
                name="Population"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
