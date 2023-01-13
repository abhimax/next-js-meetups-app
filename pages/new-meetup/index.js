import NewMeetupForm from '../../components/meetups/NewMeetupForm';
function NewMeetupPage () {
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
    };
    return <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
}
export default NewMeetupPage;