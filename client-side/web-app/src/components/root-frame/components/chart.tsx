import { BarChart, Bar } from 'recharts';

type Props = {
  title: string;
  data: Array<{
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }>;
  dateKey: string;
};

export function Chart(props: Props) {
  return (
    <>
      <div className="chart">
        <h1 className="chartTitle">{props.title}</h1>
        <BarChart width={150} height={40} data={props.data}>
          <Bar dataKey={props.dateKey} fill="#8884d8" />
        </BarChart>
      </div>
    </>
  );
}
