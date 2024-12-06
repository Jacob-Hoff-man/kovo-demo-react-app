import { ReactElement, useState } from 'react'

type HomePageProps = {}

// input: how many dice throws
// button: trigger dice throws
// output text: how many times number 7 showed up as a percentage (2 decimal places)
// make a simulation and output the number times 7 was rolled

const rollDice = () => Math.floor(Math.random() * 6) + 1

const getRoll = (value: number, iterations?: number) => {
    if (!iterations) return 0
    let count = 0
    for (var i = 0; i < iterations; i++) {
        const die1 = rollDice()
        const die2 = rollDice()
        const totalCount = die1 + die2
        if (totalCount === value) count++
    }
    return count
}

const getPercentage = (numerator?: number, denominator?: number) => {
    if (!numerator || !denominator) return 0
    return (numerator / denominator * 100).toFixed(2)
}

const getAllRolls = (iterations: number): Record<number, number> => {
    const dieMap: Record<number, number> = {}
    for (var i = 0; i < iterations; i++) {
        const die1 = rollDice()
        const die2 = rollDice()
        const totalCount = die1 + die2
        if (dieMap[totalCount]) dieMap[totalCount] = dieMap[totalCount] + 1
        else dieMap[totalCount] = 1

    }
    return dieMap
}

const HomePage = ({ }: HomePageProps): ReactElement => {
    const [iterations, setIterations] = useState<number>()
    const [rollResult, setRollResult] = useState<number>()
    const [dieMap, setDieMap] = useState<Record<number, number>>()

    return (
        <p>
            <input onChange={(iters) => setIterations(Number(iters.target.value))} type="number"></input>
            <button onClick={() => setRollResult(getRoll(7, iterations))} >Calculate Roll Result</button>
            <button onClick={() => setDieMap(iterations ? getAllRolls(iterations) : {})} >Calculate All Roll Results</button>
            <p> iterations: {iterations}</p>
            <p> Roll Result Percentage: {getPercentage(rollResult, iterations)} %</p>
            <p> All Roll Result Percentages:</p>
            <ul>
                {
                    dieMap && Object.keys(dieMap).map((key) => <li key={key}> Die Value: {key}, Result Percentage: {getPercentage(dieMap[Number(key)], iterations)}</li>)
                }
            </ul>
        </p >
    )
}

export default HomePage