import {useContext} from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../Components/Meetups/MeetupList';

function FavoritesPage(){
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>You have no favorites saved</p>;
    }else{
        content = <MeetupList meetups={favoriteCtx.favorites} />;
    }

    
    return <section>
        <h1>Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;