import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage () {
    const route = useRouter();
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup',{
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.json();
        console.log('data comes from the api >>',data);
        route.push('/');
    };
    return (
      <Fragment>
        <Head>
          <title>Add New Meetup</title>
          <meta
            name="description"
            content="Add your own meetups and create amazing networking opportunities."
          />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Fragment>
    );
}
export default NewMeetupPage;