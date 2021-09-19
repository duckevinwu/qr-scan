import React from 'react'

export default class RevenueCalculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sliderValue: "0",
      raised: "0",
      earned: "0"
    }

    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleSliderChange(e) {
    let value = e.target.value;
    let earned = Math.max(value * 5.4, 0);
    earned = earned.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let raised = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    this.setState({
      sliderValue: value,
      raised: raised,
      earned: earned
    })
  }

  render() {
    return (
      <div className={`${this.props.className} flex flex-col text-center`}>
        <h3 className="text-4xl questrial font-bold">It's time to 5x your revenue</h3>
        <p className="mt-8 text-center md:text-left">See how much you can earn based on the number of customers we subscribe to your texting group!</p>
        <div className="flex flex-col mt-12">
          <div className="flex">
            <p className="text-lg w-3/5 text-left sm:w-full">Number of subscribers</p>
            <p className="ml-auto text-lg">{`${this.state.raised}`}</p>
          </div>
          <div className="slidecontainer mt-2">
            <input className="slider" type="range" min="0" max="2000" value={this.state.sliderValue} onChange={this.handleSliderChange}/>
          </div>
        </div>
        <div className="mt-12 mb-6">
          <h4 className="text-3xl questrial mb-6">Your additional monthly revenue</h4>
          <div className="p-6 shadow-lg bg-black rounded-md">
            <p className="text-purple-400 text-6xl">{`$${this.state.earned}`}</p>
          </div>
        </div>
        <div className="mb-12">
          <p className="text-sm text-gray-500 sm:mx-6">
            *This assumes that 90% of your customers open the texts we send, 15% of them come in to redeem their deal, and each customer that comes in spends an average of $10 on top of their deal.
            All of these values are conservative, as we strive to achieve an open rate of 98%, a conversion rate of 25%, and an average spend of at least $20.
          </p>
        </div>
        <a href="/">
          <button className="transition duration-300 ease-in-out text-white bg-purple-600 border-0 py-3 px-6 focus:outline-none rounded hover:bg-purple-500 cursor-pointer">Get started <i className="bi-chevron-right ml-6"></i></button>
        </a>
      </div>
    )
  }
}
