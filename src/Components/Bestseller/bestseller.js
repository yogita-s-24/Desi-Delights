import React from 'react'
import "./Bestseller.css"
import BestsellerCards from '../BestsellerCards/bestsellercard'

function Bestseller() {
    return (
        <div className='heading-container'>
            <h2 class="mt-4 text-center heading-bestseller">Bestsellers</h2>
            <div className='prod-grp'>
             <BestsellerCards className="prod-cards" name="Kaju Katli"  imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg"/>
             <BestsellerCards className="prod-cards" name="Orange Barfi" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/o/r/orange_burfee_2__1.jpg" />
             <BestsellerCards className="prod-cards" name="Moti Choor Laddu" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/o/moti-choor-ladoo-250-frontv1.jpg" />
             <BestsellerCards className="prod-cards" name="Orange Barfi" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/o/r/orange_burfee_2__1.jpg" />
             <BestsellerCards className="prod-cards" name="Orange Barfi" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/o/r/orange_burfee_2__1.jpg" />
             </div>
             </div>

    )
}

export default Bestseller
