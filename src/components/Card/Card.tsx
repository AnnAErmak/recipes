import cn from "classnames";
import * as React from 'react';
import styles from './Card.module.scss'

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
        <div className={cn(
            styles.cardWrapper,
            className ? className : ''
        )}
             onClick={onClick}
        >
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={image} alt={'картинка'}/>
            </div>
            <div className={styles.contentWrapper}>
                {captionSlot}
                {title}
                {subtitle}
                <div className={styles.actionsWrapper}>
                    <div>{contentSlot}</div>
                    {actionSlot}
                </div>
            </div>
        </div>
    )
};

export default Card;
