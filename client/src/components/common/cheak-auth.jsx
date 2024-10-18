import React from 'react'
import { useLocation } from 'react-router-dom'

const CheakAuth = (isAuthenticated,user,children) => {
    const location=useLocation()
    if (!isAuthenticated && !(location.pathname.includes('/login')||(location.pathname.includes('/resister')))) {
        return <Navigator to='/auth/login' />
    }
     if (isAuthenticated && (location.pathname.includes('/login')||(location.pathname.includes('/resister')))) {
        if (user?.role=='admin') {
            return <Navigator to='/admin/dashboard' />
        }else{
            return <Navigator to='/shop/home' />
        }
        // return <Navigator to='/auth/login' />
    }
    if (isAuthenticated&& user?.role!='admin'&&location.pathname.includes('admin')) {
        return <Navigator to='/not-found'/>
    }

 if (isAuthenticated&& user?.role=='admin'&&location.pathname.includes('shop')) {
           return <Navigator to='/admin/dashboard'/>
 
 }
 return(<>
 {children}
 </>);
}

export default CheakAuth