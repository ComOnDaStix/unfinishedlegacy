import styles from "../styles/NewArrivals.module.css"
import Link from "next/link";


const NewArrivals = () => {
    return (  
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.h1}>NEW ARRIVALS</div>
                <div className={styles.imgContainer}>
                    <Link href="/"><img src="/images/newArrivalImg.jpg" alt=""/></Link>
                </div>
            </div>
        </div>
    );
}
 
export default NewArrivals;