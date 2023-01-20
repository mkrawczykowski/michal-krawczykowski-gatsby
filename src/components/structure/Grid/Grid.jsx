import React from 'react';
import * as styles from './Grid.module.scss';

const Container = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

const Row = ({children}) => {
    return(
        <div className={styles.row}>
            {children}
        </div>
    )
}

const Col = ({children, classes}) => {
    const splitClasses = classes.split(' ');

        const reactifySplitClass = (classToReactify) => {
            let charPosition = 0;
            let dashPosition = 0;
            let reactifiedClass = '';
            let uppercasedClass = '';
            let removedDashClass = '';

            while (charPosition < classToReactify.length && dashPosition >= 0){
                console.log('classToReactify');
                console.log(classToReactify);
                dashPosition = classToReactify.indexOf('-', charPosition);
                console.log('dashPosition')
                console.log(dashPosition)

                const replaceAt = (whereToReplace, whatPosition, newValue) => {
                    return whereToReplace.substring(0, whatPosition) + newValue + whereToReplace.substring(whatPosition+1);
                }

                if (dashPosition > 0){
                    uppercasedClass = replaceAt(classToReactify, dashPosition+1, classToReactify[dashPosition+1].toUpperCase());
                    console.log('uppercasedClass');
                    console.log(uppercasedClass);
                    removedDashClass = replaceAt(uppercasedClass, dashPosition, '');
                    console.log('removedDashClass');
                    console.log(removedDashClass);
                }
                charPosition = dashPosition + 1;
                // console.log('position')
                // console.log(position)
                classToReactify = removedDashClass;
                
                console.log('------------');
            }
            console.log(styles)
            console.log('styles.removedDashClass')
                
            console.log(styles[removedDashClass])
            console.log('========================================')
            return styles[removedDashClass];
        }


    let reactifiedClasses = '';
    splitClasses.map((splitClass) => {
        reactifiedClasses += reactifySplitClass(splitClass);
        console.log('reactifiedClasses')
        console.log(reactifiedClasses)
        reactifiedClasses += ' ';
    })
    return(
        <div className={[styles.col, reactifiedClasses].join(' ')}>
            {children}
        </div>
    )
}

Col.defaultProps = {
    classes: ''
}

export {Container, Row, Col};