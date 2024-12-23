import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import Nav from './Nav'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const DrawerList = (
        <Box
            sx={{ width: 180 }}
            role="presentation"
            onClick={() => setIsOpen(false)}>
            <Nav />
        </Box>
    )

    return (
        <div>
            <DensityMediumIcon
                onClick={() => setIsOpen(true)}></DensityMediumIcon>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default HamburgerMenu
