// import './page.css'
import { CategoryScale, Chart as chartJs, LinearScale, LineElement, PointElement, } from "chart.js"
import { useEffect, useState } from "react"
import { Line } from 'react-chartjs-2'


chartJs.register(
    LineElement, LinearScale, CategoryScale, PointElement
)


export default function GraphicEarningMentor() {

    var baseUrl = "https://api.coinranking.com/v2/coins/?limit=5"
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"
    var apiKey = "coinranking9a1a26e3b7eb1f4370cd91fb1d1062849209e103a9e458ce"

    const [chart, setChart] = useState([])

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Controll-Allow-Origin': '*'
                }
            }).then((response) => {
                response.json().then((json) => {
                    console.log(json)
                    setChart(json.data)
                })
            }).catch((error) => {
                console.log(error);
            })
        }
        fetchCoins()
    }, [baseUrl, proxyUrl, apiKey])

    var data = {
        labels: chart?.coins?.map(x => x.name),
        datasets: [{
            label: `${chart?.coins?.length} Coins Available`,
            data: chart?.coins?.map(x => x.price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    }

    return (
        <div className="chart-earn">
            <p>Earnings</p>
            <Line className="chart"
                data={data}
            />
        </div>
    )
}