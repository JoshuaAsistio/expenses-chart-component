//chart elements
const firstChart = document.getElementById('chart1');
const secondChart = document.getElementById('chart2');
const thirdChart = document.getElementById('chart3');
const fourthChart = document.getElementById('chart4');
const fifthChart = document.getElementById('chart5');
const sixthChart = document.getElementById('chart6');
const seventhChart = document.getElementById('chart7');

//hover text elements
const firstHover = document.getElementById('hover1');
const secondHover = document.getElementById('hover2');
const thirdHover = document.getElementById('hover3');
const fourthHover = document.getElementById('hover4');
const fifthHover = document.getElementById('hover5');
const sixthHover = document.getElementById('hover6');
const seventhHover = document.getElementById('hover7');

//array containing chart data
const chartData = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

//hover event listeners for each chart 
firstChart.addEventListener('mouseover', () => {
    firstHover.textContent = chartData[0].amount;
    firstHover.removeAttribute('class');
    firstHover.setAttribute('class', 'hover-text');
})

firstChart.addEventListener('mouseout', () => {
    firstHover.setAttribute('class', 'hide');
})

secondChart.addEventListener('mouseover', () => {
    secondHover.textContent = chartData[1].amount;
    secondHover.removeAttribute('class');
    secondHover.setAttribute('class', 'hover-text');
})

secondChart.addEventListener('mouseout', () => {
    secondHover.setAttribute('class', 'hide');
})

thirdChart.addEventListener('mouseover', () => {
    thirdHover.textContent = chartData[2].amount;
    thirdHover.removeAttribute('class');
    thirdHover.setAttribute('class', 'hover-text');
})

thirdChart.addEventListener('mouseout', () => {
    thirdHover.setAttribute('class', 'hide');
})

fourthChart.addEventListener('mouseover', () => {
    fourthHover.textContent = chartData[3].amount
    fourthHover.removeAttribute('class');
    fourthHover.setAttribute('class', 'hover-text');
})

fourthChart.addEventListener('mouseout', () => {
    fourthHover.setAttribute('class', 'hide');
})

fifthChart.addEventListener('mouseover', () => {
    fifthHover.textContent = chartData[4].amount;
    fifthHover.removeAttribute('class');
    fifthHover.setAttribute('class', 'hover-text');
})

fifthChart.addEventListener('mouseout', () => {
    fifthHover.setAttribute('class', 'hide');
})

sixthChart.addEventListener('mouseover', () => {
    sixthHover.textContent = chartData[5].amount;
    sixthHover.removeAttribute('class');
    sixthHover.setAttribute('class', 'hover-text');
})

sixthChart.addEventListener('mouseout', () => {
    sixthHover.setAttribute('class', 'hide');
})

seventhChart.addEventListener('mouseover', () => {
    seventhHover.textContent = chartData[6].amount;
    seventhHover.removeAttribute('class');
    seventhHover.setAttribute('class', 'hover-text');
})

seventhChart.addEventListener('mouseout', () => {
    seventhHover.setAttribute('class', 'hide');
})