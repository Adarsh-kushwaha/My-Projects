import React from 'react'
import { projects } from '../helper/projects'
import Card from './Card'

const Grid = () => {
    return (
        <div className='mt-[180px] flex flex-row flex-wrap items-center justify-center gap-4 w-full'>
            {
                projects.map((p) => {
                    //console.log(Object.values(p.image)[0])
                    return (
                        <div key={p.id} className="flex">
                            <Card image={Object.values(p.image)[0]} title={p.title} category={p.category} link={p.link} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Grid