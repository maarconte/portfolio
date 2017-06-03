import React, { Component, PropTypes } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import BurgerMenu from 'react-burger-menu';
import About from '../../components/Sidebar/About';
import CV from '../../components/Sidebar/CV';
import Skills from '../../components/Sidebar/Skills';

var MenuWrap = React.createClass({

    getInitialState() {
        return {hidden : false};
    },

    toggle() {
        this.setState({hidden: !this.state.hidden});
    },

    render() {

        let style;

        if (this.state.hidden) {
            style = {display: 'none'};
        }

        return (
            <div style={style} className={this.props.side}>
                {this.props.children}
            </div>
        );
    }
});

export default class LeftSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'scaleDown',
            side: 'left',
            hidden: true,
        };
    };

    render() {
        const Menu = BurgerMenu[this.state.currentMenu];
        var styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                left: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenu: {
                background: '#fff',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em',
                
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        };

        return (
            <MenuWrap wait={20}>
                <Menu
                    id={"scaleDown"}
                    styles={styles}
                    className={"sidebar"}  
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}
                >
                    {console.log(Menu)}
   <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
    <Tab label="About"><About/></Tab>
    <Tab label="CV"></Tab>
    <Tab label="Skills"></Tab>
</Tabs>
                </Menu>
            </MenuWrap>
        );
    }
};