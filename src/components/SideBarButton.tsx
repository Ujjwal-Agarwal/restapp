'use client'
import * as React from 'react';
import Button from '@mui/joy/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell, faBurger, faEnvelope, faGears, faHeadset, faHouseChimney, faWallet } from '@fortawesome/free-solid-svg-icons'
import {SpaceDashboard,LunchDining,Mail,Payments, Settings, Campaign, SupportAgent,ExitToApp} from '@mui/icons-material'
// import LunchDining from '@mui/icons-material/LunchDining'


interface SideBarButtonProps {
    text: string,
    isDisabled: boolean,
    type:string
}

export default function SideBarButton(props: SideBarButtonProps) {
    function SideBarButtonIcon(){
        switch(props.type){
            case 'dashboard':
                // return <div className='align-middle'><FontAwesomeIcon icon={faHouseChimney} size="lg" /></div>
                return  <SpaceDashboard fontSize='medium' />
            case 'food':
                // return <div className='align-middle'><FontAwesomeIcon icon={faBurger} size="lg" /></div>
                return <LunchDining fontSize='medium' />
            case 'message':
                // return <div className='align-middle'><FontAwesomeIcon icon={faEnvelope} size="lg" /></div>
                return  <Mail fontSize='medium' />
            case 'bills':
                // return <div className='align-middle'><FontAwesomeIcon icon={faWallet} size="lg" /></div>
                return  <Payments fontSize='medium' />
            case 'settings':
                // return <div className='align-middle'><FontAwesomeIcon icon={faGears} size="lg" /></div>
                return <Settings fontSize='medium' />
            case 'notifications':
                // return <div className='align-middle'><FontAwesomeIcon icon={faBell} size="lg" /></div>
                return <Campaign fontSize='medium' />
            case 'support':
                // return <div className='align-middle'><FontAwesomeIcon icon={faHeadset} size="lg" /></div>
                return  <SupportAgent fontSize='medium' />
            case 'signout':
                return <ExitToApp fontSize='medium' />
            default:
                return null
        }
    }
    return (
        <Button
            size="md"
            disabled={props.isDisabled}
            sx={(theme) => ({
                background: `#F8F8F7`,
                fontWeight: 'md', // short-hand syntax, same as `theme.fontWeight.lg`,
                height: `50px`,
                borderRadius:`15px`,
                color: '#000000',
                width:'100%',
                justifyContent: 'flex-start',
                '&:hover': {
                    background: `#FFC840`,

                },
            })}
        >
            <div className='flex flex-start gap-4 items-center justify-center'>{SideBarButtonIcon()}
            <p className='align-middle'>{props.text}</p></div>
        </Button>
    );
}
