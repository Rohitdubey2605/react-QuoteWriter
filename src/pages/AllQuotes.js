import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES =[
    {
        id: "1",
        author: 'Rohit',
        text: 'Live a little'
    },
    {
        id: "2",
        author: 'Manna',
        text: 'Lucknow chalo'
    },
    {
        id: "3",
        author: 'Pade',
        text: 'Bhandare chalo'
    }
]
const AllQuotes = ()=>{
    return (<QuoteList quotes = {DUMMY_QUOTES}/>);
}

export default AllQuotes;