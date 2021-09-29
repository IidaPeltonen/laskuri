//import logo from './logo.svg';
import './App.css'
import { useState } from 'react'

function App () {
  const [weight, setWeight] = useState()
  const [bottless, setBottless] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('female')

  const [litrat, setLitrat] = useState()
  const [grammat, setGrammat] = useState()
  const [poltto, setPoltto] = useState()
  const [jaljella, setJaljella] = useState()

  const [tulos, setTulos] = useState()

  function laskePitoisuus (e) {
    e.preventDefault()
    let litrat = 0
    let grammat = 0
    let poltto = 0
    let jaljella = 0
    let tulos = 0

    litrat = bottless * 0.33
    setLitrat(litrat)
    grammat = litrat * 8 * 4.5
    setGrammat(grammat)
    poltto = weight / 10
    setPoltto(poltto)
    jaljella = grammat - poltto * time
    setJaljella(jaljella)

    if (bottless > 15 && time < 6) {
      setTulos("Ihan liikaa!");
    }
    else {
      if (gender === 'male') {
        tulos = jaljella / (weight * 0.7)
        if (tulos < 0.1) {
          tulos = 0
        }
        setTulos(tulos.toFixed(2))
      } else {
        tulos = jaljella / (weight * 0.6)
        if (tulos < 0.1) {
          tulos = 0
        }
        setTulos(tulos.toFixed(2))
      }
    }
  }

  return (
    <>
      <h3>Laske veren alkoholipitoisuus</h3>
      <form onSubmit={laskePitoisuus}>
        <div>
          <label>Paino</label>
          <input
            name='weight'
            type='number'
            step='1'
            value={weight}
            onChange={e => setWeight(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Pullot</label>
          <select
            name='bottles'
            value={bottless}
            onChange={e => setBottless(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'> yli 15</option>
          </select>
        </div>
        <div>
          <label>Aika</label>
          <select
            name='time'
            value={time}
            onChange={e => setTime(e.target.value)}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
          </select>
        </div>
        <div id='radiot'>
          <label>Sukupuoli</label>
          <input
            type='radio'
            name='gender'
            value='male'
            onChange={e => setGender(e.target.value)}
          />
          <label>Mies</label>
          <input
            type='radio'
            name='gender'
            value='female'
            defaultChecked
            onChange={e => setGender(e.target.value)}
          />
          <label>Nainen</label>
        </div>
        <br></br>
        <button>Laske</button>
        <div>
          <br></br>
          <output>{tulos}</output>
        </div>
      </form>
    </>
  )
}

export default App
