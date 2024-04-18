import cn from "classnames";
import * as React from "react";
import Button from "../Button";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import styles from './Pagination.module.scss'

type Pagination = {
    count: number,
    limit: number,
    page: number,
    indent: number,
    onChangePage: (number:number)=>void;
}

const Pagination: React.FC<Pagination> = ({
    count,
    limit,
    page,
    indent,
    onChangePage
}) => {
    const handleronChangePage =(page) => {
        if(page > 0 && page < length){
            onChangePage(page)
        }
    }
    const length = Math.ceil(count / Math.max(limit, 1));

    let left = Math.max(page - indent, 1);
    const right = Math.min(left + indent * 2, length);

    left = Math.max(right - indent * 2, 1);

    const items = [];

    if (left > 1) items.push(1);
    if (left > 2) items.push(null);

    for (let pag = left; pag <= right; pag += 1) items.push(pag);

    if (right < length - 1) items.push(null);
    if (right < length) items.push(length);
    return (
        <ul className={styles.list}>
            <li>
                <Button
                    className={cn(styles.arrow, {[styles.arrowActive]: page > 1})}
                    onClick={() =>handleronChangePage(page -1)}>
                        <ArrowDownIcon />
                </Button>
            </li>
            {items.map((number, index) => (
                <li className={`${styles.item} ${number === page && styles.active}`} key={index} onClick={() => onChangePage(number)}>
                    {number || '...'}
                </li>
            ))}
            <li>
                <Button
                    className={cn(styles.arrow, {[styles.arrowActive]: page < length})}
                    onClick={() =>handleronChangePage(page + 1)}>
                    <ArrowDownIcon />
                </Button>
            </li>
        </ul>
    );
}

export default Pagination
