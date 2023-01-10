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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        }
      },
      {
        params: {
          meetupId: 'm2',
        }
      }
    ]
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
