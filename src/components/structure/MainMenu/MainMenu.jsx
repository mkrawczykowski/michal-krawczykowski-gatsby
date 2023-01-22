import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import * as styles from './MainMenu.module.scss';

const MainMenu = () => {
    console.log('styles')
    console.log(styles)

    const data = useStaticQuery(graphql`
        query MainMenuQuery{
            allWpMenu(filter: {locations: {eq: GATSBY_HEADER_MENU}}) {
                nodes {
                    menuItems {
                        nodes {
                        id
                        cssClasses
                        label
                        uri
                        }
                    }
                }
            }
        }
    `)
    
    const menuItems = data.allWpMenu.nodes[0].menuItems.nodes;
    
    let classesStyles = [];
        return(
            <>
                <ul className={styles.mainMenu}>
                {/* <ul> */}
                    {   
                        menuItems.map((menuItem) => {
                            menuItem.cssClasses.forEach(cssClass => {
                                if (styles[cssClass]){
                                    classesStyles.push(styles.mainMenu__item);
                                    classesStyles.push(styles[cssClass]);
                                }                                
                            })
                            return(
                                <li className={classesStyles.join(' ')} key={menuItem.id}><Link to={menuItem.uri}>{menuItem.label}</Link></li>
                            )
                        })
                    }
                </ul>
            </>
        )
}

export default MainMenu;