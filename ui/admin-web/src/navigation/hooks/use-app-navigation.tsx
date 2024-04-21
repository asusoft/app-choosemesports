import { useNavigate } from 'react-router-dom';

export const useAppNavigation = () => {
    const navigate = useNavigate()


    const navigateTo = (location: string) => {
       navigate(location)
       window.scrollTo(0, 0)
    }

    return {
        navigateTo
    }
}


