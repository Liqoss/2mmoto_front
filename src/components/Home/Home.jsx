import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './styles';
import './slider.css';
import slider1 from '../../assets/slider1.jpg'; import slider2 from '../../assets/slider2.jpg'; import sliderOldmoto from '../../assets/slider-oldmoto.jpg'; import sliderFace from '../../assets/slider-face.png';

const Home = () => {
    const classes = useStyles();

    const toggleCategorie = () => {
        let ul = document.getElementById('ul');
        ul.classList.add('ulClicked')
    }

    const untoggleCategorie = () => {
        let ul = document.getElementById('ul');
        ul.classList.remove('ulClicked')
    }
    
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <div className='slider'>
                <div className='slides'>
                    <input type='radio' name='radio-btn' id='radio1'></input>
                    <input type='radio' name='radio-btn' id='radio2'></input>
                    <input type='radio' name='radio-btn' id='radio3'></input>
                    <input type='radio' name='radio-btn' id='radio4'></input>
                    <input type='radio' name='radio-btn' id='radio5'></input>
                    <input type='radio' name='radio-btn' id='radio6'></input>

                    <div className='slide first'>
                        <img src={slider1} alt=''></img>
                    </div>
                    <div className='slide'>
                        <img src={slider2} alt=''></img>
                    </div>
                    <div className='slide'>
                        <img src={sliderOldmoto} alt=''></img>
                    </div>
                    <div className='slide'>
                        <img src={sliderFace} alt=''></img>
                    </div>
                </div>

                <div className='navigation-manual'>
                    <label for='radio1' className='manual-btn'></label>
                    <label for='radio2' className='manual-btn'></label>
                    <label for='radio3' className='manual-btn'></label>
                    <label for='radio4' className='manual-btn'></label>
                </div>
            </div>
            <h1 className={classes.ul_title} onClick={toggleCategorie}>Choisir une catégorie</h1>
            <ul className={classes.ul} id='ul'>
                <div className={classes.cross} onClick={untoggleCategorie}><span className={classes.crossLeft}></span><span className={classes.crossRight}></span></div>
                <li><Button type='button' className={classes.li} color='default' component={Link} to='/products'>Tous</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=accessoires-cros' id='accessoires-cross'>Accessoires cross</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=blouson' id='blouson'>Blouson</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=casque' id='casque'>Casque</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=gants' id='gants'>Gants</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=liquide' id='liquide'>Liquides</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=pneu' id='pneu'>Pneu</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=vetement' id='vetement'>Vêtement</Button></li>
                <li><Button type='button' variant='outlined' color='default' className={classes.li} component={Link} to='/products?cat=autre' id='autres'>Autres</Button></li>
            </ul>
        </main>
    )
}

export default Home;