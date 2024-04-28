import * as React from 'react'
import Ladle from "components/Icons/Ladle";
import Text from "components/Text";
import styles from './Devices.module.scss';

type DevicesProps = {
    equipment:{
        name: string
    }[]
}

const Devices: React.FC<DevicesProps> = ({equipment})=> {
    return(
        <div className={styles.devices}>
            <Text view={'p-20'} weight={'bold'} className={styles.title}>Equipment</Text>
            <ul className={styles.list}>
                {equipment.map(item => (
                    <li key={item.name} className={styles.device}>
                        <Ladle/>
                        <Text>{item.name}</Text>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Devices
