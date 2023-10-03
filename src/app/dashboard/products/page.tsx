import Link from 'next/link'
import { FC } from 'react'

const Products: FC = (): JSX.Element => {
    return (
        <article>
            <h3>Product One</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, architecto.</p>
            <Link href={"/dashboard/products/1"}>View details</Link>
        </article>
    )
}

export default Products