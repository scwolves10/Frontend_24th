import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";
import { ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import ReactDOM from "react-dom";
import { formatEther, formatUnits } from '@ethersproject/units';
import ConnectButton from "./components/ConnectButton";
import { Web3ReactProvider } from '@web3-react/core'

/*
import { GlobalStyle } from './global/GlobalStyle'
import { Balance } from './pages/Balance'
import { Prices } from './pages/Prices'
import { Block } from './dashboard/dapp/Loan'
import { Tokens } from './pages/Tokens'
import { Transactions } from './pages/Transactions'
import { SendEtherPage } from './pages/SendEtherPage'
import { NotificationsList } from './components/Transactions/History'
*/
const queryClient = new QueryClient();


const App = () => {
  return (
    <div>
      
      
      <Dashboard />
      
    </div>
  );
}
export default App;


import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'

export class MMApp extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "https://rinkeby.infura.io/v3/acda238b8d434de2840394eea3ad6df3")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="container">
        <h1l>Hello, World!</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}


