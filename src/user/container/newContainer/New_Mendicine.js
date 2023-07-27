import React, { useEffect, useState } from 'react';
import Heading from '../Ul/Heading/Heading';
import CustomCard from '../Ul/CustomCard';

function New_Mendicine(props) {
    const [mdata, setmdata] = useState(
        
    )

    useEffect(() => {
        setmdata(
            fetch("http://localhost:3004/medicines")
        .then((response) => response.json())
        )
    }, [])


    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Heading type='h2'>Medicine</Heading>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
                <div className='container'>
                    <div className='row'>
                        <input type="text" placeholder='Search Medicine'  />
                        {
                            mdata.map((v, i) => {
                                return (
                                    <div className='col-md-4 g-3'>
                                        <CustomCard
                                            value={v}
                                            btnval={'Add to Cart'}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    );
}

export default New_Mendicine;