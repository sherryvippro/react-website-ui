import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <CardItem
                            src="images/img-1.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-3.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                    </div>
                    <div className="cards__items">
                        <CardItem
                            src="images/img-1.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-3.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Explore the hidden waterfall deep iside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
