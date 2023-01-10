import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:'https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg',
    address: 'New York City, Park Street, 012234',
    description: 'New York City has a population of 23.58 million (urban area)'

  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:'https://lp-cms-production.imgix.net/2021-02/Tokyo%20Main.jpg',
    address: 'Tokyo, DD Street, 3456',
    description: 'Tokyo has a population of 39 million (urban area)'

  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image:'https://images.skyscrapercenter.com/uploads/MexicoCity_Reforma_2020_(CC__BY)Nan__Palmero210126-050124.jpg',
    address: 'Mexico City, Soul Street, 870',
    description: 'Mexico City has a population of 21.80 million (metropolitan area)'

  } 
];
function HomePage(props) {
  return <MeetupList meetups={props.meetups}/>
}
// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS 
//     }
//   }
// }

export async function getStaticProps(){
  // fetch data here
  return {
    props : {
      meetups : DUMMY_MEETUPS
    },
    // revalidate : 10 // to unlock incremental static generation
  }
}
export default HomePage;