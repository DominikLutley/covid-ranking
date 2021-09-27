import styles from "../../styles/Countries/Chart.module.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import numberFormatter from "../../functions/numberFormatter";
import CountryTooltip from "./CountryTooltip";
import { useRouter } from "next/dist/client/router";

const Chart = ({ data, activeTab }) => {
  const router = useRouter();
  const topCases = data[0].displayValue;

  return (
    <div className={styles.container}>
      <ResponsiveContainer width={10000} height="100%">
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, bottom: 60, left: 0 }}
          onClick={(data) => {
            const country = data.activePayload[0].payload.code;
            router.push(`/country/${country}`);
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            opacity={0.75}
            vertical={false}
          />
          <XAxis
            axisLine={false}
            dataKey="country"
            angle="-45"
            textAnchor="end"
            minTickGap={-10000}
            height={60}
          />
          <YAxis
            domain={[0, topCases * 1.1]}
            tickFormatter={(num) => {
              const formattedNum = numberFormatter(num, 0);
              if (activeTab === "cases" || activeTab === "deaths") {
                return formattedNum;
              } else {
                return `${formattedNum} %`;
              }
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CountryTooltip activeTab={activeTab} />} />
          <Legend />
          <Bar
            dataKey="displayValue"
            fill="var(--clr-primary)"
            barSize={50}
            legendType="none"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
