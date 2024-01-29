import PropTypes from "prop-types";
import { Card, CardContent, Divider, SvgIcon } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { Chart } from "../Chart";
import { red } from "@mui/material/colors";

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: true,
      },
    },
    colors: [
      theme.palette.primary.main,
      alpha(theme.palette.primary.main, 0.25),
    ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: "lightgrey",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },

    plotOptions: {
      bar: {
        columnWidth: "20px",
      },
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 1,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: "blue",
        show: true,
      },
      categories: [
        "Total Claim Approved",
        "Emergency Cases",
        "Pending Files",
        "Number Of Claims",
      ],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 500,
      tickAmount: 10,
      labels: {
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };
};

export const ChartView = (props: any) => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();

  return (
    <Card sx={sx}>
      {/* <CardHeader title="" /> */}
      <CardContent>
        <Chart
          height={350}
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="100%"
        />
      </CardContent>
      <Divider />
      {/* <CardActions sx={{ justifyContent: "flex-end" }}></CardActions> */}
    </Card>
  );
};

ChartView.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
};
