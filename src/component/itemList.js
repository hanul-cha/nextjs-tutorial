import { Grid, Image } from 'semantic-ui-react'
import styles from './ItemList.module.css';
import Link from "next/link";

export default function ItemList({ list }) {

    return (
        <div>
             <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => (
                        <Grid.Column key={item.id}>
                            <Link href={`/view/${item.id}`}>
                            <a>
                                <div className={styles.wrap}>
                                    <img 
                                        src={item.image_link} 
                                        alt={item.name}
                                        className={styles.img_item}
                                    />
                                    <string className={styles.tit_item}>{item.name}</string>
                                    <span className={styles.txt_info}>
                                        {item.category} {item.product_type}
                                    </span>
                                    <string className={styles.nun_price}>${item.price}</string>
                                </div>
                            </a>
                            </Link>
                        </Grid.Column>
                    ))}  
                </Grid.Row>
            </Grid>
        </div>
    )
}