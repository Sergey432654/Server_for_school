const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/elements',(req,res) => {
    res.json([
        {
            id:1,
            title:'About us',
            content:"We are a group of developers...",
            penis: 'gsgsfgsgsdfgsdfg',
            picture:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-07/250706-black-sabbath-4-rs-b6e801.jpg"
        },
        {
            id: 2,
            title: 'Quick Links',
            content: 'пеніа, іпіапі, івапів',
            picture:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2025-07/250706-black-sabbath-4-rs-b6e801.jpg",
        },
        {
            id: 3,
            title: 'Contact',
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
