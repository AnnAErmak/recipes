import cn from "classnames";
import * as React from 'react';
import Text from "../Text";
import styles from './Card.module.scss'
// import cn from "classnames";

export type CardProps = {
    /** Дополнительный classname */
    className?: string,
    /** URL изображения */
    image: string;
    /** Слот над заголовком */
    captionSlot?: React.ReactNode;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Описание карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    contentSlot?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
    /** Слот для действия */
    actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
                                       className,
                                       image,
                                       captionSlot,
                                       title,
                                       subtitle,
                                       contentSlot,
                                       onClick,
                                       actionSlot
                                   }) => {

    return (
        <div className={cn(styles.cardWrapper, className)} onClick={onClick}>
            <div className={styles.imgWrapper}>
                <img src={image} alt={'картинка'}/>
            </div>
            <div className={styles.contentWrapper}>
                {captionSlot && <p className={styles.textContent}>{captionSlot}</p>}
                <Text className={styles.title}>{title}</Text>
                {subtitle}
                <div className={styles.actionsWrapper}>
                    <div className={styles.contentSlot}>{contentSlot}</div>
                    {actionSlot}
                </div>
            </div>
        </div>
    )
};

export default Card;
