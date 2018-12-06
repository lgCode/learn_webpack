import img from './1.jpg';

var App = {
    template:`
        <div>
            <img :src="imgSrc" />
        </div>
    `,
    data(){
        return {
            imgSrc:img
        }
    }
}

export default App;
