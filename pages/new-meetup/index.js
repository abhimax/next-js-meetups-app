import { useRouter } from 'next/router';
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
    return <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
}
export default NewMeetupPage;