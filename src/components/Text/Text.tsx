import cn from 'classnames';
import * as React from 'react';
import styles from './Text.module.scss';

export type TextProps = {
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?:  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
};

const Text: React.FC<TextProps> = ({

    className,
    tag: Tag= 'p',
    weight = 'normal',
    view='p-14',
    color,
    children,
    maxLines,
   }) => {
    return(
    <Tag
        className={cn(
            styles.text,
            styles[`text_view_${view}`],
            styles[`text_weight_${weight}`],
            styles[`text_color_${color}`],
            !!maxLines && styles.text_clamp,
            className ? className: ''
        )}
    style={{'--lines-count': maxLines} as React.CSSProperties}
    >
        {children}
    </Tag>
)
}

export default Text;
