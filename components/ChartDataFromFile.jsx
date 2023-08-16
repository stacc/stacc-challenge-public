import styles from "./Chart.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";

// Reading data directly from a JSON file
import data from "../data/consumption.json";

const convertedData = data.map((item) => {
  // convert from and to, to hours
  item.from = new Date(item.from).getHours();
  item.to = new Date(item.to).getHours();
  return {
    period: `${item.from} - ${item.to}`,
    consumption: item.consumption,
    consumptionUnit: item.consumptionUnit,
  };
});

export default function ChartDataFromFile() {
  return (
    <div className={styles.container}>
      <LineChart id="123" width={1000} height={400} data={convertedData}>
        <XAxis dataKey="period">
          <Label value="Period" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Consumption (KWh)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
