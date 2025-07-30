const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/elements',(req,res) => {
    res.json([
        {
            id:1,
            title:'Your teacher is',
            name:"Ozzy",
            predmet:"Eanglish",
            content:"We are a group of developers...",
            picture:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-07/250706-black-sabbath-4-rs-b6e801.jpg"
        },
        {
            id: 2,
            title: 'Quick Links',
            name:"serhii",
            predmet:"Eanglish",
            content: 'пеніа, іпіапі, івапів',
            picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetware.com%2Fpictures%2Findia-ind.htm&psig=AOvVaw1BkBpIcP1iimcdA9I3py7f&ust=1754000811531000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCODIwazQ5Y4DFQAAAAAdAAAAABAE",
        },
        {
            id: 3,
            title: 'Contact',
            name:"",
            predmet:"Eanglish",
            content: 'sergeyzt50@gmail.com',
            picture:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-07/250706-black-sabbath-4-rs-b6e801.jpg"
        }
    ])
})

app.get('/', (req, res) => {
    res.send('rgrgwrgwgwrgwrg');
})
app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
