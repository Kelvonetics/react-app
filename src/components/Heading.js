import React, { Component } from 'react'

export class Heading extends Component
{
    render()
    {
        return (
            <div className="home">
                <div className="homeLogo">
                    <h3>App</h3>
                </div>

                <form>
                    <input type="text" placeholder="Search ..." value="" onChange={() => console.log()} />
                </form>
            </div>
        )
    }
}

export default Heading
