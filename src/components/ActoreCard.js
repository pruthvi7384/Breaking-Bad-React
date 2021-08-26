import React from 'react'

function ActoreCard({iteam}) {
    return (
        <div className="card">
            <div className="inner-card">
                <div className="card-front">
                    <img src={iteam.img} alt=""/>
                </div>
                <div className="back-card">
                    <h1>{ iteam.name }</h1>
                    <ul>
                    <li><strong>Actore Name : </strong>{ iteam.name }</li>
                        <li><strong>Nikname : </strong>{ iteam.portrayed }</li>
                        <li><strong>Birthday :</strong>{ iteam.birthday }</li>
                        <li><strong>Status :</strong>{ iteam.status }</li>
                        <li><strong>Occupation :</strong>{ iteam.occupation.map((occupation)=>(
                            <ul key={occupation}>
                                <li>{occupation}</li>
                            </ul>
                        )) }</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ActoreCard
