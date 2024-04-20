import cn from "classnames";
import * as React from "react";
import Button from "../Button";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import styles from './Pagination.module.scss'

type PaginationProps = {
    count: number,
    limit: number,
    page: number,
    indent: number,
    onChangePage: (number:number)=>void;
}

const Pagination: React.FC<PaginationProps> = ({
    count,
    limit,
    page,
    indent,
    onChangePage
}) => {
    const handlerOnChangePage =(page) => {
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
        <div className={styles.pagination_wrapper}>
            <Button
                className={cn(
                    styles.arrow_left,
                    styles.button_pagination,
                    {[styles.arrowActive]: page > 1}
                )}
                onClick={() =>handlerOnChangePage(page -1)}
            >
                <ArrowDownIcon/>
            </Button>
        <ul className={styles.list}>
            {items.map((number, index) => (
                <li className={`${styles.item} ${number === page && styles.active}`} key={index} onClick={() => onChangePage(number)}>
                    {number || '...'}
                </li>
            ))}
        </ul>
        <Button
            className={cn(
                styles.arrow_right,
                styles.button_pagination,
                {[styles.arrowActive]: page < length}
            )}
            onClick={() =>handlerOnChangePage(page + 1)}
        >
            <ArrowDownIcon/>
        </Button>
    </div>
    );
}

export default Pagination
