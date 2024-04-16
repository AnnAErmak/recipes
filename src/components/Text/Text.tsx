import * as React from 'react'

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
type H1Props = {
    clName?: string;
    children: React.ReactNode;
}
// const H1: React.FC<H1Props> = ({clName, children}) => {
//
//     return <h1 className={clName}>{children}</h1>
//
// }
// const Text: React.FC<TextProps> = ({ className, tag, children }) => {
//     return (
//         <H1 clName={className}>
//             {children}
//         </H1>
//     );
// };

// className={cn(className, styles.lainCount, {
//     [styles.primary]: color === 'primary',
//         [styles.secondary]: color === 'secondary',
//         [styles.accent]: color === 'accent',
// })}

const Text: React.FC<TextProps> = ({className, tag, children}) => {
    switch (tag) {
        case 'h1':
            return <h1 className={ className}> {children} </h1>
        case 'h2':
            return <h2>{children}</h2>
        case 'h3':
            return <h3>{children}</h3>
        case 'h4':
            return <h4>{children}</h4>
        case 'h5':
            return <h5>{children}</h5>
        case 'h6':
            return <h6>{children}</h6>
        case 'div':
            return <div>{children}</div>
        case 'p':
            return <p>{children}</p>
        case 'span':
            return <span>{children}</span>
        default:
            return <p>{children}</p>
    }
}

export default Text;
