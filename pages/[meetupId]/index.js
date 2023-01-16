import { MongoClient } from "mongodb";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}
export async function getStaticPaths(){
  const client = await MongoClient.connect('mongodb+srv://<USER>:<PWD>@clusterabhi.bpxffpl.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({},{_id: 1}).toArray();
  console.log('>>>>> IDs',meetups);
  return {
    fallback: false,
    paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() }}))
  }
}
export async function getStaticProps(context){
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "New York City, Park Street, 012234",
        description: "New York City has a population of 23.58 million (urban area)"
      }
    }
  }
}
export default MeetupDetails;
