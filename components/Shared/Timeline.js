import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import TimelineTooltip from "./TimelineTooltip";
import numberFormatter from "../../functions/numberFormatter";

const dateFormatter = (str) => {
  const date = new Date(str);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const Timeline = ({ data, windowLength = 1, timelineHeight = 400 }) => {
  // Smoothing timeline because of extreme peaks and oscillations
  let smoothedData;

  // Creating a triangular window function

  if (windowLength === 1 || typeof windowLength !== "number") {
    smoothedData = data;
  } else {
    let weights = [];
    for (let n = 0; n < windowLength; n++) {
      weights.push(1 - Math.abs((2 * (n - windowLength / 2)) / windowLength));
    }

    const weightSum = weights.reduce((acc, item) => acc + item);

    for (let weightIdx = 0; weightIdx < weights.length; weightIdx++) {
      weights[weightIdx] /= weightSum;
    }

    const weightIdxOffset = Math.floor(weights.length / 2);

    smoothedData = data.map((item, dataIdx, array) => {
      let values = [];
      for (let weightIdx = 0; weightIdx < weights.length; weightIdx++) {
        const valueIdx = dataIdx - weightIdxOffset + weightIdx;
        if (valueIdx < 0) {
          values.push(array[0].value);
        } else if (valueIdx > array.length - 1) {
          values.push(array[array.length - 1].value);
        } else {
          values.push(array[valueIdx].value);
        }
      }

      const smoothedValue = values.reduce((accumulator, value, idx) => {
        return accumulator + value * weights[idx];
      }, 0);

      return {
        date: item.date,
        value: smoothedValue,
      };
    });
  }

  return (
    <ResponsiveContainer width="100%" height={timelineHeight}>
      <AreaChart
        width={500}
        height={400}
        data={smoothedData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--clr-primary)"
              stopOpacity={0.8}
            />
            <stop
              offset="100%"
              stopColor="var(--clr-primary)"
              stopOpacity={0.05}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.15} vertical={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickFormatter={dateFormatter}
          minTickGap={25}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tickCount={7}
          tickFormatter={(num) => numberFormatter(num, 3)}
        />
        <Tooltip content={<TimelineTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="var(--clr-primary)"
          fill="url(#color)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Timeline;
