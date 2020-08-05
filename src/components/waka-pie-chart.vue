<template>
  <div>
    <div ref="chartdiv" class="hello"> </div>
    <!-- eslint-disable-next-line -->
    <!-- <figure>
      <embed
        src="https://wakatime.com/share/@2f9ba85f-b06b-4880-b46a-39a6e950754d/69ddf3b5-538f-4fb7-a206-20c9ec0dbd8b.svg"
    /></figure> -->
  </div>
</template>

<script>
import { am4core, am4charts } from '@plugins/am4-plugin'
export default {
  name: 'WakaPieChart',
  mounted() {
    const chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)

    chart.paddingRight = 20

    const data = []
    let visits = 10
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
      data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits })
    }

    chart.data = data

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.renderer.minWidth = 35

    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.dateX = 'date'
    series.dataFields.valueY = 'value'

    series.tooltipText = '{valueY.value}'
    chart.cursor = new am4charts.XYCursor()

    const scrollbarX = new am4charts.XYChartScrollbar()
    scrollbarX.series.push(series)
    chart.scrollbarX = scrollbarX

    this.chart = chart
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
    }
  },
}
</script>

<style scoped>
.hello {
  width: 80%;
  height: 500px;
}
</style>
