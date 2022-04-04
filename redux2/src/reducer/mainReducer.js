import {combineReducers} from 'redux';
import article from './ArticleReducer';
import gallery from './GalleryReducer';

const rootReducer = combineReducers({
    article,
    gallery
})

export default rootReducer