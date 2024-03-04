"use client";
import React, { useEffect, useRef } from "react";
import BackendLayout from "@/app/layouts/BackendLayout";
import ApexCharts from "apexcharts";
import DataTable from "./components/DataTable";

export default function Dashboard() {
  const salesChartSparkRef = useRef(null);
  const expensesChartSparkRef = useRef(null);
  const profitChartSparkRef = useRef(null);
  const ordersChartSparkRef = useRef(null);
  const monthlyOrdersChartSparkRef = useRef(null);
  const itemWiseChartSparkRef = useRef(null);
  // const monthlySalesChartSparkRef = useRef(null);
  useEffect(() => {
    const randomizeArray = (array) => {
      return array.map(() => Math.floor(Math.random() * 100));
    };
    const sparklineData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const colors = [
      "#5B8CFF",
      "#26E7A6",
      "#FEBC3B",
      "#FF6178",
      "#B36AD1",
      "#738095",
      "#46B3A9",
      "#D830EB",
    ];
    // sale options
    var salesChartSparkOptions = {
      series: [
        {
          data: randomizeArray(sparklineData),
        },
      ],
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#DCE6EC"],
      title: {
        text: "$424,652",
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Sales",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    };
    // expense options
    var expensesChartSparkOptions = {
      series: [
        {
          data: randomizeArray(sparklineData),
        },
      ],
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#DCE6EC"],
      title: {
        text: "$424,652",
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Expenses",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    };
    // profit options
    var profitChartSparkOptions = {
      series: [
        {
          data: randomizeArray(sparklineData),
        },
      ],
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#3399ff"],
      title: {
        text: "$424,652",
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Profits",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    };
    // orders options
    var ordersChartSparkOptions = {
      series: [
        {
          data: randomizeArray(sparklineData),
        },
      ],
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#DCE6EC"],
      title: {
        text: "$424,652",
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Orders",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    };
    // monthly orders options
    var monthlyOrdersChartSparkOptions = {
      series: [
        {
          name: "Servings",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
        },
      ],
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "Bananas are good",
            },
          },
        ],
      },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas",
        ],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "Servings",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    };
    var itemWiseChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
    // monthly sales options
    // var monthlySalesChartSparkOptions = {
    //   series: [
    //     {
    //       data: [21, 22, 10, 28, 16, 21, 13, 30],
    //     },
    //   ],
    //   options: {
    //     chart: {
    //       height: 350,
    //       type: "bar",
    //       events: {
    //         click: function (chart, w, e) {
    //           // console.log(chart, w, e)
    //         },
    //       },
    //     },
    //     colors: colors,
    //     plotOptions: {
    //       bar: {
    //         columnWidth: "45%",
    //         distributed: true,
    //       },
    //     },
    //     dataLabels: {
    //       enabled: false,
    //     },
    //     legend: {
    //       show: false,
    //     },
    //     xaxis: {
    //       categories: [
    //         ["John", "Doe"],
    //         ["Joe", "Smith"],
    //         ["Jake", "Williams"],
    //         "Amber",
    //         ["Peter", "Brown"],
    //         ["Mary", "Evans"],
    //         ["David", "Wilson"],
    //         ["Lily", "Roberts"],
    //       ],
    //       labels: {
    //         style: {
    //           colors: colors,
    //           fontSize: "12px",
    //         },
    //       },
    //     },
    //   },
    // };
    // total Sales Chart
    var salesChart = new ApexCharts(
      salesChartSparkRef.current,
      salesChartSparkOptions
    );
    // total expenses chart
    var expensesChart = new ApexCharts(
      expensesChartSparkRef.current,
      expensesChartSparkOptions
    );
    // profit chart
    var profitChart = new ApexCharts(
      profitChartSparkRef.current,
      profitChartSparkOptions
    );
    // total order chart
    var ordersChart = new ApexCharts(
      ordersChartSparkRef.current,
      ordersChartSparkOptions
    );
    //  monthly orders chart
    var monthlyOrdersChart = new ApexCharts(
      monthlyOrdersChartSparkRef.current,
      monthlyOrdersChartSparkOptions
    );
    //  items wise chart
    var itemWiseChart = new ApexCharts(
      itemWiseChartSparkRef.current,
      itemWiseChartOptions
    );
    //  monthly sales chart
    // var monthlySalesChart = new ApexCharts(
    //   monthlySalesChartSparkRef.current,
    //   monthlySalesChartSparkOptions
    // );

    salesChart.render();
    expensesChart.render();
    profitChart.render();
    ordersChart.render();
    monthlyOrdersChart.render();
    itemWiseChart.render();
    // monthlySalesChart.render();

    return () => {
      salesChart.destroy();
      expensesChart.destroy();
      profitChart.destroy();
      ordersChart.destroy();
      monthlyOrdersChart.destroy();
      itemWiseChart.destroy();
      // monthlySalesChart.destroy();
    };
  }, [])
  return (
    <BackendLayout>
      <div className="px-10 py-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 lg:gap-y-0 gap-y-5">
          <div
            ref={salesChartSparkRef}
            className="bg-slate-50 shadow-md rounded-md"
          ></div>
          <div
            ref={expensesChartSparkRef}
            className="bg-slate-50 shadow-md rounded-md"
          ></div>
          <div
            ref={profitChartSparkRef}
            className="bg-slate-50 shadow-md rounded-md"
          ></div>
          <div
            ref={ordersChartSparkRef}
            className="bg-slate-50 shadow-md rounded-md"
          ></div>
        </div>
        <div className="py-10">
          <div
            ref={monthlyOrdersChartSparkRef}
            className="w-full bg-slate-50 p-5 rounded-md shadow-md"
          ></div>
        </div>
        <div className="pb-10 flex">
          <div
            ref={itemWiseChartSparkRef}
            className=" bg-slate-50 p-5 rounded-md shadow-md"
          ></div>
          {/* <div className="xl:w-8/12 w-4/12">2</div> */}
        </div>
        <div className="pb-10 bg-slate-50 px-10 py-5 rounded-md">
          <DataTable />
        </div>
      </div>
    </BackendLayout>
  );
}
