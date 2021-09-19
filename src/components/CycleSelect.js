import React from 'react'
import '../../styles/globals.css'

export default class CycleSelect extends React.Component {
  constructor(props) {
    super(props);

    this.displayHidden = 'opacity-0'
    this.displayShow="opacity-1"
    this.divUnselected = 'text-gray-400 border-gray-300'
    this.divSelected = 'text-gray-100 bg-black border-black'

    this.state = {
      selected: '1'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let value = e.currentTarget.getAttribute('data-value');
    this.setState({
      selected: value
    })
  }

  render() {
    return (
      <div className={"flex w-full " + this.props.className}>
        <div className="w-2/5 flex items-center">
          <div className="flex flex-col">
            <div data-value="1" onClick={this.handleClick} className={`${this.state.selected === '1' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Join the club</h3>
                <p className="mt-2">Customer scans a QR code on a tabletop display to subscribe to your exclusive texting group</p>
              </div>
            </div>
            <div data-value="2" onClick={this.handleClick} className={`${this.state.selected === '2' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out mb-6 border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Receive sweet deals</h3>
                <p className="mt-2">Once a week, we’ll send your subscribers your “deal of the week” to incentivize them to shop during your business’s lag days (e.g. Mon-Wed)</p>
              </div>
            </div>
            <div data-value="3" onClick={this.handleClick} className={`${this.state.selected === '3' ? this.divSelected : this.divUnselected} cycle-select-box transition duration-200 ease-in-out border rounded-lg shadow-md p-3`}>
              <div className="flex flex-col">
                <h3 className="questrial text-2xl font-bold">Redeem and spend</h3>
                <p className="mt-2">Every time a customer comes in to redeem their deal, they’ll spend more money on top of their deal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <div className="grid">
            <div className={`${this.state.selected === '1' ? this.displayShow : this.displayHidden} transition duration-300 ease-in-out layer-image`}>
              <img src="/scan.png" alt="scan" className="select-image"></img>
            </div>
            <div className={`${this.state.selected === '2' ? this.displayShow : this.displayHidden} transition duration-300 ease-in-out layer-image`}>
              <img src="/text.png" alt="text" className="select-image"></img>
            </div>
            <div className={`${this.state.selected === '3' ? this.displayShow : this.displayHidden} flex transition duration-300 ease-in-out layer-image`}>
              <img src="/grow.png" alt="grow" className="select-image"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
