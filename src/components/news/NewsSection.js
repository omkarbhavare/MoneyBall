import React from 'react'
import { news } from './newsApi'
import { uniqueId } from '../../uniqueId'
import './news.css';


const NewsSection = () => {
    return (
        <>
            <h1>News</h1>
            


                {
                    news.map((data) => {
                        let title=data.title.slice(0,45);
                        // let description = data.description.slice(0,200);
                        return (
                            <span className="news-container" key={uniqueId}>
                                
                                <div className="card" style={{ width: "18rem", height: "29rem", background: "#e3ea79" }}>
                                    <img src={!data.urlToImage ? "https://elitegymequipment.com/wp-content/uploads/2020/04/Life-Fitness-Bicep-Curl.jpg" : data.urlToImage} style={{ height: "10rem" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">{title}...</h3>
                                        <p className="card-text">{data.description}...</p>
                                        <button className='news_button'><a rel="noreferrer" href={data.url} target="_blank">Read More</a></button>
                                    </div>
                                </div>
                            </span>);

                    })
                }

            
        </>
    )
}

export default NewsSection
