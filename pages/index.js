import CoinLists from '../components/CoinLists'
import SearchBar from '../components/SearchBar'
import Layout from '../components/Layouts'
import { useState } from 'react'
export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('')
  const allCoins = filteredCoins.filter(coin => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  })

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase())
  }
  return (
    <Layout >
      <div className="coin_app">
        <SearchBar type="text" placeholder="Input Text" onChange={handleChange} />
        <CoinLists filteredCoins={allCoins} />
      </div>
    </Layout>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}
