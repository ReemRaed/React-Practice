import styles from '../styles/Shop.module.scss'
import {DUMMY_PRODUCTS} from'../dummy-products'
import Product from './Product'
const Shop =()=>{
 return(
  <section className={styles.section}>
    <h2 className={styles.section__title}>Elegant Clothing For Everyone</h2>
    <ul className={styles.section__productList} >
        {
        DUMMY_PRODUCTS.map((prd)=>{
            return(
                <Product key={prd.id} product={prd} />
            )
        })
        }
    </ul>
  </section>
 )
}


export default Shop;