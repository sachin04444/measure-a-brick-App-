import React, { useEffect, useState } from 'react'

const BricsMesurement = () => {
    const [WallL, setWallL] = useState(0)
    const [Wallw, setWallw] = useState(0)
    const [wallT, setWallT] = useState(0)
    const [deduL, setDeduL] = useState(0)
    const [deduH, setDeduH] = useState(0)
    const [deduT, setDeduT] = useState(0)
    const [BricsH, setBricsH] = useState(0)
    const [Bricsw, setBricsw] = useState(0)
    const [Bricst, setBricst] = useState(0)
    const [TotalvW, setTotalVW] = useState(0)
    const [TotalvB, setTotalVB] = useState(0)
    const [TotalVd, setTotalVd] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        setTotalVW(parseFloat(wallT) * parseFloat(WallL) * parseFloat(Wallw))
        setTotalVd(parseFloat(deduH) * parseFloat(deduL) * parseFloat(deduT))
        setTotalVB(parseFloat(BricsH) * parseFloat(Bricsw) * parseFloat(Bricst))
        setTotal((parseFloat(TotalvW) - parseFloat(TotalVd)) / parseFloat(TotalvB) * 0.01)

    }, [wallT, WallL, Wallw, deduH, deduL, deduT, BricsH, Bricsw, Bricst, TotalVd, TotalvW, TotalvB])
    return (
        <div className='flex whole'>
            <h1 className='heding'>Calculation of Brics</h1>
            <div className='flex allunit '>
                <div>
                    <h1> Volume of wall measure:</h1>
                    <p>length//height/Thicknes</p>
                </div>
                <div> <h3> Volume : <span>{TotalvW} m </span> </h3></div>
                <div className='flex fDC'>
                    <div >
                        <input type="number" name='WallL' placeholder='L' onChange={(e) => { setWallL(e.target.value) }} />
                    </div>
                    <div>
                        <input type="number" name='Wallw' placeholder='W' onChange={(e) => { setWallw(e.target.value) }} />
                    </div>
                    <div>
                        <input type="number" name='WallT' placeholder='T' onChange={(e) => { setWallT(e.target.value) }} />
                    </div>
                    <h1>M</h1>
                </div>
            </div>


            <div>
                -
            </div>


            <div className="flex allunit">
                <div>
                    <h1>  Deduction of window,Door and other </h1>
                </div>
                <div>
                    <h3> Volume  : <span>{TotalVd} m</span></h3>
                </div>
                <div className='flex fDC'>
                    <div >
                        <input type="number" placeholder='L' onChange={(e) => { setDeduL(e.target.value) }} />
                    </div>
                    <div>
                        <input type="number" placeholder='H' onChange={(e) => { setDeduH(e.target.value) }} />
                    </div>
                    <div>
                        <input type="number" placeholder='T' onChange={(e) => { setDeduT(e.target.value) }} />
                    </div>
                    <h1>M</h1>
                </div>
            </div>


            <div>
                /
            </div>


            <div className='flex allunit'>
                <div>
                    <h1>Volume of brics and morntar</h1>
                    <p>per cm 1cm extra for mortar </p>
                </div>
                <div>
                    <h3>Volume : <span>{TotalvB} m</span> </h3>
                </div>
                <div className='flex fDC'>
                    <div >
                        <input type="number" placeholder='H' onChange={(e) => { setBricsH(e.target.value) }} />
                    </div>
                    <div>
                        <input type="number" placeholder='W' onChange={(e) => { setBricsw(e.target.value) }} />
                    </div>
                    <div>
                        <input type="number" placeholder='T' onChange={(e) => { setBricst(e.target.value) }} />
                    </div>
                    <h1>M</h1>
                </div>
            </div>


            <div className="total ">
                <h3>Volume  Brics and mortar  :  <span>{parseFloat(TotalvB) * 0.01} m</span></h3>
                <h3>Volume  Wall - Deduction  :  <span>{(parseFloat(TotalvW) - parseFloat(TotalVd))} m</span></h3>
            </div>


            <div className="flex fDC">
                <div>Total :</div>
                <div >
                    <h2>{(parseFloat(TotalvW) - parseFloat(TotalVd))} m</h2>
                    <hr />
                    <div>{parseFloat(TotalvB) * 0.01} m</div>
                </div>
            </div>

            <div className="tota">
                <h1>Number of Brics : <span> {total === Infinity ? <>0</> : <>{total}</>} m</span></h1>
            </div>
        </div>
    )
}

export default BricsMesurement
