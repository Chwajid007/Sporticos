import React from 'react'
import { CommonActions, StackActions } from '@react-navigation/native';




export const navigationRef = React.createRef();

// NAVIGAT TO THE SCREEN
export const navigate = (screen, params) => {
    navigationRef.current && navigationRef.current.navigate(screen, params)
}


// NAVIGATE TO THE STACK AND THE RELATED SCREEN
export const navigateFromStack = (stack, screen, params) => {
    navigationRef.current && navigationRef.current.navigate(stack,
        {
            screen: screen,
            params: params
        }
    )
}

// GO BACK TO PREVIOUS SCREEN
export const goBack = () => {
    navigationRef.current && navigationRef.current.goBack();

}


// REMOVE THE CURRENT SCREEN FROM STACK
export const navigateReplace = (screen, params) => {
    navigationRef.current && navigationRef.current.dispatch(StackActions.replace(screen, params));

}


// NAVIGATE TO THE PARENT SCREEN
export const popToTop = () => {
    navigationRef.current && navigationRef.current.dispatch(StackActions.popToTop());
    //  navigationRef.current.popToTop();
}

// IT WILL RESET ALL THE PREVIOUS SCREENS
export const navigateReset = (route, params) => {
    navigationRef.current && navigationRef.current.dispatch(CommonActions.reset({
        index: 0, // Specifies the index of the screen you want to navigate to
        routes: [{ name: route, params: params }], 
    }));
}
