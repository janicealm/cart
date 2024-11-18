 
      
import React, { useState } from 'react';
import './Appa.css';

function App() {
  const [budget, setBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ category: '', amount: '', date: '' });

  const handleSetBudget = () => {
    const amount = parseFloat(prompt("Enter your monthly budget:"));
    
    if (!isNaN(amount) && amount > 0) {
      setBudget(amount);
      setRemainingBudget(amount);
    } else {
      alert("Please enter a valid number.");
    }
  };

  const handleAddExpense = () => {
    const amount = parseFloat(newExpense.amount);
    if (!isNaN(amount) && amount > 0 && newExpense.category && newExpense.date) {
      const expense = {
        id: Date.now(),
        ...newExpense,
        amount,
      };
      setExpenses([...expenses, expense]);
      setRemainingBudget((prev) => prev - amount);
      setNewExpense({ category: '', amount: '', date: '' });
    } else {
      alert("Please complete all fields with valid data.");
    }
  };
  const handleRemoveExpense = (id, amount) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setRemainingBudget((prev) => prev + amount); // Update the remaining budget
  };

  return (
    <div className="app-container">
      <div className="card">
      <div>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhAWFRUVFxUYFxUVFhUXFRgXFRYYGBcWFx0YHygiGBooHRUXITEhJikrLi4uFyAzODMtNygtLisBCgoKDg0OGxAQGi0lICYwLS8yLy0tLS0tLS81LS8tLS4tLy0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAE4QAAIBAgMEBgQICwYDCQAAAAECEQADBBIhBQYTMSJBUWFxkQcyUoEUQlNyobGy0hYXIzM0YnOTosLTJEOSs8HRFTWjJVRjgoO04vDx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEFAgMEBgf/xAA8EQACAQMBBQUGBAQFBQAAAAAAAQIDBBEFEiExUWETFUFxkSIzNIGhwTKx4fAjgtHxBhQkUnIlNUNiov/aAAwDAQACEQMRAD8A9cigFigEigCKAKASgFAoDpFAEUAZaA4NaoDkRQHa0NKARkoBAKAa1w0Awk0AkUARQC5aAY1ugGRQBFAWUUAUAUAUBWbZ2p8Hy9DNmzfGiIjuPbXBfX3+VSeM5O6ysv8AMtrOMFUd7B8h/H/8aru/V/s+p39yv/f9Cys7a/tHANuDJGbNPVI0jr0867Iakncdg4/P5ZOOWn4t+2UvkP2rtrg3FtC3nLAfGjViQByPZWV1qCoVY0lHLeDG2se2pOo5YSI20N5eFca3wZymJzxOk8ornuNX7Gq6exnHU6LfSnWpqe3jPQbg96UZgr2ygJjNmDAT26DSoo61Cc1GUcZFbSJwi5Rlk7ba25wLnD4WbogzmjmTpEHsrbe6mrapsbOd2eJrs9OdxT29rHyIuC3i4lxU4UZiBOeYn3Vqoax2tRQ2OPU219J7Km57XDoSMJt4Ne4PDy9JlzZp1WeqOuPprbS1RTr9i443tZNVXTXCh2ylncngdtPbXCui3w80hdc0eseyKyutSVCsqWznODG20/tqTq7WMZHbX2wlghcpZiJgGAB1SazvdRhbPZxlmNpp87hbWcIrre8qFulbKjtDZo74gVx0tcg5JSjhHXU0aajmMs/IlbU2rwSoyZswmc0dfga6r3UVbNLZzk5rPT3cJvaxgh2d4wzBeFzIHr9pj2a5Ia2pSUdjj1Oqej7MXLb4dC/ir4pAigCKARkoDmRQFi1AJFAEUAlAZrfPla8X/lrz+u/hh8y90TjP5FzsnDIbNslF9RPij2RVra04djDcuC8Csuak+1lvfFlFvIOFird3qORvehg/QB51S6kuxvIVF0+jLbT32tpOn5/VCoONtE9YRj/0xH2gPOpj/H1LPgvt+pEv4On9X9/0OVxQdowRI4g0Pza1ySep4fP7GxNrTsrl9xN8rSrdXKoEprAjrPZUa1CMasdlY3E6RNypSy87/sG8muJT5tv7RpqO+7h5RJ0/4WfnL8jWDDIDIRR4AV6VU4Lfheh511JNYbZ5/ibhW8zDmtxiPEOTXiqs3C4cl4Sf5nsKcFO3UX4x+xY7fuBsSjDky2iPA6iu/UZKV3CS8VE4bCLjazT8NodtpQccARIL2QR3HLIqb9Zv0nziRZtqxbXUsN49jNcKGzbXQMGjKvZl5xPXXbqdhOs4ujFeOfA49Ovo0lJVZPw6lZvRaK8IHmLQnxHOuLV4uLpp8jt0qSaqNczTJh1AHQXq6hXo4UobKeyvQ8/OrPLWX6nWK3GoIoAoBIoAK0BMoBpoAFABFAZnfTla8X/lrz+u/hh8y80X8U/kctm7xXBw7XCWOgk9KY0WawttTq+xT2N25Z3mdxptL2qm3v3vwJu+1ocO23WHK+5gSfsiujXILsoy6mjRpNVZR5ojbk25e65OoCjv6RJJ/hFc+hxTlOb47jfrMsRhBcN5Fv3VXaBZiAouCSeQ6NaKk4w1Lak8LP2NsIuen7MVl4+43e3FpduKbbBgEgkcpkmKjV60K1WPZvO4y0qjOlSltrH9hd6TlxCnrCJ9BNNVbjcxfJIaYlK3kubZZ7I2/cvXVttbUAzqM06Anr8KsbPUqtaqoShhHBd6fTo0nOM8v5FAMNxL15Rz/LEeKkkfVHvqmVHtbipH/kWzq9lQpy/4kdbxZrc/Fyr7g2n0H6K0RqOdSGfDC+pulTUITx45f0LzebAXRd46AkdEyNSpWOY7NAZq31S2qqt28Flbvlgq9NuKTpdhN44/PJJ2ZvQrQt4ZT7Y9U+I+L9PurfaazGfs1tz5+BpudJlD2qW9cvH9SJvr+ct/MP11y64/bg1yOnRvwT8yRs7eG5cuJbNpQGIBPSmum11OrUqRpuGF8znudNpU6cpqeX8jRmyPCr0pTm1k0AwigCgEoCZFABFAMigEmgM3vsNLPi/8tef138MPmXmifin8jQ7J/MWv2afZFXFr7iHkiquffS82Z3fO6We1aHPnHexyr9R86ptam51IUl+87kW2kR2ITqv9+IzdscHF3LJPPOo78hkHynzrXpn8C7nSf7wZ6g+2tYVf3vIuOwwuY5rbEgM4BI5+qOU1or0lV1BwfBv7G+hVdKxU48UvuX2F3ZsIwbptBkBiIkdwAmrijpFClJS3vHMqauqV6kXHcs8in3n/AEtPC39o1Wan8bH5fmWOm/CS+f5Gyr02DzpjNhfprfOu/Wa8zYfHy/m/M9HffAx/lK7G4bhYgp1BxHzSQR9BFcNaj2N3sdUdlGr2trtdGb9rigxmE9kia9ntRzhs8lsvGcGS3xwqIyMqhS4fNGgMZYMduprzWt0YQnGUVjOcnodHqznGUZPKWMHHejlY/Yr9QrDVuFL/AImemf8Ak8zaWjoPAfVXp4L2Uebl+Jj6zMQigEIoBhsigGG0aAct4delAdRQDWFAIizQGb365WfF/wCWqDXfww+ZeaK/an8iJht7GtoqcJTkULOY65RHZWilrM4QUNjhu4m2rpMZyctvj0OiHj7R7QjfRaH3h9NTH/UajnwX2/UxeKGn48X9/wBBNstwcer8gTbY+B6DfUaXf8HUIzXjj+hNr/FsZQ5Z/qhjH/tL/wBQfZrF/wDc/n9jJP8A6d8vubOK9OedMVvc+XEqexEPkzV5bV5ON2pckvzPSaUk7Zxzxb/In7P3pa5dROEozsBOYmJ91dlvq8qtWMHDGepyV9KjSpuannHQhbBP9ufxvfWa5dP+Pl/MdN81/kY/yjd5z/a18Lf11Gpr/Wx+ROnP/SS+f5D96bL28QLwXToMDGmZI0PkPOstVp1KdyqyW7d9DHTalOpbui3v3/Ug7S2hcxbIBb1EgBZMloknyFct1c1b6cUo8DqtrelZxk3LiS977eU2VJ5WgPLSujWIuLpx5I59JkpKo+bJGH3rYsq8JdSqzmPWQJ5VvpazOUow2OS4mmrpMIxctvm+Bqwa9CUQtALQCUAUBDoBVYigK/eHeNMGivcRmDNlGTLM5SdcxGmlAUS+k7Df93vf9P71AW+7W+NnG3GtW7VxSqF5fJEBlWBBOvSFRhPiCoHpPwv/AHe9/wBL71Nlcicstdg774TFOLa57bt6ouBQGPYpUkT3GJphEZNMRTCGTN7V3xsWMUMMyOWJtguMuVTciJkzoCCdKYQyzSRUgot5d6sPgoFyXuMJFtAC0cszEmFH0mDA0NRhE5ZUbJ9I2FuuEe21qTAclWQH9YjVfGI7YphDLNBvDtdMHZN50ZgGVYSJlvEgUwiMs7bHx64myl5VKrcBIDRmEEjWJHVTCGSrsb1Wnxhwdu3cZlLBnGXhjIJYnWYB6PLnUgh7b35sYW89h7N0smWSuTKcyhhEsD8aowkMshL6TMMSPyF7s/u/vUwmMsut6N57WBNtblp34gYjJl0yFZnMR7VNlcicspbfpLwpOtm8B2xbP89SQa/Zu0Ld+2t204ZG5Hly5gg6gjsNAShQCxQBFAQooAigFbCq46aKwHIMAR460B5zvZh0Xa+GVUUKWwsqFAUzeIMgaGRQHpNjD201S2imIlVVTHZIHKgPOfRHYR2xGdFaFsxmUNEm5MTy6qAb6Utnph7ti9YVbbMHJyAKM1ooVeBpPS59woD1G22YA9oB8xQHhu3y2IvYvEqeit5RP6rF1tnytDzoD2rZWL41i1dH95bR/eygkecigPONjWVxe2r5ujMttrzBW1B4LC0gI7BKn3UBpd/N1zi7aGyicZWGphZtkGVJ69cpHv7aAgb62bibJtpe1uKbCuZmSukz18qA7bN2uMJsa1e+NkK2x23GdwvjGrHuU0Az0X7GKWWxL6vfPRJ58NTz162aT3gKaAqMfbDbeAYAgskggEH+zDmDQHoX/DrPyFv92n+1Aee+mH1sP8y99dugNxtTYOHu23Q2LYzKYIRQVMaMCBIIoDHeiHEEriE6gbTjxYMG+hF8qA9EmgHigFoCDFAdEt9tAdaA813v/wCc4X52E/zzQHpLCgPINwN4LODN03g/5RbYXIoPq55mSPaFAd94doHa2Js2sPbcIoIlgJAcjPcYAkKoCjr+kgUB6ZtrH8DDXbg04dtiviFhR5wKA893c2Tm2NjGjViWHbGHCsPpDigNT6McZxMCqzJtO6HwnOPocD3UBndwP+a4vwxP/uEoD02gMl6UP0E/tLf1mgPNtq7X4ljC2BJSwhLAaS7OxPksAH9ZqA9vwDWzatm1HDKIUjlkKjLHuigPLd5dorhtsteZSwtm2SBAJnDqNJ8aA0myPSDZxF63ZWw4NxsoJZIGhOsHuoCm9MAlsN8299dugLLafpIw/CcWUum4QQuZVVQSNCTmJgdgFAL6K9kvas3LrqV4xTIDoSiAw3gS5juE9dAbkCgFoBaA4KsUA+KAKA803w/5zhfnYT/PNAelmgPK/RbgLV03+LZS5lWzGdFaJLzGYach5UB33Wb4FtW9hjolwsq/5lo/4SV8WoC89JuLyYPJ13biL7l6Z+lF86AzOxN+Uw+GXDfBM4CsGbixmzlixjIY9Y9dATvRBjcr37JPrKlwD5hysf408qANwTG1sUD2YkeWISgPTLtxVEswUdpIA+mgMl6TmBwBIIINy3qDI5mgMzsfdMXNl3b2Wbz/AJS31kLZJ6I726fmvZQGh9Fu1eLhTZJlrDQP2byV8jmHgBQFLjlB3gAIBGa3odR+jCgPRxh0GoRQe0KKA839MPrYf5t767dATPSXu/ZXDLds2LdvhuA+RFSUfo65RrDZf8RoDWbq7S+EYSzdJlioD/PTot9IJ99AWtAFAFANigA0AlAeZ74MP+M4XX42E/zzQHphoDzP0PkE4mD8Wz9dygHek6wbN/D4tNDoJ6s9ps6T4gn3LQEb0g49cVdwlq22lxFdfHEsFX3wo86A9SQZQAOQAA8BoKA8ztuMNt0iYF1yPH4QgYf9QjyoBNuC5s3aJxYtlrN1mM8geIPyiE9TZukO2B3wBw3q3nO0+FhsNYf180NlzMwBUaKSAozEkk+UUBf784MYfZNuzM8M2FnqJHM+8yaAvNwz/wBn4f5h+21AYnZ5GzdsG0TltXTlHUMl4zbj5rws9zUBx3m2muG2015hmFs2yVBAJnDqOvxoC7X0pWCQPgz6/rpQED0zEBsPJ+Jf+u3QHoW2MCL9i7ZP94jLPYSOifcYPuoDC+ibaMcfCsYZTxAp5jklwe4hPM0B6LQBQBQCvQHOgCgGm2JmBPbAmgHUA1UA5ADwAFAMuWweYB8daAVbKj4o8hQHSgGm2CZIE9sCaAdkBBBAIPMHUHxoBtjC27c5LapPPKqrPjAoDoyg8wD460AKANAI8KARkU81B8QDQAbanUgE94E0AcBfYXyFAK9sHmAfEA0AtANFtQZCie2BNALQC0AUA5hQHOgCgCgEzCYnv93bQEJ9pJMKGMc2Fu4V9xVel7tO+pwQ3g7WbwYSJ7NVZT5MBWWDXlkhRWDNi4CxQkSKAUUAtAFAFAFAIBQDgaAJoAoBKAKASaACaA6UByagCKAWKAr9tW5TwIiOfP5rfVWSMHxI7LbZF4lsscvrcLOQNf1AB4QPCpMTjhbr5lUM2WQACAOj1aCyI07x41II3Fuca9BeMw5KSOv9cUJ8C52bcZl6UyDGog8h+sZ51DI8ScawNoooAoAoAoBaAQ0AUAUAUATQCE0Aw0AooDtQDXFANAoBaAhbVQskASdNIB6+81KNcuJStfI6BeI0KlkHiCM1ZEHTA2pZWVQQGEkBCB7wakEcYdmv3oQnWfVs8pIkF+Y76jOSWsJE/ZWL0YnNlRScpVARGuirry5aa1jnKyTs4lgsrmNVbXFIbLAMBSX1IER261jnxNmN+DpiMSEyyCc7BRAJgnrPYO+mRgHxIDqkGWBIIByiO09R5+VMjAJiAXNuDIAMx0deoHrOo86ZGN2RcPiQ5YAEZGymRAPeO0d/dTIwMs41Wtm4A2UBjBUhuj2D6vGmRg62bgZVYAgMAYIgieojqNSQPoAoAoBhagEoBJoADUBIoBDQDaAKA43uvwqUYSM698gwzwRzBdAZ75v1mYnG5tdrZ6JDSOtsw5/q3GE6VWX1/K3koxRZWNiq6cpPciNf3hzMPyds9EliwJEg/Fg8vGtNW+qwjFqPE3UrGnNyTb3DhvIeIzBRkhQZjNrzgjr7J7azqXlSNVU0uOCIWVOVJ1G+B1t71MSQyDh5ioic5A5czE6a+BqI3c3XdLG4StIKiqmd4xd7nKZnRJyllyzEjkWk6rqOXbWNK9qTc8rgZVbOnDZw+Ir713ANUTidGOeXpGDmGafCohfVJUZVMcDKVjTjVjTzxHPvW8jKiZyYbnlgCdNZmkr+oqCqY4sRsabquntcBDvY8jIqeqWctMT+rDer41Na9qQjBpcSKVlTm5JvgL+FbSQEXhjKDM5+lzEzHXp4isql5UjWVNLiYwtISpOo3wO+A3pLNDoBbzFQROYAGJbUg98RWL1FwrbEluyS9PUqW3F78GpirUqwJoBpNANNAJQBQDCKAl0AUAw0AjUBzeska5cRtZGJlt6vzq/MH2mrzmr++Xkei0n3T8xcDucpQPxY4igkZSwAbXKJbQa8gBXQrKpVhFyn9DQ72FOclGH1OibkIFK8YwecqxPVGpedIEdkVslY1JTU3U3roa430IxcFDc+oHcdCoTjGAZEKwadZObPM6nr66lWFRT7RT3+Qd9Bw2HDd5i3Nx0bKDd0XQAIQI06Jh9RoND2VENPqRzipx47iZX8JYzDh1FfcpSwc3ukP1TGnKRngxJ51jHTpqDgp7n0JeoRclNw3rqC7lKGLi90j+qY8QM8A6DWpenTcFTc93kFqEVPb2N/mJa3JRc0XfW5goSI10EvoNToO2k9PqTxmpw4biIX8IZxDj1EXcZApTjGDqZViZ0gyXnSBHhUysajmpupvXQhX0FBwUN3mU2MwIw9xrIacmUzr8fWTJOvPrqqu6coVsSeS0tZxnRzFY4noZavTrgeaG1ICgCgEIoBKAaaAlUAUBExmMCaRJPuE9QnqJrFySJSyMwWNW6DEgjmp5ikZZDWCQUms08GDWROHU7RjsmT3tEXl/Zj7TV57VveryPQaSsUn5mp2d+at/MT7Iq6oe7j5FPW95LzZUYXb7vH5NQQltnGYmGYhbijTqLCD3GtpqydMNtt2CkooEdMDMxDLwQ4WOfSvGNNcnfoB3s7WZoIt87otj1pkojhmBGgALz4ChORTtNhEqIa8bI0YQQ7KGk6MOjOnbFARbO3LjKWFoaJbYDK/T4kQATosE5deZBjuEZOqbYZmUKq5XYBDDsSpQsHAX1hKkfqxJ0IoMk/AYlnUlgAQxBUTI0Bhp69eY0IhhoaEmM3j/TLvzbP2TXndR+I9D0Fh8P6m5r0K4HnxKkDbVwMAykFSAQRqCDyI7RQDqAKAYRQBQEmgCgKbGk53DISOYIGhGkjxFcF5cxt47UjbTjtbkR8NiRafMQWDCM4OpEiJHWRVRDX4xn7cPZfimdCtXJbnvLq7iFVM89GJEdc8gO81fTuacaXbZ9nGTlUJOWz4kDCbfsPe+D8RVvZQ3CJ6RUzqO3lMc415VhZ3auYbaTRNWnsPDZSb4fnl/Zj7TVVat71eRc6V7p+ZqNnD8lb+Yn2RV3Q93HyKat7yXmxi7LsiItgRHKRyJOuuokzB/0FbTWPTB2hyRfd4p/rbT/DQC2sHbBzKvM5ubRmAyzExMaTQB8Ct69HmSdSxALHMSATCmdZEUADBW+j0YyhVEFgITVQQDBjqmgIS2MNPQX1CRNviwrKMpAKaKY0MdgB5VG0idlrihuwLwe2zogW2zk24mSgAUMZ5TllQIAXLWFOW2s+BsrU1Tez4+Pn+hl94v0y782z9k1Q6j8R6F3YfD+puq9CuB58g7TxACsuh0MjuPV7647u5UE4p7zooUtp5YuxwBYthQAAoAA5ALpA8q22s3OjGTMK8dmo0iZXQagoANANoCRQBQFdtC8A6qdJGneZ1H1V5nXW1VhnhhnVQjmLaIN6zzIEg+sv8y9/11QTh6HTCTM9vRvAuEsSWDkFhZT2mOpJ7hOp6uXM1Z2VKrdKNvn2I72KklTzPG9mU3N2SxzbQxLS7S1rNzk/3vd2L1Aa9kWV9cTbVpap56fkaaMYr+LVeF1NHfxj3oZ3zQAAYHIeHPWfOq+rUrSezXXtR3F1aRpKGaXB7zfYNCbCAMVJtKAwiQSg1EgiR3ivU0lmkl0PO1fey83+ZV7N2LibdxXfHXHVTqhWwA2nIxbBjwNcNtZVadXbk1/9fd4N1WvTlDCjhjTsBoQBkOVCskQZZAmkLyWMw7e7nVqchabKwhtWwhyyOpfV0AGmg5xPLroCZQDSaAz20Nls1x8jFEvMBfUKxzoFXVCPVcgFD+qe1RWidNt7vHidVOuor2llr8P69PEucKsA6QJMCI06tOqtyWEczeTFbxfpl35tn7Jrz2o/Eehf2Hw/qRtnelexcEvhbqRE5WR/ry16FcCgfEnbTxfEJcSM5BAPMADQHv5V8/u7h1bqc0/H+xfWtPZgk+RZ7E3lwJtoi42yWC6g3Apnr0aDzJr3NpS7OhCL5FLXntVJPqX1q8riVYMO1SCPoroNQ+gEoBDQDg5FAPDg0BxxmDW6uVvEEcwe0VzXVpTuYbFRfobKdWVN5iYje/b/AMEDIt4HIOm+XVexeZlvd1jrrzlTT4RqqnCTZ3QknHbksGCwmHvbQvrfxCkWVACqdAVHJQOwnVm6+Q6o9VZaTKNLYp7k+L/oU13qUISy975Gp2riOgZPYB1ADu7BFXNtYW9jTewsPxb4spqlzXu6i2t/JIjbCxAe2xUyA5E9XJTp3a14zXK1KrcbVPlx5nudEt6tC32anPhyPVtn/mbf7NPsirajupRfQq63vJeb/Mg7M2m9x4ZQAZiJkQOuqSw1atXueynHCecc1jmdFe2jThlPeOXblsor5WhiAPzfWjP1NHJDoJM6RXoTiExG21Qw9q4vq8+F8bMPb19U8vHlrQEuxdW6ubIY6swGoiQRBOhn66A6C2vsjyFAcszktBUAGNVJPqg+0O2o3gfYckGYkEjTQaHxNAYfeL9Mu/NtfZNee1H4j0PQWHw/qZvd/dzCurs1qCpSMruo6+YBgjxFWl7X7G2lPp9ihpJyqqPUuNsXOi0GDlIB7C2gP0ivGadR7WvGPUv6s+zoykZbY+4txrZuLiFEsVAe2dQoGshu0xy6q9/tb8HnNrccMfsrEYF0cuqsZKPaZp6MTMgEcx2ipySnk9i3cx7X8LZuuOk6AtGgzAlSR2AkT76kksaAQ0B1ZZoDlQGf23vZbsX0wgk3XUsTEhBBI/8AMcpjqESeoHluJVmtigsyZujGEYOrUeIootpbOsuyviEHR6QtADMW6munq7gZOsxyI6dJ0jsE5Se1J+PgvLmyrv8AUtvct0eXi/PkVO1NtKDCKM3IBfVH+/iatLnUaVpHZb2pcjms9Kr3stpLZjzMzjcWzyWMmOXxR/vXlrq/rXMvae7ke0s9NoWkPYW/n4l1ugDwGnrc+WRKqbl7ywpcD2HZ35q38xPsivT0Pdx8keWre8l5sj4HZzW7124buZbkZUiMnMtrOskjqHKohQpwk5xik2YuTaw2L/wu0IAVoEQOJcjQFQPW1EMRr1VuMRW2baIgpI05s5OjFtTMkySZ76A6WrK2xCIYJnnOsAfGOmgAjlpQHQOfZP8AD/oagHPhOCxVlgmdVJ6gOYYdlBk47OxAfPlM5bjKWiFLCM2XUyASVPeprGMk84M5wccZ8d5kN4v0y78219k1Qaj8R6F7YfD+pmtwjfa21y7cUo8ZVgBtCekYA05+dR/iCrs0Y014/YrbKmu0cjjvhtjghBlzFyxiY0WO79YeVaNAoZnKo/BYOrUpYhGHMtdn7xm3ato+CvqFXUqubVjmJ1jrNejVSm3ukiolb1ORQb2bZTEuhQMFRSOkADLEToCewVtRhFYPWt3LHDwmHQ8xZtz45AT9JNZGRYE0AygJVANZZoDy70pbBupft46ydeir8+iy+qTHxSND4d9c1So6MlUR20Kcbim6L/f9igxu1ncRGQdY5tPX/wDprK71uc47NFY6mFj/AIdp0nt1va6eBWM//wB7fHtqk3t5fE9GkksI43z0TRLeRPgaXc9psN3XCP4VrluV7RNHgev4KeAmWJ4axPKcgia9Pb47OOeSPK3GdueOOWUmwXxSMtm4yMVZnugtLhHHQg8jL5j3COU1aXCoyTnBNcEuWVx+hR2TuoSVKo02m2+eHw+p0w9/FFgHDgBwCQiiVANsnUcizC5I9jsmuAuR2Fu4nMgYuR0c8qBzFr/wwObPyOkE9WWgLugCgM5jbN5blxbdviC88JcZQxw7FVzliedvLLKOphl5ERzz208Lx+h2U+ykk5btnj/7cvn4PpvLfZWGW1bFtBCoWUTqYBPM9Z6ye+t0IqKwjmqTc5OUuLMfvF+mXfm2fsmqDUviPQvbD4f1KndhSuCtSpUlBoefZPvAn31UazW7S72fCKSNNlTxHzMnvLiEu42zbno22QPPISwZv4Yr0Ol0nSstrxeWct3PbuEvBYN+twHkQfA1WeZaGA2sOJibgX41zKPGcv116O2WKUShrvNRnu2g0HIaDwFbzSJQBQEoUA4CgI+0MEl629q4JVwVI7j2dh6we0VjOKksMyhNwkpI8M23sx8Neey/NTo3tKfVYeI8jI6qoqlN05uLPT0KqqwUkQawNpyxJ6NSjGfA0m55/It+0P2ErlueJFN7j17A3gtlCxgC2pJPIAICSa9NR93HyPMVveS82dMLibdzpW2VsyqZHMqRKnvEN9Nbt+DSnFyeOIfDLZE8VI7c6xzjnPbpUGQ5MQhMB1JiYDAmO2B1d9AOZZ+MR4Zf9QaAQIfaP8P+1QCE2JstxDkDcMlbjFU6JUAnNmg8iDPKCCNKx2lv6GbpyWN3HgM2Ffa5bNwjKrsTbTLlKW+Sg/rGMx7M8dVRTk5LLMq0Ywlsrw4+f73GV3iE4y782z9k1QanLZrt9C7sPh/U44iFUKOSj6AIrzcdqvWz4yZsp4hBvkZbdywuI2wMwVlTmDBBK2i3vhvqr6JTgoQUV4bjzs5bUm2er3tlYd/XsWz2nIs+YEipcIvigpSXBnje7NkXMZh1HI3kYT7Ktn+payMT2+gCgCgJa0A6gCgMn6Qt3vhNniW1m9ZBIjm6c2TvPWO/Trrku6PaRyuKO6xuOynh8GeQA1T5PQCXbDMVRVZnYwqKCXJ16hWdOLk8I1VpKEcyNlsvY17CWwl8Krv+UyqZyggKFYjTN0TyJGvOtF9SdOST5Gu2rKqm1zPScGgayisJBtqCDyIKgEGvRUPdx8jz1X3kvNlfsnZt2xdVYtfB7dsLbK5lujLoFdYyMMsDMCPV5a6b87sGjs1tbQ4bBECLkEWwhJDEHo5C0ZuccuzQcqxMyTsvZRsuzC5mDKoiCIyjxg6z1SJiaAsWuAcyB4kCgEF1faHmKApto7H4l0tDhWKi6q8PLetqAVRpYEQwietSw5HTTOltPPr1OincOEcYzy6P9/UtrAMGREljGk6kxyJFbUc7MbthZx1zuW0f4TXldclszfUvrN4tvmyt2kQQQQCD0YOoI6we3rrj0Sht3Kb8N4vJbFvjmUno52Rbu4u6SCEt8RlCsy6m5kUSpmMubSvblCb7eHCMmFvsmJvKVtOw6QYaKTHSBOvLn10B596ObGbHWz7C3G/gKfz0B69QBQBQEsUA6gCgEJoDC7a9Hou3WuWcQLKuSWQ2s0E88hDLAOuhnn7q4p2MJSymWNLUZwhstZL3YG7uHwaxaTpkQ11oNxvE9Q/VEDurpp0o01iJx1a86rzJlTvb+eX9mPtNVHq3vV5Fvpfu35miwjRZQgTFtNB19EVdUnikn0Kat+OXmxmFxjswBtEA9c8vvDvH+tYU68pSw4mlSZEtbdzLItdkguZ1DkRCmfU+nrrpMshe3gyEg2j/AHgHSMFkaMuqzqAx0B9Xt0AFrhcQWLAqFysBoSZlFadVEesB7qEkiaAjjMxbpkAGAAF9kHrHfUcQPw7EgyZgsJ8CRRAym2rcYm8/aLY/wpP81eN1+WbhR6F3Zb6SXU8/3xxGKVkFlLoUKxZ1tsUJYxGaCJGU9fxqtNAo4pyqc9xz6lPMlDkQN3N5mwbsbTocwCsr9ccu8Hn51flYX21d/LuIsPZ4SLnEFlYnSdRHfy99ATfRRhSbt69HRVBbzdWZmDEDvAUT84dtAelUAUAUBMoAJoBCaASgEoBrLQGR3t/PL+zH2mqg1b3q8i80z3b8/saTAfmrfzE+yKuqHu4+RT1veS82dktgEkCCxBJ7SABPkBWaillo1YOfwO3EcNIiIyiI6Wnh0m/xHtrIkRsHaOhtIRqNVB0JJP0k+dAdAuX1VHu05AAfQAPdQChz2fTUATh6kh2EmYGSJgDrU9lMA6WkyiJJ1JkxMkz1ACpBjtuYjM7ntMDwXT/T6a+fX9Xtruc+uC/s4bMEjS7KscO0i8iBJ8TqfpNe2saPY28YdCmuJ7dRyHYrCW7mly2jjsdVYfSK6zSU93c/Z7GTgbI+agT7EUBb4TCpaQW7SKiLoqIAqjwAoDrQBQATQEsmgCaASgEoAoAoDIb3fnl/Zj7TVQar71eReaX7t+ZBtbcxSgKr24UQM1skwOUkMJrXDUqsIqKxuNk9Poyk287x/wCEWL9q1+7b79Zd61unoY92UevqH4RYv2rX7tvv071rdPQd2UevqH4RYv2rP7tvv071rdPQd2UevqH4Q4v2rX7tvv1Pelbp6Duyj19Q/CHF+1a/dt9+nelbp6Duyj19Q/CHF+1a/dt9+nelbp6Duyj19Rt3eTFgE5rWg6rbffrOnqVaUktxlHTKLeN5mcZtxpy5QCFJkGBJ5SOvq863VadGoszgs8zdLT5U99ObxyZ68atlwPNPiNNSQIRQDaAJoBCaAaKAm0AUAUAUAlAFAUG8Wx7t5le0UkLlKuWUaEkEEK3adI7Krr2yddqUXhlhZXkaKcZLcU53bxfs2f3z/wBKuHuqrzR3d50eTE/B3F+zZ/fP/Sp3VV5od50eTD8HcX7Nn98/9KndVXmh3nR5MT8HcX7Nn96/9KndVXmh3nR5MPwdxfs2f3r/ANKndVXmh3nR5MPwdxfs2f3r/wBKndVXmiO86PUPwdxfs2f3r/0qd1VeaHedHqI27mKIgrYg/wDiv/SqVpdZPKaJWp0lzIuE3Bc3Q11kVAQWVXe4zR8WWUZR7zXbTtKuV2jMa+rKUGoreegTViUYhoBtAIRQCGgGc6AKAm0AooAIoBKAKAKAaaAQUAhoBpoAoAoAoAoAoAoAoAoBtAFAMegACgEIoCZFAKKArtt7bsYRA998s6KoEuxHMKBz5jXkJFAZc+k7C/IYj/Da/qUAfjPwvyF/ytffoBPxnYX5C/5Wvv0AfjOwvyF/ytffoA/GdhfkL/la+/QCH0m4X5C/5Wvv0An4y8L8hf8AK19+gE/GXhfkL/la+/QB+MvC/IX/ACtffoA/GXhfkL/la+/QB+MvC/IX/K19+gD8ZeF+Qv8Ala+/QB+MvC/IX/K1/UoA/GXhfkL/AJWvv0AfjLwvyF/ytffoBD6SsL8hf8rX36AnbK37wl9wnTtMxheKFCknkJViB74oDT0AFaAaRQEygEigPJ97Dxtspaurmt58PaCksBkuBC0FSCNbjGR2UBExeyrGS66W1I+C8RCGu6Pbv8K6wVmkAAnQyOjI7ABHxGCsjC3bgsqHt4fBuDmuaPeuEMSM0arlMd8igJF7ZdlcbibfAHDtWbjKpa7AdcOLqyQ0mTOk8poCp2lhrfwexeS3w3uG6pRS7KwQrluJnJYA5isSQSunXQEnb+xks2rb2yCUJs34YNF8DP1HTm6xp+a76AlnCYQDCq1kcS+mFYQ16SXvsl0t0soUosADUNryoDrZ2ZhjdxC8OzktQFZ2xS21b4WLRDnNJORgCRpMHTWgOB2TZ/tCZOFctvfbLiOJIw6wA6MrZc6TJBBzAiDQCYvZ1kXcZYNkWxYtXXt3c1zP+TA4bPLZWW5poFHriIoDttLYlhTinsrmW0HQ2mZuJZvC6qKRB6aMMxUmddDqKAcm71kXcIIFxTdGHxIDkjinU6oZXQuo5fmZ66Aoti4dbmKso9uUuXUUr0wMrPlMEGdNdZ5igLrF7KscO66W1I+Ci6hDXdHS/wAK82VmkAAnQyNJGmgA4vg7C4e5c+DoWt4fBv0mvRmvXMrFgrjmpBA8KA647ZNlLDYhLOZuFhnawzXCtnim5mcwQzL0EgE6cTWdKALOzLIW8121ZXKuDdYbFNbAvnXQMH6QgxrBPPqoCvupa+B8X4MguG/csnpX9AtlGBg3IzhnJ5RpyoD1fdO+9zB2HcksbayTzMaBj3kAH30BbUAUBIoAoDLb4bpfC2W9Zu8LEIIDSQGGsAldVIkww7SIOkAY87h7Tz8TjJnGgfj3M8dzRNANO4e0ul+VTp+t+XfpfO06XvoDqdzdraH4RymD8Ju6TzjTTkPKgOD7hbRLZzcQuI6ZvOW05a5ZoBDuHtCGHEtw5lhxnhiDMt0ekZ7aADuLtHoniJ0PU/LP0Y5ZdOj7qA6XNy9ptOa+GkZTN+4ZXXomRqNTp3mgEfcrabLka8CmnQN+4V0iNCI0geVAIdx9pFQhuqVWMqm8+VY5ZRECO6gEG4u0cxfipnPNuM+Y8jqYk6geQ7KAW3uPtJZK3lUsZYrfuCT2mBqdTqe2gB9x9pMwc3lLjQOb9wsBroGIkcz5mgD8CNpZ+Jxlzj4/HuZ/8UTQDre5W01LFb6gtqxF+4Cx7WIGvvoBlvcTaKtnW4gczLi84fXn0gJoDou5m1ASwvgM0SRiLoJjlJA1oDvsv0fYliFxN8LZBkpbd2JPXAICqT7Wp7qA9Hs2lRQqgBVAVQOQAEAD3UA+gCgJFAFAFANdqA5zQDg1ANY0A1qAbQBQBQBQCigFoAoAoAoAoAoBRQAaASgCgO5oBtAOFAc250A2gCgCgEagG0ACgCgCgCgHUAUAUAUAUAUAtAFAJQBQH//Z" alt="expense" />
          </div>
        <h1>Track your Expense</h1>
        <button className="set-budget-btn" onClick={handleSetBudget}>Set Monthly Budget</button>
        
        <div className="budget-info">
          <p><strong>Budget:</strong> ₹{budget}</p>
          <p><strong>Remaining:</strong> ₹{remainingBudget}</p>
          {remainingBudget <= budget * 0.2 && budget > 0 && (
            <p className="alert">⚠️ 80% of the budget has been utilized!</p>
          )}
        </div>

        <h2>Add Expense</h2>
        <div className="input-group">
          
          <input
            type="text"
            placeholder="Category"
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
          />
          <input
            type="number"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          />
          <input
            type="date"
            value={newExpense.date}
            onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
          />
          <button className="add-expense-btn" onClick={handleAddExpense}>Add Expense</button>
        </div>

        <h2>Expense List</h2>
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <span>{expense.category}</span>
              <span>₹{expense.amount}</span>
              <span>{expense.date}</span>
              <button
                className="remove-expense-btn"
                onClick={() => handleRemoveExpense(expense.id, expense.amount)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        
        <p className="total-expenses">
          <strong>Total Expenses:</strong> ₹{expenses.reduce((total, expense) => total + expense.amount, 0)}
        </p>
      </div>
    </div>
  );
}

export default App;
